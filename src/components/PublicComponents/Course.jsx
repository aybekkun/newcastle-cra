import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCourse, fetchCourseFree } from "../../redux/courses/asyncActions";
import { fetchFree, fetchMaterials } from "../../redux/lessons/asyncActions";
import ShowEditer from "../Editer/ShowEditer";

import ArrowButtons from "./ArrowButtons";
import Comments from "./Comments";
import CommentsMaterials from "./CommentsMaterials";
import Aside from "./Sections/Aside";
import Spinner from "./Spinner";
import Test from "./Test";

const Course = () => {
  const { blocks, lesson, isMaterialLoading } = useSelector((state) => state.lessons);
  const { isLoading, course } = useSelector((state) => state.courses);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id, courseId } = useParams();
  const isThere = user.courses.some((item) => item.course_id === Number(id));
  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async function () {
      window.scrollTo(0, 80);
      if (user.role === "guest") {
        await dispatch(fetchCourseFree({ id: id, cancelToken: cancelToken.token }));
      } else {
        await dispatch(fetchCourse({ id: id, cancelToken: cancelToken.token }));
      }
    })();
    return () => {
      cancelToken.cancel();
    };
  }, [id, dispatch]);
  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async function () {
      window.scrollTo(0, 80);
      if (course.sub_lesson_2s_id === Number(courseId)) {
        await dispatch(fetchFree({ id: courseId, cancelToken: cancelToken.token }));
      } else {
        await dispatch(fetchMaterials({ id: courseId, cancelToken: cancelToken.token }));
      }
    })();
    return () => {
      cancelToken.cancel();
    };
  }, [course, courseId, dispatch]);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__inner">
            <div className="wrapper__title-box">
              <h3 className="subtitle wrapper__subtitle">Kurslar </h3>
            </div>

            {isLoading ? (
              <div className="tab-content wrapper__desc-box">
                <Spinner />
              </div>
            ) : (
              <div className="tab-content wrapper__desc-box">
                {isMaterialLoading && <Spinner />}
                {lesson && lesson.name?.toLowerCase() !== "test" ? (
                  <div data-tab-index="1" className="wrapper__desc" id="tab-1">
                    {blocks.length > 0 ? <ShowEditer blocks={blocks} /> : <h2>Нет данных</h2>}
                  </div>
                ) : (
                  <>
                    <Test blocks={blocks} />
                  </>
                )}
                <ArrowButtons />
                {Number(courseId) === course.sub_lesson_2s_id && isThere ? (
                  <div data-tab-index="3" className="wrapper__desc" id="tab-3">
                    <Comments
                      courseId={course.id}
                      sublessonId={course.sub_lesson_2s_id}
                      rating={course.rating_mark_overall}
                      learners={course.learners_count}
                      rated={course.rating_count}
                    />
                  </div>
                ) : isThere ? (
                  <div data-tab-index="3" className="wrapper__desc" id="tab-3">
                    <CommentsMaterials sublessonId={courseId} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
          <Aside id={id} />
        </div>
      </div>
    </>
  );
};

export default Course;
