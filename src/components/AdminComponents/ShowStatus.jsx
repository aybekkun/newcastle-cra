import cls from "classnames";

const ShowStatus = ({ status = false }) => {
  return <div className={cls("status", { true: status, false: !status })}>{status ? "Bought" : "Wait"}</div>;
};

export default ShowStatus;
