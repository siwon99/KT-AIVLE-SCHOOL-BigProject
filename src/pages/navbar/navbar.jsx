import React from "react"; // eslint-disable-line no-unused-vars
import "./navbar.css";
import WhomeIcon from ".src/assets/WhomeIcon";
import WsignUp from ".src/assets/WsignUp";
import WlogOut from ".src/assets/WlogOut";

const Home = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="#home">
              <img src={WhomeIcon} alt="NongBu" />
            </a>
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
          <li className="auth-icons">
            <a href="#login">
              <img src={WsignUp} alt="Log In" />
            </a>
            <a href="#logout">
              <img src={WlogOut} alt="Log Out" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
