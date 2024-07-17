import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar.jsx';
import { getAdminMypage } from '../../service/apiService.js';
import './adminmypage.css';

const AdminMyPage = () => {
	const navigate = useNavigate();
	const [logs, setLogs] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			getAdminMypage(token)
			.then(data => {
				setLogs(data.reverse());
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
			<div>
				{logs.map((log, index) => (
					<div key={index}>
						<div> 농지 등록 날짜: {log.farm_created} </div>
						<div> 농지 아이디: {log.farm_id} </div>
						<div> 농지명: {log.farm_name} </div>
						<div> 농지 현재 상태: {log.farm_status} </div>
						<div> 농지 상태 기록: {log.farm_status_log_id} </div>
						<div> 임대 신청인: {log.user_id} </div>
					</div>
				))}
			</div>
		</>
	)
}

export default AdminMyPage;