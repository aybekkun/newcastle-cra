import React from "react";
import checkIcon from "../../../assets/icons/check.svg";
import compasIcon from "../../../assets/icons/compas.svg";
import computerIcon from "../../../assets/icons/computer.svg";
import whyBg from "../../../assets/why-bg.svg";
const WhySection = () => {
  return (
    <section className="why" style={{ backgroundImage: `url(${whyBg})` }}>
      <div className="container">
        <div className="why__inner">
          <div className="why__desc-box">
            <h3 className="why__subtitle subtitle">A batter choice</h3>
            <h2 className="why__title title">Why learn with Erudite?</h2>
            <p className="why__text text">
              Tincidunt sem sed tellus ullamcorper nulla phasellus eget sem. Ornare sagittis vel ornare elit dignissim
              eget ullamcorper risus. Non lacinia sed pellentesque vitae.
            </p>
          </div>
          <div className="why__cards">
            <div className="why__card-item">
              <div className="why__card-image-box">
                <img src={computerIcon} alt="computer" />
              </div>
              <h4 className="why__card-title">Learn Anywhere</h4>
              <p className="why__card-desc text">
                Pharetra lacinia vitae augue et integer. Semper risus facilisis nibh
              </p>
            </div>
            <div className="why__card-item">
              <div className="why__card-image-box">
                <img src={checkIcon} alt="check" />
              </div>
              <h4 className="why__card-title">Get Certified</h4>
              <p className="why__card-desc text">
                Pharetra lacinia vitae augue et integer. Semper risus facilisis nibh
              </p>
            </div>
            <div className="why__card-item">
              <div className="why__card-image-box">
                <img src={compasIcon} alt="compas" />
              </div>
              <h4 className="why__card-title">Learn Paths</h4>
              <p className="why__card-desc text">
                Pharetra lacinia vitae augue et integer. Semper risus facilisis nibh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
