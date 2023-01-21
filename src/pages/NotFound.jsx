import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h3>404 PAGE NOT FOUND</h3>
      <Link to="/" className="btn">
        BACK HOME
      </Link>
    </div>
  );
};

export default NotFound;
