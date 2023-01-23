import React from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";

const Order = ({ id }) => {
  const { isSending } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.auth);
  const isOrdered = user.orders.find((item) => item.course_id === Number(id));
  console.log(!isOrdered.status);

  return (
    <div className="aside__order">
      <h3>Kurs yoqdimi? Ariza tashang</h3>
      {!isSending ? (
        <button disabled={isSending} className="btn">
          Kursga ariza
        </button>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <Spin />
        </div>
      )}
    </div>
  );
};

export default Order;
