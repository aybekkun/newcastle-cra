import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatarImg from "../../assets/avatar.jpg";
const SliderSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false,
  };
  return (
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        {/* @ts-ignore */}
        <Slider {...settings}>
          <div className="swiper-slide">
            <p className="swiper-desc textF">
              Tincidunt sem sed tellus ullamcorper nulla phasellus eget sem. Ornare sagittis vel ornare elit dignissim
              eget ullamcorper risus.
            </p>
            <div className="avatar">
              <img src={avatarImg} alt="avatar" />
              <div className="avatar__desc-box">
                <h4>Johnny Dape</h4>
                <span>Ceo</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <p className="swiper-desc textF">
              Tincidunt sem sed tellus ullamcorper nulla phasellus eget sem. Ornare sagittis vel ornare elit dignissim
              eget ullamcorper risus.
            </p>
            <div className="avatar">
              <img src={avatarImg} alt="avatar" />
              <div className="avatar__desc-box">
                <h4>Johnny Dape</h4>
                <span>Ceo</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <p className="swiper-desc textF">
              Tincidunt sem sed tellus ullamcorper nulla phasellus eget sem. Ornare sagittis vel ornare elit dignissim
              eget ullamcorper risus.
            </p>
            <div className="avatar">
              <img src={avatarImg} alt="avatar" />
              <div className="avatar__desc-box">
                <h4>Johnny Dape</h4>
                <span>Ceo</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderSlick;
