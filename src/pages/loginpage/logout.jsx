import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //사용자가 로그인할 때 저장된 토큰
    const token = localStorage.getItem('token');
    
    if (token) {
      fetch('http://3.39.228.42/users/logout/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token  ${token}`,
        }, 
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then(data => {
        if (data.detail) {
          localStorage.removeItem('token');
          navigate('/');
        }
        else {
          throw new Error();
        }
      })
      .catch(error => {
        alert('오류가 발생했습니다.');
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <p>로그아웃 중...</p>
    </div>
  );
};

export default Logout;