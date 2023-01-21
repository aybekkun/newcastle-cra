import { Button, Drawer, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LessonAddForm from "../../components/AdminComponents/Lessons/LessonAddForm.jsx";
import LessonAddMaterials from "../../components/AdminComponents/Lessons/LessonAddMaterials.jsx";
import LessonsInfo from "../../components/AdminComponents/Lessons/LessonsInfo.jsx";
import SubLessonAddForm from "../../components/AdminComponents/Lessons/SubLessonAddForm.jsx";
import Spinner from "../../components/PublicComponents/Spinner.jsx";
import { fetchCourse } from "../../redux/courses/asyncActions.js";

export const configDate = {
  rules: [{ required: true, message: "Пожалуйста введите!" }],
};

const LessonAddPage = () => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.courses);
  const { id } = useParams();
  const [tabContent, setTabContent] = React.useState(0);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  React.useEffect(() => {
    (async function () {
      await dispatch(fetchCourse({ id: id }));
    })();
  }, [id, dispatch]);
  const handleClose = () => {
    setOpenDrawer(false);
  };
  const onClickBtns = (idx) => {
    setTabContent(idx);
    if (idx !== 3) {
      setOpenDrawer(true);
    } else {
      setOpenDrawer(false);
    }
  };
  if (!course) {
    return <Spinner />;
  }
  return (
    <div className="lesson">
      <Space>
        <Button onClick={() => onClickBtns(1)}>Add lesson</Button>
        <Button onClick={() => onClickBtns(2)}>Add subLesson</Button>
        <Button onClick={() => onClickBtns(3)}>Add materials</Button>
      </Space>
      {tabContent !== 3 && <LessonsInfo />}
      {tabContent === 3 && <LessonAddMaterials handleChangeTab={() => setTabContent(1)} id={id} />}
      <Drawer
        title={`Add`}
        placement={"right"}
        closable={true}
        onClose={handleClose}
        open={openDrawer && tabContent !== 3}
      >
        {tabContent === 1 && <LessonAddForm id={id} handleClose={handleClose} />}
        {tabContent === 2 && <SubLessonAddForm id={id} handleClose={handleClose} />}
      </Drawer>
    </div>
  );
};

export default LessonAddPage;
