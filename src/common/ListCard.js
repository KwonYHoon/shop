import { Link } from "react-router-dom";
import "../css/listCard.css";
export default function ListCard({list}) {
  return (
    <div className="card">
      <div className="p_img">
        <img src={`/img/${list.img}`} alt={list.title} />
      </div>
      <span className="p_name">{list.title}</span>
      <span className="p_price">{Number(list.price).toLocaleString()}원</span>
      {
        list.discount === "0" ? 
        null
        :
        <span className="discount">{list.discount}%</span>
      }
      <Link to={`/detail/${list._id}`} className="detail">
        자세히보기
      </Link>
    </div>
  );
}
