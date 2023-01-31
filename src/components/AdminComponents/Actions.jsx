import { Button, Divider, Drawer, Form, Input, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, updateUser } from "../../redux/users/asyncActions";
import { setCloseDrawer, setUsersCount } from "../../redux/users/slice";

const Actions = () => {
  const dispatch = useDispatch();
  const { openDrawer, user } = useSelector((state) => state.users);
  const [tab, setTab] = React.useState(1);
  const [isSending, setIsSendinng] = React.useState(false);
  const onFinishPassword = async (values) => {
    setIsSendinng(true);
    await dispatch(resetPassword({ id: user.id, password: values.password }));
    setIsSendinng(false);
    dispatch(setCloseDrawer());
    dispatch(setUsersCount());
  };
  const onFinishUpdate = async (values) => {
    setIsSendinng(true);
    await dispatch(updateUser({ id: user.id, name: values.name, phone: values.phone, password: values.password }));
    setIsSendinng(false);
    dispatch(setCloseDrawer());
    dispatch(setUsersCount());
  };
  return (
    <Drawer title="Actions" placement="right" onClose={() => dispatch(setCloseDrawer())} open={openDrawer}>
      <Space>
        <Button size="small" onClick={() => setTab(1)}>
          Reset Password
        </Button>
        <Button size="small" onClick={() => setTab(2)}>
          Reset User
        </Button>
      </Space>
      <Divider />
      {tab === 1 ? (
        <Form
          name="form"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinishPassword}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name={"password"}>
            <Input showCount minLength={8} maxLength={100} placeholder="Change Password" required />
          </Form.Item>
          <Button loading={isSending} htmlType="submit">
            Change
          </Button>
        </Form>
      ) : (
        <Form
          name="user"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinishUpdate}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name={"name"}>
            <Input showCount maxLength={35} placeholder="Change Name" required />
          </Form.Item>
          <Form.Item name={"phone"}>
            <Input type="tel" defaultValue={"+998"} showCount maxLength={13} placeholder="Change Phone" required />
          </Form.Item>
          <Form.Item name={"password"}>
            <Input showCount minLength={8} maxLength={100} placeholder="Change Password" required />
          </Form.Item>
          <Button loading={isSending} htmlType="submit">
            Change
          </Button>
        </Form>
      )}
    </Drawer>
  );
};

export default Actions;
