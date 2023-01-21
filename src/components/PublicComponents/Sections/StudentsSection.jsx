import React from "react";
import SliderSlick from "../SliderSlick";

const StudentsSection = () => {
  return (
    <section className="students">
      <div className="container">
        <div className="students__inner">
          <div className="students__video-box">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Jkj36B1YuDU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="students__desc-box">
            <h3 className="students__subtitle subtitle">Succes stories</h3>
            <h2 className="students__title title">Our Students</h2>
            <SliderSlick />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
