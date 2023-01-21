import { Button, Drawer, Form, Input, Select, Space } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Accordion from "../../components/PublicComponents/Accordion.jsx";
import AccordionItem from "../../components/PublicComponents/AccordionItem.jsx";
import { fetchCourse } from "../../redux/courses/asyncActions.js";
import { createLesson, createSubLesson, createSubSubLesson } from "../../redux/lessons/asyncActions.js";
import Editer from "../../components/Editer/index.jsx";

export const configDate = {
  rules: [{ required: true, message: "Пожалуйста введите!" }],
};

const LessonAddPage = () => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.courses);
  const { id } = useParams();

  const [lessonOpen, setLessonOpen] = React.useState(false);
  const [type, setType] = React.useState("lessonAdd");
  const [selectId, setSelectId] = React.useState(0);
  const [subSelectId, setSubSelectId] = React.useState(0);
  const [subInput, setSubInput] = React.useState("");
  const [materialsType, setMaterialsType] = React.useState("Materials");

  const [data, setData] = React.useState({});
  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async function () {
      await dispatch(fetchCourse({ id: id, cancelToken: cancelToken.token }));
    })();
    return () => {
      cancelToken.cancel();
    };
  }, [id, dispatch]);

  const showDrawer = (type) => {
    setType(type);
    setLessonOpen(true);
  };

  const onClose = () => {
    setLessonOpen(false);
  };
  const onFinishLessonAdd = async (values) => {
    const params = { name: values.name, course_id: Number(id) };
    await dispatch(createLesson(params));
    await dispatch(fetchCourse({ id }));
    setLessonOpen(false);
  };
  const onFinishSubLessonAdd = async (values) => {
    const params = { name: values.name, lesson_id: Number(values.lesson_id) };
    await dispatch(createSubLesson(params));
    await dispatch(fetchCourse({ id }));
    setLessonOpen(false);
  };
  const onFinishSubSubLessonAdd = async () => {
    if (!subInput || !subSelectId || !data) {
      alert("Введите все данные");
    } else {
      console.log({ name: subInput, sub_lesson_id: subSelectId, data: data });
      await dispatch(createSubSubLesson({ name: subInput, sub_lesson_id: subSelectId, data: data }));
      setType("lessonAdd");
      await dispatch(fetchCourse({ id: id}));
    }
  };

  const handleChangeSelect = (value) => {
    setSelectId(Number(value));
  };
  const handleChangeSubSelect = (value) => {
    setSubSelectId(Number(value));
  };

  const onChangeMaterialsType = (value) => {
    if (value === "Test") {
      setMaterialsType("Test");
      setSubInput("Test");
    } else {
      setSubInput("");
      setMaterialsType("Materials");
    }
  };
  return (
    <div className="lesson">
      <Space>
        <Button onClick={() => showDrawer("lessonAdd")}>Add lesson</Button>
        <Button onClick={() => showDrawer("sublessonAdd")}>Add subLesson</Button>
        <Button onClick={() => setType("materialsAdd")}>Add materials</Button>
      </Space>
      {type !== "materialsAdd" ? (
        <div style={{ maxWidth: "500px", marginTop: "20px" }}>
          {course.lessons &&
            course.lessons.map((item) => (
              <Accordion key={item.id} title={item.name}>
                {item.sub_lessons.map((sub) => (
                  <Accordion title={sub.name} key={sub.id}>
                    {sub.sub_lesson_2s.length > 0 ? (
                      sub.sub_lesson_2s.map((subItem) => <AccordionItem title={subItem.name} key={subItem.id} />)
                    ) : (
                      <AccordionItem title="No courses" />
                    )}
                  </Accordion>
                ))}
              </Accordion>
            ))}
        </div>
      ) : (
        <div>
          <Button type="primary" style={{ marginTop: "10px", marginRight: "10px" }} onClick={onFinishSubSubLessonAdd}>
            Save
          </Button>
          <h3>Select category</h3>
          <Select style={{ minWidth: "140px", marginRight: "10px" }} onChange={handleChangeSelect}>
            {course.lessons &&
              course.lessons.map((item, i) => (
                <Select.Option key={item.id} value={i}>
                  {item.name}
                </Select.Option>
              ))}
          </Select>
          <Select
            style={{ minWidth: "140px", marginTop: "10px", marginRight: "10px" }}
            onChange={handleChangeSubSelect}
          >
            {course.lessons &&
              course.lessons[selectId].sub_lessons.map((sub) => (
                <Select.Option key={sub.id} value={sub.id}>
                  {sub.name}
                </Select.Option>
              ))}
          </Select>
          <Select
            defaultValue="Materials"
            value={materialsType}
            onChange={onChangeMaterialsType}
            style={{ minWidth: "140px", marginTop: "10px" }}
          >
            <Select.Option value="Materials">Materials</Select.Option>
            <Select.Option value="Test">Test</Select.Option>
          </Select>
          {materialsType !== "Test" ? <h3>Name of material</h3> : <h3>Test</h3>}
          {materialsType !== "Test" && <Input value={subInput} onChange={(e) => setSubInput(e.target.value)} />}

          <Editer handleSaveData={(value) => setData(value)} />
        </div>
      )}

      <Drawer title={`Add ${type}`} placement={"right"} closable={false} onClose={onClose} open={lessonOpen}>
        {type === "lessonAdd" && (
          <Form onFinish={onFinishLessonAdd} autoComplete="off">
            <h3>Name of lesson</h3>
            <Form.Item name="name" {...configDate}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button onClick={onClose} type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        )}
        {type === "sublessonAdd" && (
          <Form onFinish={onFinishSubLessonAdd} autoComplete="off">
            <Form.Item name="lesson_id" {...configDate}>
              <Select placeholder="Please select lesson">
                {course.lessons &&
                  course.lessons.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
            <h3>Name of sublesson</h3>
            <Form.Item name={"name"} {...configDate}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button onClick={onClose} type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        )}
      </Drawer>
    </div>
  );
};

export default LessonAddPage;
