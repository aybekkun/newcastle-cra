import { Button, DatePicker, Input, Pagination, Select, Space, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../components/AdminComponents/Actions";
import { createAdmin } from "../../redux/admin/asyncActions";
import { fetchUsers } from "../../redux/users/asyncActions";
import { setOpenDrawer, setUser, setUsersCount, setUsersPage } from "../../redux/users/slice";

const columns = [
  {
    title: "User",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone number",
    dataIndex: "phone",
    key: "phone",
    render: (row, _) => (
      <a href={`tel:${row}`} target="_blank" rel="noreferrer">
        {row}
      </a>
    ),
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Course",
    dataIndex: "courses",
    key: "courses",
    render: (row, _) => <CourseList courses={row} />,
  },
  {
    title: "Actions",
    render: (row, record) => <UserAction role={record.role} username={record.name} userId={record.id} />,
  },
];

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { users, total, isLoading, currentPage, count } = useSelector((state) => state.users);
  const [searchVal, setSearchVal] = React.useState("");
  const [searchType, setSearchType] = React.useState("name");

  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);

  React.useEffect(() => {
    const obj =
      searchType === "name"
        ? {
            name: searchVal,
          }
        : {
            phone: searchVal,
          };
    (async function () {
      await dispatch(
        fetchUsers({
          page: currentPage,
          limit: 10,
          from: fromDate?.format("YYYY-MM-DD"),
          to: toDate?.format("YYYY-MM-DD"),
          ...obj,
        })
      );
    })();
  }, [currentPage, fromDate, toDate, dispatch, count]);

  const onChangeFromDate = (value) => {
    dispatch(setUsersPage(1));
    setFromDate(value);
  };
  const onChangeToDate = (value) => {
    dispatch(setUsersPage(1));
    setToDate(value);
  };
  const onChangeSearch = (e) => {
    setSearchVal(e.target.value);
  };
  const onClickSearch = () => {
    dispatch(setUsersPage(1));
    dispatch(setUsersCount());
  };
  const onClickClear = () => {
    setSearchVal("");
    setFromDate(null);
    setToDate(null);
    dispatch(setUsersCount());
  };
  const onChangeSearchType = (value) => {
    setSearchType(value);
  };

  return (
    <div className="settingsPage">
      <Actions />
      <div className="settingsPage__box">
        <Space>
          <DatePicker value={fromDate} format="DD-MM-YYYY" onChange={onChangeFromDate} placeholder="from" />
          <DatePicker value={toDate} format="DD-MM-YYYY" onChange={onChangeToDate} placeholder="to" />
          <Space>
            <Select
              style={{ width: 120 }}
              defaultValue="name"
              value={searchType}
              onChange={onChangeSearchType}
              options={[
                {
                  value: "name",
                  label: "Name",
                },
                {
                  value: "phone",
                  label: "Phone",
                },
              ]}
            />
            <Input value={searchVal} onChange={onChangeSearch} />
            <Button onClick={onClickSearch} size="small" type="primary">
              Search
            </Button>
            <Button onClick={onClickClear} size="small" danger>
              Clear
            </Button>
          </Space>
        </Space>
      </div>
      <Table
        style={{ matginBottom: "20px" }}
        loading={isLoading}
        columns={columns}
        dataSource={users}
        pagination={false}
      />
      <Pagination defaultCurrent={1} pageSize={10} onChange={(page) => dispatch(setUsersPage(page))} total={total} />
    </div>
  );
};

const CourseList = ({ courses = [] }) => {
  return (
    <div className="settingsPage__course">
      {courses.length > 0 ? (
        courses.map((course) => <span key={course.course_id}>{course.course_title}</span>)
      ) : (
        <span>Yoq</span>
      )}
    </div>
  );
};

const UserAction = ({ userId, role, username }) => {
  const dispacth = useDispatch();
  const [isSending, setIsSending] = React.useState(false);

  const onClickAdmin = async () => {
    if (window.confirm(`${username} Admin qilinsinmi`)) {
      setIsSending(true);
      await dispacth(createAdmin({ user_id: userId }));
      setIsSending(false);
      dispacth(setUsersCount());
    }
  };

  const onClickAction = async () => {
    dispacth(setOpenDrawer());
    dispacth(setUser({ name: username, id: userId }));
  };

  return (
    <div className="settingsPage__action">
      <Space>
        {role !== "admin" && role !== "super-admin" && (
          <Button onClick={onClickAdmin} disabled={isSending} loading={isSending} size="small" type="primary">
            Make Admin
          </Button>
        )}

        <Button loading={isSending} onClick={onClickAction} size="small">
          Action
        </Button>
      </Space>
    </div>
  );
};

export default SettingsPage;
