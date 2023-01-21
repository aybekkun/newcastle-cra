import React from "react";
import { IMaskInput } from "react-imask";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import passwwordIcon from "../assets/icons/password.svg";
import phoneIcon from "../assets/icons/phone.svg";
import { userAuth } from "../redux/auth/asyncActions";

const SignIn = () => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);

  let location = useLocation();

  const inputRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(userAuth({ phone: inputRef.current.value, password: passwordRef.current.value }));
  };

  if (isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return (
    <form onSubmit={onSubmit} className="signin">
      <h3>Kirish</h3>
      <div className="input">
        <img src={phoneIcon} alt="phone" />
        <IMaskInput
          value={"+998"}
          inputRef={inputRef}
          // onAccept={(value, mask) => console.log(value)}
          mask={"+{998}000000000"}
          name="phone"
          maxLength={13}
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

export default SignIn;

