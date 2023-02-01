

import passwwordIcon from "../assets/icons/password.svg";
import phoneIcon from "../assets/icons/phone.svg";
import userRegIcon from "../assets/icons/userreg.svg";
import { IMaskInput } from "react-imask";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import React from "react";
import { userReg } from "../redux/auth/asyncActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  let location = useLocation();
  const inputRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      userReg({ name: nameRef.current.value, phone: inputRef.current.value.split(' ').join(''), password: passwordRef.current.value })
    );
  };
  if (isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return (
    <form onSubmit={onSubmit} className="signin" autoComplete="off">
      <h3>Registratsiya</h3>
      <div className="input">
        <img src={userRegIcon} alt="user" />
        <input
          ref={nameRef}
          name="name"
          maxLength={50}
          minLength={2}
          placeholder="Ism, familiya"
          type="text"
          className="sign__tel"
          required
        />
      </div>
      <div className="input">
        <img src={phoneIcon} alt="phone" />
        <IMaskInput
          value={"+998"}
          inputRef={inputRef}

          mask={"+{998} 00 000 00 00"}
          name="phone"
          maxLength={17}
          placeholder="Telefon raqam"
          type="tel"
          className="sign__tel"
          required
        />
      </div>
      <div className="input">
        <img src={passwwordIcon} alt="password" />
        <input
          ref={passwordRef}
          name="password"
          placeholder="Password"
          maxLength={50}
          minLength={3}
          type="password"
          autoComplete="off"
          className="sign__password"
          required
        />
      </div>
      <button type="submit">Kirish</button>
    </form>
  );
};

export default SignUp;
