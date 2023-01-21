import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ArrowButtons = () => {
  const { materials, course } = useSelector((state) => state.courses);
  const { id, courseId } = useParams();
  const navigate = useNavigate();

  const navArray = course && course.sub_lesson_2s ? course.sub_lesson_2s.map((item) => item.id) : [0];
  const isPrevDisabled = navArray[0] == courseId || navArray[0] === 0 || navArray.length < 1;
  const isNextDisabled = navArray[navArray.length - 1] == courseId || navArray[0] === 0 || navArray.length < 1;
  console.log(navArray);
  const onNavigate = (num) => {
    const findIndex = navArray.indexOf(Number(courseId));
    if (findIndex !== 0 || findIndex !== navArray.length - 1) {
      navigate(`/course/${id}/${navArray[findIndex + num]}`);
    }
    //   setCount((prev) => prev + num);
  };
  return (
    <div className="arrow">
      <button onClick={() => onNavigate(-1)} disabled={isPrevDisabled} className="btn">{`< Prev`}</button>
      <button onClick={() => onNavigate(1)} disabled={isNextDisabled} className="btn">{`Next >`}</button>
    </div>
  );
};

export default ArrowButtons;
