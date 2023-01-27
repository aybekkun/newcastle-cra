import React from "react";

import { Button, DatePicker, Pagination, Select, Space, Table } from "antd";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import ShowStatus from "../../components/AdminComponents/ShowStatus";
import { fetchOrders } from "../../redux/orders/asyncActions";
import { setCount, setOrdersPage } from "../../redux/orders/slice";
import { createStudent } from "../../redux/students/asyncActions";
import { deleteOrder } from "../../redux/orders/asyncActions";
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
  {
    title: "Price",
    dataIndex: "course_price",
    key: "course_price",
    render: (row, _) => <>{row.toLocaleString()}</>,
  },
  {
    title: "Ordered",
    dataIndex: "created_at",
    key: "created_at",
    render: (row, _) => <>{dayjs(row).format("DD-MM-YYYY HH:mm")}</>,
  },
  {
    title: "Actions",
    // dataIndex: "created_at",
    key: "created_at",
    render: (row, record) => (
      <UserAction
        orderId={record.id}
        courseId={record.course_id}
        userId={record.user_id}
        username={record.user_name}
        status={record.status}
      />
    ),
  },
];

const BillingPage = () => {
  const dispatch = useDispatch();
  const { orders, total, isLoading, currentPage, count } = useSelector((state) => state.orders);
  const [filterVal, setFilterVal] = React.useState("");
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  React.useEffect(() => {
    (async function () {
      await dispatch(
        fetchOrders({
          page: currentPage,
          limit: 10,
          status: filterVal,
          from: fromDate?.format("YYYY-MM-DD"),
          to: toDate?.format("YYYY-MM-DD"),
        })
      );
    })();
  }, [currentPage, filterVal, count, fromDate, toDate, dispatch]);

  const onChangeFromDate = (value) => {
    dispatch(setOrdersPage(1));
    setFromDate(value);
  };
  const onChangeToDate = (value) => {
    dispatch(setOrdersPage(1));
    setToDate(value);
  };
  const handleChange = async (value) => {
    dispatch(setOrdersPage(1));
    setFilterVal(value);
    //   await dispatch(fetchOrders({ page: 1, limit: 10, status: value }));
  };
  return (
    <div className="billing">
      <div className="billing__search-box">
        <Space>
          <Select
            value={filterVal}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              {
                value: "",
                label: "All",
              },
              {
                value: "true",
                label: "BOUGHT",
              },
              {
                value: "false",
                label: "WAIT",
              },
            ]}
          />
          <DatePicker value={fromDate} format="DD-MM-YYYY" onChange={onChangeFromDate} placeholder="from" />
          <DatePicker value={toDate} format="DD-MM-YYYY" onChange={onChangeToDate} placeholder="to" />
        </Space>
        <div className="billing__box">
          <div className="billing__box-item">
            <span className="billing__box-num">{total}</span>
            <span className="billing__box-name">
              {filterVal === "true" ? "Bought" : filterVal === "false" ? "Ordered" : "Orders"}
            </span>
          </div>
        </div>
      </div>
      <Table
        style={{ matginBottom: "20px" }}
        loading={isLoading}
        columns={columns}
        dataSource={orders}
        pagination={false}
      />
      <Pagination defaultCurrent={1} pageSize={10} onChange={(page) => dispatch(setOrdersPage(page))} total={total} />
    </div>
  );
};

const UserAction = ({ orderId, userId, courseId, status, username }) => {
  const dispacth = useDispatch();
  const [isSending, setIsSending] = React.useState(false);

  const onClickConfirm = async () => {
    if (window.confirm(`${username} Kursga  kirishga ruxsat berilsinmi?`)) {
      setIsSending(true);
      await dispacth(createStudent({ user_id: userId, course_id: courseId }));
      setIsSending(false);
      dispacth(setCount());
    }
  };
  const onClickCancel = async () => {
    if (window.confirm(`${username} Buyirtma bekor qilinsinmi?`)) {
      setIsSending(true);
      await dispacth(deleteOrder({ id: orderId }));
      setIsSending(false);
      dispacth(setCount());
    }
  };
  return (
    <Space>
      <Button disabled={status} loading={isSending} onClick={onClickConfirm} size="small" type="primary">
        {status ? "Confirmed" : "Confirm"}
      </Button>
      {!status && (
        <Button disabled={status} loading={isSending} onClick={onClickCancel} size="small" danger>
          Cancel order
        </Button>
      )}
    </Space>
  );
};

export default BillingPage;
