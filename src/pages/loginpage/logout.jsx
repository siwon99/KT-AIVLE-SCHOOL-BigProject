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
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ token }), 
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then(data => {
        if (data.success) {
          localStorage.removeItem('token');
          navigate('/login');
          alert('로그아웃에 성공했습니다.');
        } else {
          alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
        }
      })
      .catch(error => {
        alert('오류가 발생했습니다. 다시 시도해주세요.');
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