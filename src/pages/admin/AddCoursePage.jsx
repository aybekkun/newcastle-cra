import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../../redux/courses/asyncActions";
import Spinner from "../../components/PublicComponents/Spinner";
const configDate = {
  rules: [{ required: true, message: "Пожалуйста введите!" }],
};

const AddCoursePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = React.useState(null);
  const { isSending } = useSelector((state) => state.courses);
  const onFinish = async (values) => {
    const fd = new FormData();
    fd.append("title", values.title);
    fd.append("description", values.description);
    fd.append("price", values.price);
    fd.append("image", image);
    await dispatch(createCourse(fd));
    navigate("/admin/");
    // console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleFile = (e) => {
    let file = e.target.files[0];
    setImage(file);
  };
  return (
    <div className="add">
      {isSending && <Spinner />}
      <Form
        name="form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>Заголовок</h3>
        <Form.Item name={"title"} {...configDate}>
          <Input showCount maxLength={100} placeholder="Заголовок" />
        </Form.Item>
        <h3>Описания</h3>
        <Form.Item name="description" {...configDate}>
          <TextArea
            showCount
            maxLength={100}
            style={{ height: 100, resize: "none" }}
            /*   onChange={onChange} */
            placeholder="text"
          />
        </Form.Item>
        <h3>Цена</h3>
        <Form.Item name="price" {...configDate}>
          <InputNumber
            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            addonAfter="uzs"
            min={100}
          />
        </Form.Item>

        <input
          required
          onChange={handleFile}
          style={{ marginBottom: "20px" }}
          type="file"
          accept="image/png, image/gif, image/jpeg"
        />

        <Form.Item>
          <Button type="primary" disabled={isSending} loading={isSending} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCoursePage;
