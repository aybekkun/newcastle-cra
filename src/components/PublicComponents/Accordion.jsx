import React from "react";
import cls from "classnames";

import arrowIcon from "../../assets/icons/arrow.svg";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Accordion = ({ id = 0, title = "Lesson", children }) => {
  // const { active, handleChangeActive } = useActive();
  const [active, setActive] = React.useState(false);
  const { course } = useSelector((state) => state.courses);
  const { courseId } = useParams();

  React.useEffect(() => {
    if (courseId) {
      const isActive = course.lessons.find((lesson) =>
        lesson.sub_lessons.find((sub) => sub.sub_lesson_2s.find((item) => item.id == courseId))
      );
      if (isActive && (isActive.id == id || isActive.sub_lessons.some((sub) => sub.id == id))) {
        setActive(true);
      }
    }
  }, [courseId]);

  const handleChangeActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className={cls("accordion", { active: active })}>
      <div onClick={handleChangeActive} className="accordion__label">
        <span>{title}</span> <img src={arrowIcon} className="accordion__label-img" alt="Arrow" />
      </div>
      <div className="accordion__content">{children}</div>
    </div>
  );
};

export default Accordion;
