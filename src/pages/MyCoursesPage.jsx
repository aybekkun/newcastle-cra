import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyCoursesPage = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="mycourse">
      <div className="container">
        <div className="mycourse__inner">
          {user.courses &&
            user.courses.map((item) => (
              <MyCourseItem
                courseId={item.course_id}
                title={item.course_title}
                progress={item.course_complate_done}
                image={item.course_image}
                subId={item.last_sub_lessone_2_id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

const MyCourseItem = ({ courseId, subId, title, progress, image }) => {
  return (
    <div className="mycourse__item">
      <img className="mycourse__item-img" src={`${process.env.REACT_APP_BASE_URL}/public/images/${image}`} alt="" />
      <div className="mycourse__item-box">
        <Link to={`/course/${courseId}/${subId}`}>
          <h3>{title}</h3>
        </Link>

        <div className="mycourse__item-info">
          <div className="mycourse__item-progress">
            <span className="mycourse__item-width" style={{ width: `${progress}%` }}></span>
          </div>
          <div>{progress}%</div>
        </div>

        <Link to={`/course/${courseId}/${subId}`} className="mycourse__item-btn">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default MyCoursesPage;
