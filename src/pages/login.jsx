import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../components/userSlice';
import { loginUser } from '../components/userService';
import './login.css'

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
      const userData = {
        user: data.user,
        username: data.username,
        id: data.id,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      };  
    
      localStorage.setItem('user', JSON.stringify({
        user: data.user,
        username: data.username,
        id: data.id,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      }));

      dispatch(login(userData));


      navigate(`/users/${data.id}`);

    } catch (err) {
      setError('Ошибка входа. Проверьте свои учетные данные.');
    }
  };

  return (
    <div>
      <h1 className='title'>Вход</h1>
      <form className='login-form'onSubmit={handleLogin}>
        <input className='input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Имя пользователя" required />
        <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" required />
        <button className='login-botton' type="submit">Войти</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};


export default Login;