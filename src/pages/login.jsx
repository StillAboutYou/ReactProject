/*
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/store'; 
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';

import { loginUser } from '.././components/api';


const Login = ({ onLogin }) => {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError(null);

    

    try {

      const data = await loginUser(username, password);

      // Здесь можно сохранить токены в localStorage или state

      localStorage.setItem('accessToken', data.accessToken);

      localStorage.setItem('refreshToken', data.refreshToken);

      onLogin(data.accessToken); // Вызов результата авторизации

    } catch (error) {

      setError('Ошибка авторизации. Проверьте логин и пароль.');

    }

  };


  return (

    <div>

      <h2>Авторизация</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>

        <input 

          type="text" 

          placeholder="Логин" 

          value={username} 

          onChange={(e) => setUsername(e.target.value)} 

          required 

        />

        <input 

          type="password" 

          placeholder="Пароль" 

          value={password} 

          onChange={(e) => setPassword(e.target.value)} 

          required 

        />

        <button type="submit">Вход</button>

      </form>

    </div>

  );

};

export default Login;
*/
// src/pages/Login.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../components/userSlice';
import { loginUser } from '../components/userService';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);
      dispatch(login({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      }));
      
      // navigate('/');
      // Перенаправление на главную страницу (дополнительно: используйте useNavigate)
    } catch (err) {
      setError('Ошибка входа. Проверьте свои учетные данные.');
    }
  };

  return (
    <div>
      <h1>Вход</h1>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Имя пользователя" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" required />
        <button type="submit">Войти</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};


export default Login;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     // здесь должен быть код на получение данных формы (email и password а также вызов функции loginUser где будет сравниваться пароль и логин из формы и правильные ли они)

//     if (!email || !password) {
//       setError('Поле логина и пароля не должно быть пустым');
//       return;
//     }
    
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError('Введите корректный email');
//       return;
//     }

//     if (!/(?=.*[0-9])(?=.*[a-zA-Z])/.test(password)) {
//       setError('Пароль должен содержать минимум одну букву и цифру');
//       return;
//     }
    

//     let result = loginUser(email, password);
//     if (result == true) {
//       dispatch(login({ email }));

//       localStorage.setItem('user', JSON.stringify({ email }));
//       navigate('/');
//     }
//     else {
//       return;
//     }

//   };

//   const loginUser = async (email, password) => {
//     if (email == "admin@1234.ru" && password == "1234") {
//       setError('Вход выполнен');
//       return true;
//     }
//     else {
//       setError('Неверный логин или пароль');
//       return false;
//     }
//     /*
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         // Обработка успешного входа
//       } else {
//         // Обработка ошибки входа
//       }
//     } catch (error) {  
//       console.error('Ошибка при входе:', error);
//     }
//     */
//   };

//   return (
//     <div>
//       <h1>Авторизация</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Пароль"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Вход</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Login;
