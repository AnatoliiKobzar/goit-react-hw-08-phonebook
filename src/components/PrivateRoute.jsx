import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shoudRedirect = !isRefreshing && !isLoggedIn;
  return shoudRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
