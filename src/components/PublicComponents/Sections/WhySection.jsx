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
            <h2 className="why__title title">Nima uchun ingliz tilini biz bilan o'rganishingiz kerak?</h2>
            <p className="why__text text">
              Bu platforma orqali siz ingliz tilini xoxlagan joyingizda va xoxlagan vaqtingizda o'rganishingiz mumkin.
              O'rganish davomida siz birinchi so'zlar yodlaysiz keyin gramatika o'rganasiz va shu ikkisi ishtirokida
              ingluz tilidagi 4 mahoratingizni (o'qib tushunish, eshitib tushunish, yozish va gapirish) oshirib borasiz
            </p>
          </div>
          <div className="why__cards">
            <div className="why__card-item">
              <div className="why__card-image-box">
                <img src={computerIcon} alt="computer" />
              </div>
              <h4 className="why__card-title">Vaqt </h4>
              <p className="why__card-desc text">O'zingizga qulay vaqtda o'rganing.</p>
            </div>
            <div className="why__card-item">
              <div className="why__card-image-box">
                <img src={checkIcon} alt="check" />
              </div>
              <h4 className="why__card-title">Joy </h4>
              <p className="why__card-desc text">O'zingizga qulay joyda o'rganing</p>
            </div>
            <div className="why__card-item">
              <div className="why__card-image-box">
                <img src={compasIcon} alt="compas" />
              </div>
              <h4 className="why__card-title"> Yo'l </h4>
              <p className="why__card-desc text">
                O'quv markazlariga borishga ketadigan vaqtingiz va pulingiz yoningizga qoladi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
