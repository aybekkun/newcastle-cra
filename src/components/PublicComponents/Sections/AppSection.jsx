
import googleIcon from "../../../assets/google.svg";
import phoneImg from "../../../assets/phone.png";

const AppSection = () => {
  return (
    <section className="app">
      <div className="container">
        <div className="app__inner">
          <img src={phoneImg} className="app__img" alt="phone" />
          <div className="app__desc-box">
            <h3 className="app__subtitle subtitle">choose your path</h3>
            <h2 className="app__title title">Download Our App</h2>
            <p className="app__desc text">
              Tincidunt sem sed tellus ullamcorper nulla phasellus eget sem. Ornare sagittis vel ornare elit dignissim
              eget ullamcorper risus.
            </p>
            <ul className="prepare__list app__list">
              <li className="prepare__list-item">Tincidunt sem sed tellus ullamcorper nulla phasellus</li>
              <li className="prepare__list-item">Tincidunt sem sed tellus ullamcorper nulla phasellus</li>
              <li className="prepare__list-item">Tincidunt sem sed tellus ullamcorper nulla phasellus</li>
            </ul>
            <div className="top__apps app__item">
              <a href="#" className="top__app">
                <img src={googleIcon} alt="google" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
