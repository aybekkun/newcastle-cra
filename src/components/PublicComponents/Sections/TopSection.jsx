import React from "react";
import topImg from "../../../assets/top.png";
import googleIcon from "../../../assets/google.svg";
import topBg from "../../../assets/top-bg.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const TopSection = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="top" style={{ backgroundImage: `url(${topBg})` }}>
      <div className="container">
        <div className="top__inner">
          <div className="top__about">
            <p className="top__subtitle">ADVANCE YOUR CAREER</p>
            <h1 className="top__title">100% Online Ingliz tilini o'rganish platformasi</h1>
            <p className="top__desc">O'qituvchisiz ham Ingliz tilini tez va samarali o'rganing</p>
            <Link to={user.role === "guest" ? "/signup" : "/courses"} className="btn top__btn">
              Boshlash
            </Link>
            <div className="top__apps">
              <a href="#" className="top__app">
                <img src={googleIcon} alt="google" />
              </a>
            </div>
          </div>
          <img className="top__img" src={topImg} alt="Man" />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
