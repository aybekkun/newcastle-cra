import { Button, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdmins } from "../../redux/admin/asyncActions";

const columns = [
  {
    title: "Name",
    dataIndex: "user_name",
    key: "user_name",
  },
  {
    title: "Phone",
    dataIndex: "user_phone",
    key: "user_phone",
  },
  {
    title: "Actions",
    render: (row, record) => <UserAction studentId={record.id} username={record.user_name} />,
  },
];

const AdminsPage = () => {
  const dispatch = useDispatch();
  const { admins } = useSelector((state) => state.admins);
  console.log(admins);
  React.useEffect(() => {
    (async function () {
      await dispatch(fetchAdmins());
    })();
  }, []);
  return (
    <div className="admins">
      <div className="admins__box">
        <Table dataSource={admins} columns={columns} pagination={false} />
      </div>
    </div>
  );
};

const UserAction = ({ adminId, username }) => {
  const dispatch = useDispatch();
  const [isSending, setIsSending] = React.useState(false);

  const onClickConfirm = async () => {
    if (window.confirm(`${username} Kurstan kursni bekor qilinsinmi?`)) {
      setIsSending(true);
      setIsSending(false);
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

export default AdminsPage;
