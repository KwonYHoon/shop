import ListCard from "../common/ListCard";
import "../css/shop.css";
import { useState } from "react";

export default function Shop({list}) {
  let [DataList, setDataList] = useState(list);

  return (
    <main className="Shop mw">
      <h1>All Goods</h1>
      <div className="AllList">
        <nav className="ShopBtnWrap">
          <button className="btn" onClick={()=>{
            setDataList(list);
          }}>등록순</button>
          <button className="btn" onClick={()=>{
            setDataList([...DataList].sort((a, b)=>parseInt(a.price) < parseInt(b.price) ? -1 : 1));
          }}>낮은 가격</button>
          <button className="btn" onClick={()=>{
            setDataList([...DataList].sort((a, b)=>parseInt(a.price) > parseInt(b.price) ? -1 : 1));
          }}>높은 가격</button>
          <button className="btn" onClick={()=>{
            setDataList([...DataList].sort((a, b)=>parseInt(a.discount) > parseInt(b.discount) ? -1 : 1));
          }}>높은 할인율</button>
        </nav>

        <ul className="__list">
        {DataList.map((list) => {
          return(
          <li key = {list._id}>
            <ListCard list = {list}/>
          </li>
        )})}
        </ul>
      </div>
    </main>
  );
}
