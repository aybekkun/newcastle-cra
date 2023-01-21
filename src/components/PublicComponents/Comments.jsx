import { Rate } from "antd";
import starIcon from "../../assets/icons/star.svg";
import userIcon from "../../assets/icons/user.svg";
const Comments = () => {
  return (
    <div className="comments">
      <button className="btn">Load comment</button>
      <div className="rating">
        <div className="rating__star">
          <div className="rating__num">4.6</div>
          <Rate disabled defaultValue={2.5} />
        </div>
        <div className="rating__box">
          <div className="rating__rating">
            <img src={starIcon} alt="Rate" />
            <span>1,235</span>
          </div>
          <div className="rating__user">
            <img src={userIcon} alt="User" />
            <span>1,235</span>
          </div>
        </div>
      </div>
      <form className="comments__send">
        <div className="comments__rating">
          <Rate defaultValue={0} />
        </div>
        <div className="comments__box">
          <div className="comments__avatar">A</div>
          <input type="textarea" placeholder="Matn yozing" maxLength={120} minLength={3} required />
          <button type="submit">
            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.70711 0.292892C8.31658 -0.0976314 7.68342 -0.0976315 7.29289 0.292892L0.928933 6.65685C0.538408 7.04738 0.538408 7.68054 0.928933 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 19L9 1L7 1L7 19L9 19Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </form>
      <CommentsItem />
      <CommentsItem />
      <CommentsItem />
      <CommentsItem />
    </div>
  );
};

const CommentsItem = () => {
  return (
    <div className="comments__item">
      <div className="comments__avatar">A</div>
      <div className="comments__desc">
        <div className="comments__name">Abdulaziz Abdinazarov</div>
        <div className="comments__date">08.12.2022</div>
        <p className="comments__text">
          Dignissim neque volutpat in est viverra eleifend ultricies tortor. Purus morbi ut consectetur risus
          ullamcorper nec arcu neque.
        </p>
      </div>
    </div>
  );
};

export default Comments;
