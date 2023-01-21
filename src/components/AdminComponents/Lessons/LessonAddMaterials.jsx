import { Button, Input, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../../../redux/courses/asyncActions";
import { createSubSubLesson, createTest } from "../../../redux/lessons/asyncActions";
import Editer from "../../Editer";

const LessonAddMaterials = ({ id, handleChangeTab }) => {
  const dispatch = useDispatch();

  const { course } = useSelector((state) => state.courses);
  const { isSending } = useSelector((state) => state.lessons);

  const [selectId, setSelectId] = React.useState(0);
  const [subSelectId, setSubSelectId] = React.useState(0);
  const [subInput, setSubInput] = React.useState("");
  const [materialsType, setMaterialsType] = React.useState("Materials");
  const [data, setData] = React.useState({});
  const onFinishSubSubLessonAdd = async () => {
    if (!subInput || !subSelectId || !data) {
      alert("Введите все данные");
    } else {
      console.log({ name: subInput, sub_lesson_id: subSelectId, data: data });
      await dispatch(createSubSubLesson({ name: subInput, sub_lesson_id: subSelectId, data: data }));
      if (subInput === "Test") {
        await dispatch(createTest({ name: subInput, sub_lesson_id: subSelectId, data: data }));
      }
      await dispatch(fetchCourse({ id: id }));
      handleChangeTab();
    }
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
  const handleChangeSelect = (value) => {
    setSelectId(Number(value));
  };
  const handleChangeSubSelect = (value) => {
    setSubSelectId(Number(value));
  };
  if (course.sub_lesson_2s < 1){
    return <h1 style={{margin:"20px 0", color:"red"}}>Add Sub lessons!</h1>
  }
    return (
      <div>
        <Button
          loading={isSending}
          type="primary"
          style={{ marginTop: "10px", marginRight: "10px" }}
          onClick={onFinishSubSubLessonAdd}
        >
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
        <Select style={{ minWidth: "140px", marginTop: "10px", marginRight: "10px" }} onChange={handleChangeSubSelect}>
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
        {materialsType !== "Test" && (
          <Input value={subInput} style={{ maxWidth: 440 }} onChange={(e) => setSubInput(e.target.value)} />
        )}

        <Editer handleSaveData={(value) => setData(value)} />
      </div>
    );
};

export default LessonAddMaterials;
