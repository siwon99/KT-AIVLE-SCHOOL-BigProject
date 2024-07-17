import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar.jsx';
import { getUser } from '../../service/apiService.js';

// 이 페이지로 접근 후 admin인지 user인지 구별하고 (GET /user/authorization)
// adminmypage, usermypage로 각각 navigate 시켜야 함.
const MyPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
      getUser(token)
      .then(user => {
        if (user.is_staff) {
			navigate('/mypage/admin');
        } else {
			navigate('/mypage/user');
		}
      })
      .catch(error => {
        navigate('/notfound');
      });
    } else {
      navigate('/login');
    }
	}, [navigate]);
	
	return (
		<>
			<Navbar />
		</>
	);
}

export default MyPage;