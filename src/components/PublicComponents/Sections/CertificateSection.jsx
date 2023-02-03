import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import manOne from "../../../assets/man-1.webp";
import manTwo from "../../../assets/man-2.webp";
const CertificateSection = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <section className="certificate">
      <div className="container">
        <div className="certificate__inner">
          <div className="certificate__image-box image-box">
            <img src={manOne} className="image-box-img-1" alt="man" />
            <img src={manTwo} className="image-box-img-2" alt="man" />
          </div>
          <div className="certificate__desc-box">
            <h3 className="certificate__subtitle subtitle">Upgrade your skills</h3>
            <h2 className="certificate__title title">Kitobdan qanday foydalaniladi?</h2>
            <p className="certificate__desc text">
              Birinchi navbatda unitga kerak bo'ladigan yangi so'zlar ( wordlist) ni yodlashingiz kerak.
            </p>
            <p className="certificate__desc text">
              Ikkinchi navbatda esa shu unitni gramatikasini yaxshilab o'rganishingiz kerak. Keyin esa bu ikkisidan
              foydalanib siz ingliz tilida matnlar tarjima qilasiz, audiolar eshitasiz, shu so'zlar ishtirokida og'zaki
              va yozma gaplar tuzasiz. Har xil mavzularda kichik va katta insholar yozishni o'rganasiz!{" "}
            </p>
            <Link to={user.role === "guest" ? "/signup" : "/courses"} className="certificate__btn btn">
              Boshlash
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
