import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar.jsx';
import { getUserMypage } from '../../service/apiService.js';

const UserMyPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		
		if (token) {
			getUserMypage(token)
			.then(logs => {
				console.log(logs);
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
	)
}

export default UserMyPage;