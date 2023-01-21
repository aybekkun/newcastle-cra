import React from "react";
import topImg from "../../../assets/top.png";
import googleIcon from "../../../assets/google.svg";
import topBg from "../../../assets/top-bg.svg";
const TopSection = () => {
  return (
    <section className="top" style={{ backgroundImage: `url(${topBg})` }}>
      <div className="container">
        <div className="top__inner">
          <div className="top__about">
            <p className="top__subtitle">ADVANCE YOUR CAREER</p>
            <h1 className="top__title">Unlimited Online Learning</h1>
            <p className="top__desc">
              Felis purus sit donec magna egestas id consequat neque tortor. Fringilla aliquam diam erat eget. Amet
              magna eget enim et.
            </p>
            <a href="#" className="btn top__btn">
              Get started
            </a>
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
