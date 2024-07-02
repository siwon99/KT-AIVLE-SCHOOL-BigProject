import React, {useEffect, useState} from "react"; // eslint-disable-line no-unused-vars
import "./navbar.css";
import WhomeIcon from "../../assets/WhomeIcon.svg";
import WlogIn from "../../assets/WlogIn.svg";
import WsignUp from "../../assets/WsignUp.svg";
import WlogOut from "../../assets/WlogOut.svg";

// Navbar 컴포넌트 정의
const Navbar = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, []);

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="/">
              <img src={WhomeIcon} alt="NongBu" className="whomeicon" />
            </a>
          </li>

          <li className="category"><a href="/land_list">농지 리스트</a></li>
          <li className="category"><a href="/service">서비스 소개</a></li>
          <li className="category"><a href="/faq">FAQ</a></li>
          <li className="auth-icons">
            {!token ? (
                <div>
                  <a href="/login">
                    <img src={WlogIn} alt="Log In" className="login-icon" />
                  </a>
                  <a href="/signup">
                    <img src={WsignUp} alt="SignUp" className="signup-icon" />
                  </a>
                </div>
              ) : (
                <a href="/logout">
                  <img src={WlogOut} alt="Log Out" className="logout-icon" />
                </a>
              )
            }
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar; 