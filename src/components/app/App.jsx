import logo from './logo.svg';
import './App.css';
import { cnMixSpace } from '@consta/uikit/MixSpace'
import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Attachment } from '@consta/uikit/Attachment';
import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';
import { IconBackward } from '@consta/icons/IconBackward';
import { Card } from '@consta/uikit/Card';
import { Responses404 } from '@consta/uikit/Responses404';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../../layouts/Layout'; 
import Main from "../../pages/main";
import Services from "../../pages/services"; 
import Profile from "../../pages/profile";
import Login from "../../pages/login"
import ServicesDetail from '../../pages/serviceDetail';
import NotFound from '../../pages/404';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../components/userSlice';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // загружаем из localStorage
    if (storedUser) {
      dispatch(login(JSON.parse(storedUser))); // обновляем состояние Redux
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>} />
          <Route path="/services/:id" element={<PrivateRoute><ServicesDetail /></PrivateRoute>} />
          <Route path="/users/:id" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;