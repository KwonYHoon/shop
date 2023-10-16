import { Link } from "react-router-dom";
import "../css/header.css";
export default function Header() {
  return (
    <header className="mw">
      <h1>
        <Link to = "/">
          <img src="/img/logo.svg" alt="쇼핑몰로고" />
        </Link>
      </h1>
      <nav>
        <Link to="/shop">shop</Link>
        <Link to="/blog">blog</Link>
        <Link to="/story">our story</Link>
      </nav>
      <div>
        <Link to="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>
        <Link to="#">
          <i className="fa-solid fa-cart-arrow-down"></i>
        </Link>
        <Link to="#">
          <i className="fa-solid fa-person"></i>
        </Link>
      </div>
    </header>
  );
}
