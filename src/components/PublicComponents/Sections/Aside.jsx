import React from "react";
import { useSelector } from "react-redux";

import Accordion from "../Accordion";
import AccordionItem from "../AccordionItem";
const Aside = ({ id }) => {
  const { course } = useSelector((state) => state.courses);

  return (
    <aside className="aside">
      <h3 className="aside__title">Materials</h3>
      {course.lessons &&
        course.lessons.map((item) => (
          <Accordion key={item.id} id={item.id} title={item.name}>
            {item.sub_lessons.map((sub) => (
              <Accordion id={sub.id} title={sub.name} key={sub.id}>
                {sub.sub_lesson_2s.length > 0 ? (
                  sub.sub_lesson_2s.map((subItem) => (
                    <AccordionItem
                 
                      available={item.available}
                      link={`${id}/${subItem.id}`}
                      title={subItem.name}
                      key={subItem.id}
                    />
                  ))
                ) : (
                  <AccordionItem title="No courses" />
                )}
              </Accordion>
            ))}
          </Accordion>
        ))}
    </aside>
  );
};

export default Aside;
