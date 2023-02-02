import { Rate } from "antd";
import starIcon from "../../assets/icons/star.svg";
import userIcon from "../../assets/icons/user.svg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment, fetchComments, fetchCommentsInfo, fetchUserComments } from "../../redux/comments/asyncActions";
import { setCommentsClear, setCommentsCount } from "../../redux/comments/slice";
import parser from "html-react-parser";
const Comments = ({ courseId = 0, sublessonId = 0, rating = 0, learners = 0, rated = 0 }) => {
  const dispatch = useDispatch();
  const { isLoading, userComments, comments, total, pages } = useSelector((state) => state.comments);
  const [page, setPage] = React.useState(0);
  const { user } = useSelector((state) => state.auth);
  const [rate, setRate] = React.useState(0);
  const [text, setText] = React.useState("");
  React.useEffect(() => {
    (async function () {
      dispatch(setCommentsClear());
      await dispatch(fetchCommentsInfo({ course_id: courseId, page: 1, limit: 1 }));
      await dispatch(fetchUserComments({ course_id: courseId, user_id: user.id }));
    })();

    return () => {
      dispatch(setCommentsClear());
    };
  }, [courseId]);

  const onClickLoad = async () => {
    setPage((prev) => prev + 1);
    await dispatch(fetchComments({ course_id: courseId, page: page + 1, limit: 5 }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (rate === 0) {
      window.alert("Rate course!!!");
    } else {
      await dispatch(createComment({ course_id: courseId, message: text, rating: rate }));
      await dispatch(fetchUserComments({ course_id: courseId, user_id: user.id }));
    }
  };
  return (
    <div className="comments">
      <div className="rating">
        <div className="rating__star">
          <div className="rating__num">{rating}</div>
          <Rate disabled defaultValue={rating} />
        </div>
        <div className="rating__box">
          <div className="rating__rating">
            <img src={starIcon} alt="Rate" />
            <span>{rated}</span>
          </div>
          <div className="rating__user">
            <img src={userIcon} alt="User" />
            <span>{learners}</span>
          </div>
        </div>
      </div>
      {userComments.length < 1 ? (
        <form onSubmit={onSubmit} className="comments__send">
          <div className="comments__rating">
            <Rate defaultValue={rate} value={rate} onChange={(val) => setRate(val)} />
          </div>
          <div className="comments__box">
            <div className="comments__avatar">A</div>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="textarea"
              placeholder="Matn yozing"
              maxLength={120}
              minLength={3}
              required
            />
            <button type="submit" style={{ cursor: "pointer" }}>
              <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.70711 0.292892C8.31658 -0.0976314 7.68342 -0.0976315 7.29289 0.292892L0.928933 6.65685C0.538408 7.04738 0.538408 7.68054 0.928933 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 19L9 1L7 1L7 19L9 19Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      ) : (
        <>
          <CommentsItem username={userComments[0].user_name} message={userComments[0].message} />
        </>
      )}

      {comments && comments.map((item) => <CommentsItem username={item.user_name} message={item.message} />)}
      {page !== pages && (
        <button onClick={onClickLoad} disabled={isLoading} className="btn">
          Load comment
        </button>
      )}
    </div>
  );
};

const CommentsItem = ({ username = "", message = "" }) => {
  return (
    <div className="comments__item">
      <div className="comments__avatar">{username[0]}</div>
      <div className="comments__desc">
        <div className="comments__name">{username}</div>
        <pre className="comments__text">{message}</pre>
      </div>
    </div>
  );
};

export default Comments;
