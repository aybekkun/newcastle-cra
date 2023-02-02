import { Button, Space } from "antd";
import React from "react";
import CourseComments from "../../components/AdminComponents/Comments/CourseComments";
import MaterialComments from "../../components/AdminComponents/Comments/MaterialComments";

const CommentsPage = () => {
  const [tabContent, setTabContent] = React.useState(0);
  return (
    <div className="commentsPage">
      <Space style={{ marginBottom: "20px" }}>
        <Button onClick={() => setTabContent(0)}>Course</Button>
        <Button onClick={() => setTabContent(1)}>Material</Button>
      </Space>
      <div className="commentsPage__box">
        {tabContent === 0 && <CourseComments />}
        {tabContent === 1 && <MaterialComments />}
      </div>
    </div>
  );
};

export default CommentsPage;
