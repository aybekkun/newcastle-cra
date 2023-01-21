import { Button, Drawer, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { configDate } from "../../../pages/admin/LessonAddPage";
import { fetchCourse } from "../../../redux/courses/asyncActions";
import { createLesson } from "../../../redux/lessons/asyncActions";

const LessonAddForm = ({ id, handleClose = () => undefined }) => {
  const dispatch = useDispatch();

  const onFinishLessonAdd = async (values) => {
    const params = { name: values.name, course_id: Number(id) };
    await dispatch(createLesson(params));
    await dispatch(fetchCourse({ id }));
    handleClose();
  };
  return (
    <>
      <Form onFinish={onFinishLessonAdd} autoComplete="off">
        <h3>Name of lesson</h3>
        <Form.Item name="name" {...configDate}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleClose} type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LessonAddForm;
