import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCurrentUser } from '../components/userService';


const Profile = () => {
  const { id } = useParams(); 
  const user = useSelector((state) => state.user); 
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userInfo = await fetchCurrentUser(user.accessToken);
        setProfileData(userInfo);
      } catch (err) {
        console.error(err);
        setError('Не удалось загрузить данные профиля.');
      }
    };

    if (user.isAuthenticated) {
      getUserProfile();
    }

  }, [user]);


  if (error) {
    return <p>{error}</p>;
  }


  if (!profileData) {
    return <p>Загрузка...</p>;
  }


  if (profileData.id !== Number(id)) {
    return <p>Ошибка доступа к профилю</p>; 
  }

  return (
    <div className="profile">
      <h1>Профиль пользователя {profileData.name}</h1>
      <p>ID: {profileData.id}</p>
      <p>Имя: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
    </div>
  );
};

export default Profile;
