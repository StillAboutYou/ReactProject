import logo from './logo.svg';
import './App.css';
import { cnMixSpace } from '@consta/uikit/MixSpace'
import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
// import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom'
import { Attachment } from '@consta/uikit/Attachment';
import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';
import { IconBackward } from '@consta/icons/IconBackward';
import { Card } from '@consta/uikit/Card';
//import MainPage from '../../pages/main-page/MainPage';
//import ServicePage from '../../pages/service-page/ServicePage';
//import ServiceDetailPage from '../../pages/servie-detail-page/ServiceDetailPage';
import { Responses404 } from '@consta/uikit/Responses404';
//import MainLayout from '../../layouts/main-layout/MainLayout';
//import { AppRoute } from '../../../const';
//import AuthPage from '../../pages/auth-page/AuthPage';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../../layouts/Layout'; // убедитесь, что путь правильный
import Main from "../../pages/main"; // проверьте пути
import Services from "../../pages/services"; // проверьте пути
import Profile from "../../pages/profile"; // проверьте пути
import Login from "../../pages/login"
import NotFound from '../../pages/404';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
//import About from './about';
//import Angular from './angular';
//import Reactpage from './react';
//import Vue from './vue';  

// <Route path="/" element={<Layout />}>
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

{/* <Route path="/" element={<Layout />}> 
  <Route index element={<Main />} />
  <Route path="/login" element={<Login />} />
  <Route path="/services" element={
    <PrivateRoute>
      <Services />
    </PrivateRoute>
  } />
  <Route path="/profile" element={
    <PrivateRoute>
      <Profile />
    </PrivateRoute>
  } />
  <Route path="*" element={<NotFound />} />
</Route> */}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/services"
            element={
              <PrivateRoute>
                <Services />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/user/:id" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;


{/* <Route path="/about.html" element={<About />} />
<Route path="/tool/angular.html" element={<Angular />} />
<Route path="/tool/react.html" element={<Reactpage />} />
<Route path="/tool/vue.html" element={<Vue />} /> */}



// function App() {
//   return (
    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }