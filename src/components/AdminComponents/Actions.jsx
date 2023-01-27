import { Button, Divider, Drawer, Form, Input, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCloseDrawer } from "../../redux/users/slice";

const Actions = () => {
  const dispatch = useDispatch();
  const { openDrawer } = useSelector((state) => state.users);
  const [tab, setTab] = React.useState(1);

  return (
    <Drawer title="Actions" placement="right" onClose={() => dispatch(setCloseDrawer())} open={openDrawer}>
      <Space>
        <Button size="small">Reset Password</Button>
        <Button size="small">Reset User</Button>
      </Space>
      <Divider />

    </Drawer>
  );
};

export default Actions;
