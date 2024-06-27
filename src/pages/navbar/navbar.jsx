import React from "react"; // eslint-disable-line no-unused-vars
import "./navbar.css";
import WhomeIcon from "../../assets/WhomeIcon.svg";
import WlogIn from "../../assets/WlogIn.svg";
import WsignUp from "../../assets/WsignUp.svg";

// Navbar 컴포넌트 정의
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          {/* 홈 아이콘 링크 */}
          <li>
            <a href="/">
              <img src={WhomeIcon} alt="NongBu" className="whomeicon" />
            </a>
          </li>

          {/* 카테고리 링크들 */}
          <li className="category"><a href="/land_list">토지 리스트</a></li>
          <li className="category"><a href="/service">서비스 소개</a></li>
          <li className="category"><a href="/faq">FAQ</a></li>

          {/* 로그인 및 회원가입 아이콘 링크 */}
          <li className="auth-icons">
            <a href="/login">
              <img src={WlogIn} alt="Log In" className="login-icon" />
            </a>
            <a href="/signup">
              <img src={WsignUp} alt="SignUp" className="signup-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar; // Navbar 컴포넌트 내보내기
