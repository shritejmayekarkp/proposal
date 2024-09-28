import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const auth = localStorage.getItem('auth');
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;