import { Button, Pagination, Popover, Space, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment, fetchCommentsInfo } from "../../../redux/comments/asyncActions";
import { setCommentsCount, setCommentsPage } from "../../../redux/comments/slice";
const columns = [
  {
    title: "User",
    dataIndex: "user_name",
    key: "user_name",
  },
  {
    title: "Course",
    dataIndex: "course_title",
    key: "course_title",
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "Actions",
    render: (row, record) => <Actions id={record.id} message={record.message} />,
  },
];
const CourseComments = () => {
  const dispatch = useDispatch();
  const { allComments, total, currentPage, isLoading, count } = useSelector((state) => state.comments);

  React.useEffect(() => {
    (async function () {
      await dispatch(fetchCommentsInfo({ page: currentPage, limit: 10 }));
    })();
  }, [currentPage, count]);

  return (
    <>
      <Table
        style={{ matginBottom: "20px" }}
        loading={isLoading}
        columns={columns}
        dataSource={allComments}
        pagination={false}
      />
      <Pagination defaultCurrent={1} pageSize={10} onChange={(page) => dispatch(setCommentsPage(page))} total={total} />
    </>
  );
};

const Actions = ({ id, message }) => {
  const dispatch = useDispatch();
  const [isSending, setIsSending] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    setText(message);
  }, []);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const onEdit = async () => {
    if (window.confirm("Komment edit qilinsinmi?")) {
      setIsSending(true);
      await dispatch(editComment({ id, message: text }));
      dispatch(setCommentsCount());
      setIsSending(false);
      hide();
    }
  };
  const onDelete = async () => {
    if (window.confirm("Komment ochirilsinmi?")) {
      setIsSending(true);
      await dispatch(deleteComment({ id }));
      dispatch(setCommentsCount());
      setIsSending(false);
    }
  };
  return (
    <div>
      <Space>
        <Popover
          content={
            <div style={{ width: 300, height: 200 }}>
              <textarea
                maxLength={1200}
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ display: "block", width: "100%", height: "150px", marginBottom: "20px", resize: "none" }}
              ></textarea>
              <Button onClick={onEdit} type="primary" size="small">
                OK
              </Button>
              <a style={{ marginLeft: "10px" }} onClick={hide}>
                Close
              </a>
            </div>
          }
          title={`Edit Comments`}
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <Button size="small">Edit</Button>
        </Popover>
        <Button onClick={onDelete} loading={isSending} size="small" danger>
          Delete
        </Button>
      </Space>
    </div>
  );
};

export default CourseComments;
