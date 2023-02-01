import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createMaterialComment,
  fetchMaterialComments,
  fetchMaterialCommentsInfo,
  fetchUserMaterialComments,
} from "../../redux/materialComments/asyncActions";
import { setMaterialCommentsClear } from "../../redux/materialComments/slice";

const CommentsMaterials = ({ sublessonId = 0 }) => {
  const dispatch = useDispatch();
  const { isLoading, userMaterialComments, materialComments, pages } = useSelector((state) => state.materialComments);
  const [page, setPage] = React.useState(0);
  console.log(userMaterialComments);
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = React.useState("");
  React.useEffect(() => {
    (async function () {
      dispatch(setMaterialCommentsClear());
      await dispatch(fetchMaterialCommentsInfo({ sub_lesson_2_id: sublessonId, page: 1, limit: 1 }));
      await dispatch(fetchUserMaterialComments({ sub_lesson_2_id: sublessonId, user_id: user.id }));
    })();
    setPage(0);
    return () => {
      dispatch(setMaterialCommentsClear());
    };
  }, [sublessonId]);

  const onClickLoad = async () => {
    setPage((prev) => prev + 1);
    await dispatch(fetchMaterialComments({ sub_lesson_2_id: sublessonId, page: page + 1, limit: 5 }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createMaterialComment({ sub_lesson_2_id: sublessonId, message: text }));
    await dispatch(fetchUserMaterialComments({ sub_lesson_2_id: sublessonId, user_id: user.id }));
  };
  return (
    <div className="comments">
      {userMaterialComments.length < 1 ? (
        <form onSubmit={onSubmit} className="comments__send">
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
          <CommentsItem username={userMaterialComments[0].user_name} message={userMaterialComments[0].message} />
        </>
      )}
      {materialComments &&
        materialComments.map((item) => <CommentsItem username={item.user_name} message={item.message} />)}

      {page !== pages && (
        <button onClick={onClickLoad} disabled={isLoading} className="btn">
          Load comment
        </button>
      )}
    </div>
  );
};

const CommentsItem = ({ username = "user", message = "" }) => {
  return (
    <div className="comments__item">
      <div className="comments__avatar">{username[0]}</div>
      <div className="comments__desc">
        <div className="comments__name">{username}</div>
        <p className="comments__text">{message}</p>
      </div>
    </div>
  );
};

export default CommentsMaterials;
