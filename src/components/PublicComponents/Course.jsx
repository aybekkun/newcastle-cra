import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCourse } from "../../redux/courses/asyncActions";
import { fetchFree, fetchMaterials } from "../../redux/lessons/asyncActions";
import ShowEditer from "../Editer/ShowEditer";
import ArrowButtons from "./ArrowButtons";
import Comments from "./Comments";
import Aside from "./Sections/Aside";
import Spinner from "./Spinner";
import Test from "./Test";

const Course = () => {
  const { blocks, lesson, isMaterialLoading } = useSelector((state) => state.lessons);
  const { isLoading, course } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const { id, courseId } = useParams();
  const [activeTab, setActiveTab] = React.useState(0);

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async function () {
      window.scrollTo(0, 80);
      await dispatch(fetchCourse({ id: id, cancelToken: cancelToken.token }));
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
                {activeTab === 1 && (
                  <div data-tab-index="3" className="wrapper__desc" id="tab-3">
                    <Comments />
                  </div>
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
