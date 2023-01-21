import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { configDate } from "../../../pages/admin/LessonAddPage";
import { fetchCourse } from "../../../redux/courses/asyncActions";
import { createSubLesson } from "../../../redux/lessons/asyncActions";

const SubLessonAddForm = ({ id, handleClose = () => undefined }) => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.courses);
  const onFinishSubLessonAdd = async (values) => {
    const params = { name: values.name, lesson_id: Number(values.lesson_id) };
    await dispatch(createSubLesson(params));
    await dispatch(fetchCourse({ id }));
    handleClose();
  };
  return (
    <>
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
          <Button onClick={handleClose} type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SubLessonAddForm;
