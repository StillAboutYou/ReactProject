import React from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom';
import "../components/app/styles.css"
import "../components/app/layout.css"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../components/userSlice';


const Layout = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <div className="container">
        <div className="content">
          <header className="header">
            <nav className="nav-left">
              <Link to="/" className={`button ${location.pathname === '/' ? 'active' : ''}`}>Главная</Link>
              {isAuthenticated && (
                <Link to="/services" className={`button ${location.pathname === '/services' ? 'active' : ''}`}>Услуги</Link>
              )}
            </nav>
            <nav>
              {isAuthenticated ? (
                <>
                  <span>{user ? `${user.firstName} ${user.lastName}` : ''}</span> {/* Отображаем ФИО пользователя */}
                  <button onClick={() => dispatch(logout())}>Выйти</button> {/* Кнопка выхода */}
                </>
              ) : (
                <Link to="/login" className={`button ${location.pathname === '/login' ? 'active' : ''}`}>Вход</Link>
              )}
            </nav>
          </header>
          <main>
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
/*
function Layout() {

  const location = useLocation();
  
  return (
  <>
    <div className="container">
      <div className="content">
        <header className="header">
          <nav className="nav-left">
            <Link to="/" className={`button ${location.pathname === '/' ? 'active' : ''}`}>
              Главная страница
            </Link>
            <Link to="/services" className={`button ${location.pathname === '/services' ? 'active' : ''}`}>
              Услуги компании
            </Link>
          </nav>
          <nav className="nav-right">
            <Link to="/profile" className={`button rounded ${location.pathname === '/profile' ? 'active' : ''}`}>
              ФИО
            </Link>
            <Link to="/login" className={`button ${location.pathname === '/login' ? 'active' : ''}`}>
              Вход
            </Link>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
        <footer className="footer">
          <nav className="nav-left">
            <Link to="/" className={`button ${location.pathname === '/' ? 'active' : ''}`}>
              Главная страница
            </Link>
            <Link to="/services" className={`button ${location.pathname === '/services' ? 'active' : ''}`}>
              Услуги компании
            </Link>
          </nav>
          <nav className="nav-right">
            <p>@2024 моя компания</p>
          </nav>
        </footer>
      </div>
    </div>
  </>
  );
}
*/



// const Layout = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const user = useSelector((state) => state.auth.user);
//   const dispatch = useDispatch();
//   const location = useLocation();

//   return (
//     <>
//       <div className="container">
//         <div className="content">
//           <header className="header">
//             <nav className="nav-left">
//               <Link to="/" className={`button ${location.pathname === '/' ? 'active' : ''}`}>Главная</Link>
//               {isAuthenticated && <Link to="/services" className={`button ${location.pathname === '/services' ? 'active' : ''}`}>Услуги</Link>}
//             </nav>
//             <nav>
//               {isAuthenticated ? (
//                 <>
//                   <span>{user ? user.firstName : ''}</span>
//                   <button onClick={() => dispatch(logout())}>Выйти</button>
//                 </>
//               ) : (
//                 <Link to="/login" className={`button ${location.pathname === '/login' ? 'active' : ''}`}>Вход</Link>
//               )}
//             </nav>
//           </header>
//           <main>
//             <Outlet />
//           </main>
//           <footer className="footer">
//             <nav className="nav-left">
//               <Link to="/" className={`button ${location.pathname === '/' ? 'active' : ''}`}>Главная</Link>
//               {isAuthenticated && <Link to="/services" className={`button ${location.pathname === '/services' ? 'active' : ''}`}>Услуги</Link>}
//             </nav>
//             <nav className="nav-right">
//               <p>@2024 моя компания</p>
//               </nav>
//         </footer>
//       </div>
//     </div>
//   </>
//   );
// }

// export default Layout;


// function Layout() {
//   return (
//     <>
//         <header>
//             <nav>
//                 <Link to="/" style={{padding: 20}}>
//                     Главная
//                 </Link>
//                 <Link to="/about.html" style={{padding: 20}}>
//                     Что такое front-end
//                 </Link>
//             </nav>
//         </header>
//         <main>
//             <Outlet />
//         </main>
//     </>
//   );

// }

// export default Layout;