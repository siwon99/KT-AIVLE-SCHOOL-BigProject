import React from "react"; // eslint-disable-line no-unused-vars
import "./navbar.css";
import WhomeIcon from "../../assets/WhomeIcon.svg";
import WlogIn from "../../assets/WlogIn.svg";
import WsignUp from "../../assets/WsignUp.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="#home">
              <img src={WhomeIcon} alt="NongBu" className="whomeicon" />
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
              <img src={WlogIn} alt="Log In" className="login-icon" />
            </a>
            <a href="#signup">
              <img src={WsignUp} alt="SignUp" className="signup-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
