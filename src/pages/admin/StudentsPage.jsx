import { Button, DatePicker, Pagination, Space, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowStatus from "../../components/AdminComponents/ShowStatus";
import { deleteStudent, fetchStudents } from "../../redux/students/asyncActions";
import { setStudentsCount, setStudentsPage } from "../../redux/students/slice";

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
    render: (row, record) => <UserAction studentId={record.id} username={record.user_name} />,
  },
];

const StudentsPage = () => {
  const dispatch = useDispatch();
  const { students, total, isLoading, currentPage, count } = useSelector((state) => state.students);
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  React.useEffect(() => {
    (async function () {
      await dispatch(
        fetchStudents({
          page: currentPage,
          limit: 10,
          from: fromDate?.format("YYYY-MM-DD"),
          to: toDate?.format("YYYY-MM-DD"),
        })
      );
    })();
  }, [currentPage, fromDate, toDate, dispatch, count]);
  const onChangeFromDate = (value) => {
    dispatch(setStudentsPage(1));
    setFromDate(value);
  };
  const onChangeToDate = (value) => {
    dispatch(setStudentsPage(1));
    setToDate(value);
  };

  return (
    <div className="studentsPage">
      <div className="studentsPage__box">
        <Space>
          <DatePicker value={fromDate} format="DD-MM-YYYY" onChange={onChangeFromDate} placeholder="from" />
          <DatePicker value={toDate} format="DD-MM-YYYY" onChange={onChangeToDate} placeholder="to" />
          <div className="studentsPage__box-item">
            <span className="studentsPage__box-num">{total}</span>
            <span className="studentsPage__box-name">Stundets</span>
          </div>
        </Space>
      </div>

      <Table
        style={{ matginBottom: "20px" }}
        loading={isLoading}
        columns={columns}
        dataSource={students}
        pagination={false}
      />
      <Pagination defaultCurrent={1} pageSize={10} onChange={(page) => dispatch(setStudentsPage(page))} total={total} />
    </div>
  );
};

const UserAction = ({ studentId, username }) => {
  const dispatch = useDispatch();
  const [isSending, setIsSending] = React.useState(false);

  const onClickConfirm = async () => {
    if (window.confirm(`${username} Kurstan kursni bekor qilinsinmi?`)) {
      setIsSending(true);
      await dispatch(deleteStudent({ id: studentId }));
      setIsSending(false);
      dispatch(setStudentsCount());
    }
  };
  return (
    <div>
      <Button loading={isSending} onClick={onClickConfirm} size="small" danger>
        Delete from course
      </Button>
    </div>
  );
};

export default StudentsPage;
