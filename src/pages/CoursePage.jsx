import { Spin } from "antd";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import Course from "../components/PublicComponents/Course";
import Spinner from "../components/PublicComponents/Spinner";

const CoursePage = () => {


  return (
    <>
      <Course />
    </>
  );
};

export default CoursePage;
