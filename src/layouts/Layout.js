import React from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom';
import "../components/app/styles.css"
import "../components/app/layout.css"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../components/userSlice';
import { Button } from '@consta/uikit/Button';



const Layout = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentYear = new Date().getFullYear();  
  

  return (
    <>
      <div className="container">
        <div className="content">
          <header className="header">
            <nav className="nav-left">
              <Link to="/" className={`button ${location.pathname === '/' ? 'active' : ''}`}>
                <Button className="header-text" label="Главная" view="clear"/>
              </Link>
              {isAuthenticated && (
                <Link to="/services" className={`button ${location.pathname === '/services' ? 'active' : ''}`}>
                  <Button className="header-text" label="Услуги" view="clear"/>
                </Link>
              )}
            </nav>
            <nav>
              {isAuthenticated ? (
                <>
                  <Link to={`/users/${user.id}`} className={`button`}>{user.username}</Link> {/* Кнопка профиля пользователя */}
                  <button className='ButtonLogOut' onClick={() => dispatch(logout())}>Выйти</button>
                </>
              ) : (
                <Link to="/login" className={`button ${location.pathname === '/login' ? 'active' : ''}`}>
                  <Button className="header-text" label="Войти" view="primary" />
                </Link>
              )}
            </nav>
          </header>
          <main className='main'>
            <Outlet />
          </main>
          <footer className="footer">
            <nav className="nav-left">
              <Link to="/" className={`button ${location.pathname === '/' ? 'active' : ''}`}>Главная</Link>
              {isAuthenticated && (
                <Link to="/services" className={`button ${location.pathname === '/services' ? 'active' : ''}`}>Услуги</Link>
              )}
            </nav>
            <nav className="nav-right">
              <p>@{currentYear} моя компания</p>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;