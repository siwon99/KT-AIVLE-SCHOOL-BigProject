const base_url = 'http://3.39.228.42'

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
	return data;
};

export const getUser = async (token) => {
	try {
		const user = await fetchWithToken('/users/authorization/', token);
		return user;
	} catch (error) {
		throw error;
	}
};

export const getAdminMypage = async (token) => {
  try {
		const logs = await fetchWithToken('/farms/admin/mypage/', token);
		return logs;
	} catch (error) {
		throw error;
	}
};

export const getUserMypage = async (token) => {
  try {
		const logs = await fetchWithToken('/farms/user/mypage/', token);
		return logs;
	} catch (error) {
		throw error;
	}
};