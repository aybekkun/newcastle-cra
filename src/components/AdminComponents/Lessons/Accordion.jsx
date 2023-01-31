import cls from "classnames";
import React from "react";

import { Button, Form, Input, Popover, Space } from "antd";
import { useDispatch } from "react-redux";
import { setCoursesCount } from "../../../redux/courses/slice";
import { deleteLesson, editLesson, editSubLesson } from "../../../redux/lessons/asyncActions";

const Accordion = ({ type = "", id = 0, title = "Lesson", children }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const onFinish = async (values) => {
    if (type === "lesson") {
      await dispatch(editLesson({ id: id, name: values.name }));
      setOpen(false);
      dispatch(setCoursesCount());
    }
    if (type === "sublesson") {
      await dispatch(editSubLesson({ id: id, name: values.name }));
      setOpen(false);
      dispatch(setCoursesCount());
    }
  };

  const onDelete = async () => {
    if (window.confirm(`${title} ochirilsinmi`)) {
      if (type === "lesson") {
        await dispatch(deleteLesson({ id: id }));
        setOpen(false);
        dispatch(setCoursesCount());
      }
      if (type === "sublesson") {
      }
    }
  };
  return (
    <div className={cls("accordion active")}>
      <div className="accordion__label">
        <span style={{ display: "flex" }}>{title}</span>
        <Space style={{ marginLeft: "5px" }}>
          <Popover
            content={
              <div>
                <Form onFinish={onFinish}>
                  <Form.Item name={"name"} required>
                    <Input />
                  </Form.Item>
                  <Button htmlType="submit" size="small">
                    OK
                  </Button>
                  <a style={{ marginLeft: "10px" }} onClick={hide}>
                    Close
                  </a>
                </Form>
              </div>
            }
            title={`Edit ${type}`}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Button size="small">Edit</Button>
          </Popover>
          <Button onClick={onDelete} size="small" danger>
            Delete
          </Button>
        </Space>
      </div>

      <div className="accordion__content">{children}</div>
    </div>
  );
};

export default Accordion;
