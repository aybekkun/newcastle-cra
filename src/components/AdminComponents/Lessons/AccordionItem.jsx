import { Space } from "antd";
import React from "react";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteSubSubLesson } from "../../../redux/lessons/asyncActions";
import { setCoursesCount } from "../../../redux/courses/slice";
const AccordionItem = ({ id = 0, title = "Lesson", link = "", available = false }) => {
  const dispatch = useDispatch();
  const onDelete = async () => {
    if (window.confirm(`${title} ochirilsinmi`)) {
      await dispatch(deleteSubSubLesson({ id: id }));
      dispatch(setCoursesCount());
    }
  };
  return (
    <div className="accordion__item">
      <div className="accordion__item-box">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.3333 13.6667H0.666667C0.489856 13.6667 0.320286 13.5965 0.195262 13.4714C0.0702379 13.3464 0 13.1769 0 13V1.00004C0 0.82323 0.0702379 0.65366 0.195262 0.528636C0.320286 0.403612 0.489856 0.333374 0.666667 0.333374H11.3333C11.5101 0.333374 11.6797 0.403612 11.8047 0.528636C11.9298 0.65366 12 0.82323 12 1.00004V13C12 13.1769 11.9298 13.3464 11.8047 13.4714C11.6797 13.5965 11.5101 13.6667 11.3333 13.6667ZM10.6667 12.3334V1.66671H1.33333V12.3334H10.6667ZM3.33333 3.66671H8.66667V5.00004H3.33333V3.66671ZM3.33333 6.33337H8.66667V7.66671H3.33333V6.33337ZM3.33333 9.00004H8.66667V10.3334H3.33333V9.00004Z"
            fill="black"
          />
        </svg>
        <span>{title}</span>
        <Space style={{ marginLeft: "5px" }}>
          <Link to={`/admin/editer/${link}`}>
            <Button size="small">Edit</Button>
          </Link>
          <Button onClick={onDelete} size="small" danger>
            Delete
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default AccordionItem;
