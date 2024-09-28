import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes = () => {
  const auth = localStorage.getItem('auth');
  return auth ? <Navigate to="/" replace /> : <Outlet />;
};

export default AuthRoutes;