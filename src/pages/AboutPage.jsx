import React from "react";
import CertificateSection from "../components/PublicComponents/Sections/CertificateSection";
import WhySection from "../components/PublicComponents/Sections/WhySection";

const AboutPage = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <h3 className="subtitle">about us</h3>
          <h2 className="title">Why Choose NewCastle</h2>
          <div className="about__inner">
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, a placeat quia labore aperiam quos
              impedit rem provident distinctio deleniti, aliquid vel odio obcaecati non, asperiores voluptatibus.
              Ratione, corporis sed.
            </p>
          </div>
        </div>
      </section>
      <WhySection/>
      <CertificateSection/>
    </>
  );
};

export default AboutPage;
