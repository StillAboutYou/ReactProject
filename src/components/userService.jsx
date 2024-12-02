import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data.users;
};

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, {
    username,
    password,
    expiresInMins: 60,
  });
  return response.data;
};

export const getUserInfo = async (accessToken) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {  
        headers: {
            Authorization: `Bearer ${accessToken}`,
          },
      });
      return response.data; // Возвращаем данные пользователя
    } catch (error) {
      console.error("Ошибка при получении информации о пользователе", error);
      throw error;
    }
  };

export const fetchCurrentUser = async (accessToken) => {
  const response = await axios.get(`${API_BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};


export const refreshAccessToken = async (refreshToken) => {
  const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
    refreshToken,
    expiresInMins: 60,
  });
  return response.data;
};
