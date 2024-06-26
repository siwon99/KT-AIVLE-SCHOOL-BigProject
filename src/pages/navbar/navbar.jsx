import React from "react"; // eslint-disable-line no-unused-vars
import "./navbar.css";

const Home = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="#home">NongBu</a>
          </li>
          <li>
            <a href="#land_list">토지 리스트</a>
          </li>
          <li>
            <a href="#service">서비스 소개</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
