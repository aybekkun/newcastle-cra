import React, { Children } from "react";
import cls from "classnames";
import { Link } from "react-router-dom";

const NavAccordion = ({ name, link, active, icon, children }) => {

  let navIcon;
  switch (icon) {
    case "general":
      navIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.2495 19.4992V14.9991C14.2495 14.8001 14.1704 14.6094 14.0298 14.4687C13.8891 14.3281 13.6984 14.2491 13.4995 14.2491H10.4995C10.3005 14.2491 10.1098 14.3281 9.96912 14.4687C9.82847 14.6094 9.74945 14.8001 9.74945 14.9991V19.4992C9.74945 19.698 9.67045 19.8888 9.52981 20.0294C9.38918 20.1701 9.19844 20.2491 8.99954 20.2492L4.50009 20.2497C4.40159 20.2498 4.30406 20.2304 4.21305 20.1927C4.12205 20.155 4.03936 20.0998 3.9697 20.0301C3.90005 19.9605 3.8448 19.8778 3.8071 19.7868C3.7694 19.6958 3.75 19.5982 3.75 19.4997V10.8316C3.75 10.7271 3.77183 10.6238 3.8141 10.5282C3.85637 10.4326 3.91814 10.347 3.99545 10.2767L11.4949 3.45778C11.633 3.33226 11.8129 3.2627 11.9995 3.2627C12.186 3.26269 12.3659 3.33223 12.504 3.45775L20.0045 10.2767C20.0818 10.347 20.1436 10.4326 20.1859 10.5282C20.2282 10.6238 20.25 10.7271 20.25 10.8316V19.4997C20.25 19.5982 20.2306 19.6958 20.1929 19.7868C20.1552 19.8778 20.1 19.9605 20.0303 20.0301C19.9606 20.0998 19.878 20.155 19.7869 20.1927C19.6959 20.2304 19.5984 20.2498 19.4999 20.2497L14.9994 20.2492C14.8005 20.2491 14.6097 20.1701 14.4691 20.0295C14.3285 19.8888 14.2494 19.698 14.2495 19.4992V19.4992Z"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case "settings":
      navIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12V3" stroke="#343434" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M19.7935 7.5L4.20508 16.5"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.15008 13.6449C2.76041 11.5361 3.13532 9.35748 4.20749 7.50024C5.27966 5.643 6.97883 4.22884 8.99988 3.51172V10.2675L3.15008 13.6449Z"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0002 3C13.577 3.00029 15.1261 3.41485 16.4923 4.20216C17.8585 4.98947 18.9938 6.1219 19.7847 7.48605C20.5755 8.8502 20.9941 10.3982 20.9985 11.975C21.0029 13.5518 20.5929 15.1021 19.8097 16.4706C19.0264 17.8391 17.8973 18.9779 16.5355 19.7728C15.1737 20.5676 13.627 20.9908 12.0502 20.9999C10.4734 21.0089 8.92191 20.6035 7.55108 19.8243C6.18024 19.0451 5.03818 17.9194 4.23926 16.56"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case "statistika":
      navIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5703 5.43173C15.2408 5.24281 15.9441 5.19978 16.6326 5.30552C17.3212 5.41126 17.9791 5.66333 18.562 6.04475C19.1449 6.42616 19.6393 6.92807 20.012 7.51666C20.3846 8.10525 20.6268 8.76685 20.7221 9.45692C20.8175 10.147 20.764 10.8495 20.565 11.5171C20.366 12.1847 20.0263 12.8019 19.5687 13.3272C19.1111 13.8524 18.5463 14.2735 17.9123 14.5621C17.2782 14.8507 16.5897 15.0001 15.8931 15.0001"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.5 18.5059C2.26138 17.4229 3.27215 16.539 4.44698 15.9288C5.62182 15.3186 6.92623 15.0001 8.25008 15C9.57393 14.9999 10.8784 15.3184 12.0532 15.9285C13.2281 16.5386 14.239 17.4225 15.0004 18.5054"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8926 15C17.2166 14.999 18.5213 15.3171 19.6962 15.9273C20.8712 16.5375 21.8819 17.4218 22.6426 18.5054"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case "billing":
      navIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18V6C21.75 5.58579 21.4142 5.25 21 5.25Z"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.749 15.75H18.749"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.249 15.75H12.749"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.25 9.08008H21.75"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
  }
  return (
    <div className="navaccordion">
      <Link to={link} className={cls("navaccordion__item", { active: active })}>
        {navIcon} {name}{" "}
        <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <div className="navaccordion__children">{children}</div>
    </div>
  );
};

export default NavAccordion;
