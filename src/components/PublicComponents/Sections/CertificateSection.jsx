import React from "react";

import manOne from "../../../assets/man-1.jpg";
import manTwo from "../../../assets/man-2.jpg";
const CertificateSection = () => {
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
            <h2 className="certificate__title title">Professional Certificates</h2>
            <p className="certificate__desc text">
              Tincidunt sem sed tellus ullamcorper nulla phasellus eget sem. Ornare sagittis vel ornare elit dignissim
              eget ullamcorper risus.
            </p>
            <p className="certificate__desc text">
              Integer in nunc sodales sed. Lobortis mi commodo turpis quisque. Integer nulla a velit sodales at.
              Faucibus suspendisse nullam nisl nullam mauris. Eget tellus ac nulla interdum sed. Cras facilisis etiam
              facilisis morbi diam. Amet dolor amet dolor etiam turpis vitae suspendisse pretium tincidunt. Nisl elit
              ultrices volutpat aliquet laoreet justo. Rutrum sit vitae ac vulputate euismod magna libero.
            </p>
            <a href="#" className="certificate__btn btn">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
