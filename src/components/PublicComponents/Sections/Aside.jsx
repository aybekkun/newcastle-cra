import React from "react";
import { useSelector } from "react-redux";
import Order from "../Order";
import Accordion from "../Accordion";
import AccordionItem from "../AccordionItem";
const Aside = ({ id }) => {
  const { course, isLoading } = useSelector((state) => state.courses);
  const { user } = useSelector((state) => state.auth);
  const isThere = user.courses.some((item) => item.course_id === Number(id));

  return (
    <aside className="aside">
      <h3 className="aside__title">Materials</h3>
      {user.role === "guest" || user.role === "user" || !isThere ? (
        <>
          {course.lessons &&
            course.lessons.map((item) => (
              <Accordion key={item.id} title={item.name}>
                {item.sub_lessons.map((sub) => (
                  <Accordion title={sub.name} key={sub.id}>
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
        </>
      ) : (
        <>
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
        </>
      )}

      {!isLoading && <Order id={id} />}
    </aside>
  );
};

export default Aside;
