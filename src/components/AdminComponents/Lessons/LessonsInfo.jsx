import React from "react";
import { useSelector } from "react-redux";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";

const LessonsInfo = () => {
  const { course } = useSelector((state) => state.courses);

  return (
    <div className="lesson__info">
      {course &&
        course.lessons &&
        course.lessons.map((item) => (
          <Accordion id={item.id} type="lesson" key={item.id} title={item.name}>
            {item.sub_lessons.map((sub) => (
              <Accordion id={sub.id} type="sublesson" title={sub.name} key={sub.id}>
                {sub.sub_lesson_2s.length > 0 ? (
                  sub.sub_lesson_2s.map((subItem) => (
                    <AccordionItem id={subItem.id} type="material" link={subItem.id} title={subItem.name} key={subItem.id} />
                  ))
                ) : (
                  <AccordionItem title="No courses" />
                )}
              </Accordion>
            ))}
          </Accordion>
        ))}
    </div>
  );
};

export default LessonsInfo;
