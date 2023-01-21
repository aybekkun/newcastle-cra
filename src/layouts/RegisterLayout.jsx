import React from "react";
import registerBgImg from "../assets/reg-bg.jpg";
import logoImg from "../assets/logo.png";
import { Link, NavLink, Outlet } from "react-router-dom";
const RegisterLayout = () => {
  return (
    <div className="register">
      <div className="register__desc-box" style={{ backgroundImage: `url(${registerBgImg})` }}>
        <div className="register__desc">
          <h2>online o’qitish platformasiga xush kelibsiz</h2>
          <p>100% online o’qitishga moslashgan o’quv platformasi</p>
        </div>
      </div>
      <div className="register__enter">
        <Link to="/" className="logo">
          <img src={logoImg} alt="" />
        </Link>
        <div className="register__sign">
          <ul className="register__nav">
            <li className="register__nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active register__nav-link" : "register__nav-link")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="register__nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active register__nav-link" : "register__nav-link")}
                to="/signin"
              >
                Kirish
              </NavLink>
            </li>
            <li className="register__nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active register__nav-link" : "register__nav-link")}
                to="/signup"
              >
                Registratsiya
              </NavLink>
            </li>
          </ul>
          <div className="sign">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
