import React, { useEffect, useState } from 'react';

import { getUserInfo } from '.././components/userService';


const Profile = ({ accessToken }) => {

  const [userInfo, setUserInfo] = useState(null);

  const [error, setError] = useState(null);


  useEffect(() => {

    const fetchUserInfo = async () => {

      if (!accessToken) return;

      try {

        const data = await getUserInfo(accessToken);

        setUserInfo(data);

      } catch (error) {

        setError('Ошибка при получении информации о пользователе.');

      }

    };

    fetchUserInfo();

  }, [accessToken]);


  if (error) {

    return <p>{error}</p>;

  }


  if (!userInfo) {

    return <p>Загрузка...</p>;

  }


  return (

    <div>

      <h1>Информация о пользователе</h1>

      <p>Имя: {userInfo.firstName} {userInfo.lastName}</p>

      <p>Email: {userInfo.email}</p>

    </div>

  );

};


export default Profile;