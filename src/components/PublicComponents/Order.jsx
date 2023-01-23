import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { createOrder } from "../../redux/orders/asyncActions";
import { userCheck } from "../../redux/auth/asyncActions";

const Order = ({ id }) => {
  const dispatch = useDispatch();
  const { isSending } = useSelector((state) => state.orders);
  const navigate = useNavigate();
  const { user, isAuth } = useSelector((state) => state.auth);
  const isOrdered = user.orders?.find((item) => item.course_id === Number(id));
  const onClickOffer = async () => {
    if (!isAuth) {
      alert("Kursni sotib olish uchun registratsiyadan o'ting.");
      navigate("/signup");
    } else {
      await dispatch(
        createOrder({
          user_id: user.id,
          course_id: id,
        })
      );
      await dispatch(userCheck());
    }
  };

  if (isOrdered && isOrdered.status === false) {
    return (
      <div className="aside__order">
        <button style={{ backgroundColor: "#78F400" }} onClick={onClickOffer} disabled={isSending} className="btn">
          Ariza qabul qilindi
        </button>
      </div>
    );
  }
  if (isOrdered && isOrdered.status === true) {
    return <></>;
  }
  return (
    <div className="aside__order">
      <h3>Kurs yoqdimi? Ariza tashang</h3>
      {!isSending ? (
        <button onClick={onClickOffer} disabled={isSending} className="btn">
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
