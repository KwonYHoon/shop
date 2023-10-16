import { Link } from "react-router-dom";
import "../css/mainlist.css";
import ListCard from "./ListCard";

export default function MainList({list}) {

  let newList = list.filter((a)=> a.category === "new");

  return (
    <div className="main_list mw">
      <h2>신상품 리스트</h2>
      <Link to="/shop"> View all</Link>
      <ul className="__list">
        {newList.map((list) => {
          return(
            <li key = {list._id}>
              <ListCard list = {list}/>
            </li>
        )})}
      </ul>
    </div>
  );
}
