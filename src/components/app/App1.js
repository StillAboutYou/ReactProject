const MainPage = React.lazy(() => import('../../pages/MainPage'));
const ServicePage = React.lazy(() => import('../../pages/ServicePage'));
const AuthPage = React.lazy(() => import('../../pages/AuthPage'));
const ProfilePage = React.lazy(() => import('../../pages/ProfilePage'));
const ServiceDetailPage = React.lazy(() => import('../../pages/ServiceDetailPage'));

const App = () => {
  // Стили для загрузки и 404 страницы
  const loadingStyle = { width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' };

  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Suspense
          fallback={
            <div style={loadingStyle}>
              <Loader size="m" />
            </div>
          }
        >
          <Routes>
            <Route path={AppRoute.main} element={<MainLayout />}>
              <Route index element={<MainPage />} />
              <Route path={AppRoute.service} element={<ServicePage />} />
              <Route path={AppRoute.auth} element={<AuthPage />} />
              <Route path={AppRoute.profile} element={<ProfilePage />} />
              <Route path='/service/:id' element={<ServiceDetailPage />} />
            </Route>
            <Route
              path='*'
              element={
                <div style={loadingStyle}>
                  <Responses404 />
                </div>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Theme>
  );
};

export default App;