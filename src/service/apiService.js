const base_url = 'http://3.39.228.42';

// 주어진 엔드포인트에 대해 토큰을 사용하여 GET 요청을 보내고, JSON 데이터를 반환
export const fetchWithToken = async (endpoint, token, method = 'GET') => {
	const response = await fetch(`${base_url}${endpoint}`, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Token ${token}`,
		},
	});
	if (!response.ok) {
		throw new Error();
	}
	const data = await response.json();
	console.log('fetchWithToken data', data);
	return data;
};

// 주어진 엔드포인트에 대해 토큰과 바디를 사용하여 POST 요청을 보내고, JSON 데이터를 반환
export const postWithToken = async (endpoint, token, body, method = 'POST') => {
	const response = await fetch(`${base_url}${endpoint}`, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Token ${token}`,
		},
		body: JSON.stringify(body),
	});
	if (!response.ok) {
		throw new Error();
	}
	const data = await response.json();
	console.log('postWithToken data', data);
	return data;
};

// 사용자 인증을 위한 토큰을 사용하여 사용자 정보 가져옴
export const getUser = async (token) => {
	try {
		const user = await fetchWithToken('/users/authorization/', token);
		return user;
	} catch (error) {
		throw error;
	}
};

// 관리자 권한을 가진 사용자의 마이페이지 정보 가져옴
export const getAdminMypage = async (token) => {
	try {
		const logs = await fetchWithToken('/farms/admin/mypage/', token);
		return logs;
	} catch (error) {
		throw error;
	}
};

// 일반 사용자의 마이페이지 정보 가져옴
export const getUserMypage = async (token) => {
	try {
		const logs = await fetchWithToken('/farms/user/mypage/', token);
		return logs;
	} catch (error) {
		throw error;
	}
};

// 특정 농장을 임대하기 위해 해당 농장 ID와 토큰을 사용하여 POST 요청
export const rentFarm = async (fid, token) => {
	try {
		const res = await postWithToken(`/farms/user/detail/${fid}/`, token);
		return res;
	} catch (error) {
		throw error;
	}
};

// 관리자가 특정 임대 신청을 승인하기 위해 해당 신청 ID, 사용자 ID, 토큰을 사용하여 POST 요청
export const approveRent = async (lid, uid, token) => {
	try {
		const res = await postWithToken(`/farms/admin/mypage/detail/${lid}/`, token, {
			'user_id' : uid,
			'farm_status_log_id' : lid
		});
		return res;
	} catch (error) {
		throw error;
	}
};
