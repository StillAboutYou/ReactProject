import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCurrentUser } from '../components/userService';
import './profile.css'; // Подключение ваших стилей
import { Text } from '@consta/uikit/Text'; // Импорт компонента Text из @consta

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
    return <Text>{error}</Text>;
  }


  if (!profileData) {
    return <center><h1>Загрузка...</h1></center>
  }


  if (profileData.id !== Number(id)) {
    return <Text>Ошибка доступа к профилю</Text>; 
  }

  return (
    <div className="profile" style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "20px" }}>
        <h1>Профиль пользователя {profileData.name}</h1>
        <Text>ID: {profileData.id}</Text>
        <Text>Имя: {profileData.username}</Text>
        <Text>Email: {profileData.email}</Text>
      </div>
      <div>
        <img src={profileData.image} alt={`Профиль ${profileData.name}`} style={{ height: "150px", borderRadius: "75px" }} />
      </div>
    </div>
  );
};

export default Profile;
