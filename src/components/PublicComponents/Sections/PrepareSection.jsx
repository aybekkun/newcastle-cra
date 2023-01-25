import React from "react";
import manThree from "../../../assets/man-3.jpg";
import manFour from "../../../assets/man-4.jpg";
const PrepareSection = () => {
  return (
    <section className="prepare">
      <div className="container">
        <div className="prepare__inner">
          <div className="prepare__desc-box">
            <h3 className="prepare__subtitle subtitle">choose your path</h3>
            <h2 className="prepare__title title">
              Bu Platforma orqali siz noldan boshlab ingliz tili Intermadiate&nbsp;(B1) darajagacha o'rgana olasiz!
            </h2>
            <p className="prepare__desc text">Kurs o'zbek va qoraqolpoq tillarida ishlab chiqilgan.</p>
            <div className="prepare__lists">
              <ul className="prepare__list">
                <li className="prepare__list-item">
                  BEGINNER Unitlar soni 14 Yangi so'zlar ( wordlist) 1000 Daraja A1{" "}
                </li>
                <li className="prepare__list-item">
                  ELEMENTARY Unitlar soni 12 Yangi so'zlar (wordlist) 1000 Daraja A1 +
                </li>
                <li className="prepare__list-item">
                  Pre-Intermadiate Unitlar soni 12 Yangi so'zlar (wordlist) 1100 Daraja A2
                </li>
              </ul>
              <ul className="prepare__list">
                <li className="prepare__list-item">
                  Intermadiate Unitlar soni 12 Yangi so'zlar (wordlist) 1000 Daraja B1
                </li>
                <li className="prepare__list-item">Tincidunt sem sed tellus ullamcorper nulla phasellus</li>
                <li className="prepare__list-item">Tincidunt sem sed tellus ullamcorper nulla phasellus</li>
              </ul>
            </div>
          </div>
          <div className="image-box">
            <img src={manThree} className="image-box-img-1" alt="man" />
            <img src={manFour} className="image-box-img-2" alt="man" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepareSection;
