import React from "react";
import Card from "../Card";
import axios from "axios";
import { fetchCourses } from "../../../redux/courses/asyncActions.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const PopularSection = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.courses);
  const { pathname } = useLocation();

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async function () {
      if (pathname === "/courses") {
        await dispatch(fetchCourses({ cancelToken: cancelToken.token }));
      } else {
        await dispatch(fetchCourses({ page: 1, limit: 4, cancelToken: cancelToken.token }));
      }
    })();
    return () => {
      cancelToken.cancel();
    };
  }, [pathname]);

  return (
    <section className="popular">
      <h3 className="popular__subtitle subtitle">ADVANCE YOUR CAREER</h3>
      <h2 className="popular__title title">Popular topics to learn now</h2>
      <div className="container">
        <div className="popular__inner">
          <div className="card">
            {data.map((item) => (
              <Card
                key={item.id}
                secondId={item.sub_lesson_2s_id}
                title={item.title}
                id={item.id}
                price={item.price}
                description={item.description}
                image={item.image}
                lessons={item.lessons}
              />
            ))}
          </div>
          {pathname !== "/courses" && (
            <Link to="/courses" className="btn popular__btn">
              View all topics
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
