import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { fetchCoursesFooter } from "../../redux/courses/asyncActions";
const Footer = () => {
  const dispatch = useDispatch();
  const { footerData } = useSelector((state) => state.courses);

  React.useEffect(() => {
    (async function () {
      await dispatch(fetchCoursesFooter({ page: 1, limit: 5 }));
    })();
  }, []);
  const onScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__main">
            <img  className="footer__img logo__img" src={logo} alt="logo" />
            <p className="footer__desc">O'qituvchisiz ham Ingliz tilini tez va samarali o'rganing</p>
            <ul className="footer__social">
              <li className="footer__social-item">
                <a
                  href="https://instagram.com/newaction_lc?igshid=ZDdkNTZiNTM="
                  target="_blank"
                  className="footer__social-link"
                  rel="noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_52_215)">
                      <path
                        d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_52_215">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li className="footer__social-item">
                <a href="https://t.me/newaction_lc" target="_blank" className="footer__social-link" rel="noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_52_219)">
                      <path
                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.89 13.17L8.903 13.163L9.773 16.033C9.885 16.344 10.039 16.4 10.226 16.374C10.414 16.349 10.513 16.248 10.636 16.13L11.824 14.982L14.374 16.87C14.84 17.127 15.175 16.994 15.291 16.438L16.948 8.616C17.131 7.888 16.811 7.596 16.246 7.828L6.513 11.588C5.849 11.854 5.853 12.226 6.393 12.391L8.89 13.171V13.17Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_52_219">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://www.youtube.com/@newaction_lc"
                  rel="noreferrer"
                  target="_blank"
                  className="footer__social-link"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_52_223)">
                      <path
                        d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_52_223">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <ul className="footer__list">
              <li className="footer__list-title">
                <h4>Useful links</h4>
              </li>
              <li className="footer__list-item">
                <Link onClick={onScroll} to="/" className="footer__list-link">
                  Home
                </Link>
              </li>
              <li className="footer__list-item">
                <Link onClick={onScroll} to="/about" className="footer__list-link">
                  About
                </Link>
              </li>
              <li className="footer__list-item">
                <Link onClick={onScroll} to="/courses" className="footer__list-link">
                  Courses
                </Link>
              </li>
              <li className="footer__list-item">
                <Link onClick={onScroll} to="/contact" className="footer__list-link">
                  Contact
                </Link>
              </li>
            </ul>
            {footerData.length > 0 && (
              <ul className="footer__list">
                <li className="footer__list-title">
                  <h4>Courses</h4>
                </li>
                {footerData.map((course, i) => (
                  <li key={course.id} className="footer__list-item">
                    <Link
                      to={`/course/${course.id}/${course.sub_lesson_2s_id ? course.sub_lesson_2s_id : 0}`}
                      className="footer__list-link"
                    >
                      {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {/* 
            <ul className="footer__list">
              <li className="footer__list-title">
                <h4>Pages</h4>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  Pricing
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  FAQ
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  Privacy Policy
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
