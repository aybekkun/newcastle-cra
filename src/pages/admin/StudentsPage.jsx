import { Button, Input, Pagination, Select, Space, Table } from "antd";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import ShowStatus from "../../components/AdminComponents/ShowStatus";
import React from "react";
import { fetchStudents } from "../../redux/students/asyncActions";
import { setStudentsPage } from "../../redux/students/slice";
const { Search } = Input;

const columns = [
  {
    title: "User",
    dataIndex: "user_name",
    key: "user_name",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (row, _) => <ShowStatus status={row} />,
  },
  {
    title: "Phone number",
    dataIndex: "user_phone",
    key: "user_phone",
    render: (row, _) => (
      <a href={`tel:${row}`} target="_blank" rel="noreferrer">
        {row}
      </a>
    ),
  },
  {
    title: "Course",
    dataIndex: "course_title",
    key: "course_title",
  },
  // {
  //   title: "Price",
  //   dataIndex: "course_price",
  //   key: "course_price",
  //   render: (row, _) => <>{row.toLocaleString()}</>,
  // },
  // {
  //   title: "Ordered",
  //   dataIndex: "created_at",
  //   key: "created_at",
  //   render: (row, _) => <>{dayjs(row).format("DD-MM-YYYY HH:mm")}</>,
  // },
  {
    title: "Actions",
    // dataIndex: "created_at",
    key: "created_at",
    render: (row, record) => (
      <UserAction
        courseId={record.course_id}
        userId={record.user_id}
        username={record.user_name}
        status={record.status}
      />
    ),
  },
];

const StudentsPage = () => {
  const dispatch = useDispatch();
  const { students, total, isloading, currentPage } = useSelector((state) => state.students);
  React.useEffect(() => {
    (async function () {
      await dispatch(fetchStudents({ page: currentPage, limit: 10 }));
    })();
  }, [currentPage]);
  return (
    <div className="studentsPage">
      <div className="studentsPage__box">
        <div className="studentsPage__box-item">
          <span className="studentsPage__box-num">{total}</span>
          <span className="studentsPage__box-name">Stundets</span>
        </div>
      </div>
      <Table
        style={{ matginBottom: "20px" }}
        loading={isloading}
        columns={columns}
        dataSource={students}
        pagination={false}
      />
      <Pagination defaultCurrent={1} pageSize={10} onChange={(page) => dispatch(setStudentsPage(page))} total={total} />
    </div>
  );
};
const UserAction = ({ userId, courseId, status, username }) => {
  const dispacth = useDispatch();
  const [isSending, setIsSending] = React.useState(false);

  const onClickConfirm = async () => {
    if (window.confirm(`${username} Kursga  kirishga ruxsat berilsinmi?`)) {
    }
  };
  return (
    <div>
      <Button disabled={status} loading={isSending} onClick={onClickConfirm} size="small" type="primary">
        {status ? "Confirmed" : "Confirm"}
      </Button>
    </div>
  );
};

export default StudentsPage;
