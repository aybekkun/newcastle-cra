import { Button, Space } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cardImg from "../../assets/card.jpg";
import clockIcon from "../../assets/icons/clock.svg";
import listIcon from "../../assets/icons/list.svg";
import starIcon from "../../assets/icons/star.svg";
import userIcon from "../../assets/icons/user.svg";

const Card = ({
  id,
  secondId,
  title,
  description,
  image,
  price,
  lessons,
  onDelete = () => undefined,
  mark = 0,
  count = 0,
}) => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const navigate = useNavigate();

  return (
    <>
      <div className="card__item-box">
        <Link to={`/course/${id}/${secondId ? secondId : 0}`} className="card__item">
          <div className="card__image-box">
            <img src={image ? `${process.env.REACT_APP_BASE_URL}/public/images/${image}` : cardImg} alt="Card" />
          </div>
          <div className="card__desc-box">
            <h3 className="card__title">{title}</h3>
            <p className="card__desc">{description}</p>
          </div>
          <div className="card__info-box">
            <div className="card__time-box">
              {/*<div className="card__time">*/}
              {/*  <img src={clockIcon} alt="Clock" />*/}
              {/*  <span>00:50:45 Hours</span>*/}
              {/*</div>*/}
              <div className="card__lessons">
                <img src={listIcon} alt="List" />
                <span>{lessons} Lessons</span>
              </div>
            </div>
            <div className="card__price-box">
              <p className="card__price">{price} uzs</p>
              <div className="card__rating">
                <img src={starIcon} alt="Rate" />
                <span>{mark}</span>
              </div>
              <div className="card__user">
                <img src={userIcon} alt="User" />
                <span>{count}</span>
              </div>
            </div>
          </div>
        </Link>
        {pathname === "admin" && (
          <Space className="card__buttons" style={{ marginTop: "10px" }}>
            <Button onClick={() => onDelete(id)} danger type="primary" size="small">
              Delete
            </Button>
            <Button type="primary" size="small">
              Edit
            </Button>
            <Button onClick={() => navigate(`lesson/${id}`)} type="primary" size="small">
              Add
            </Button>
          </Space>
        )}
      </div>
    </>
  );
};

export default Card;
