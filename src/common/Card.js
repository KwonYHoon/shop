export default function Card() {
  return (
    <li>
      <div className="p_img">
        <img src="/img/image1.jpg" alt="상품 이미지" />
      </div>
      <span className="p_name">상품명</span>
      <span className="p_price">20,000</span>
      <a href="#" className="detail">
        자세히보기
      </a>
    </li>
  );
}
