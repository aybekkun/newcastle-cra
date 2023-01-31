import { Button, Input, Select } from "antd";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createTest, fetchMaterials, updateSubSubLesson } from "../../../redux/lessons/asyncActions";
import { setClearBlocks } from "../../../redux/lessons/slice";
import Edit from "../../Editer/Edit";

const LessonEditMaterials = () => {
  const dispatch = useDispatch();

  const { isSending, lesson, blocks } = useSelector((state) => state.lessons);
  const navigate = useNavigate();
  const { id } = useParams();

  const [subInput, setSubInput] = React.useState("");
  const [materialsType, setMaterialsType] = React.useState("Materials");
  const [data, setData] = React.useState([]);
  const isMounted = React.useRef(false);
  console.log("data", data);
  React.useEffect(() => {
    (async function () {
      await dispatch(fetchMaterials({ id: id }));
    })();
    return () => {
      setData([]);
      dispatch(setClearBlocks());
    };
  }, [id]);

  React.useEffect(() => {
    setSubInput(lesson.name);
    setData(blocks);
    return () => {
      setData([]);
    };
  }, [blocks]);

  const onFinish = async () => {
    if (!subInput || !data) {
      alert("Hamma mag`lumatni kiriting!!!");
    } else {
      await dispatch(updateSubSubLesson({ id: id, name: subInput, data: data }));
      if (subInput === "Test") {
        await dispatch(createTest({ name: subInput, sub_lesson_id: id, data: data }));
      }
      navigate(-1);
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

  return (
    <div>
      <Button loading={isSending} type="primary" style={{ marginTop: "10px", marginRight: "10px" }} onClick={onFinish}>
        Save
      </Button>

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
      {data.length > 0 ? <Edit blocks={data} handleSaveData={(value) => setData(value)} /> : <h2>Empty</h2>}
    </div>
  );
};

export default LessonEditMaterials;
