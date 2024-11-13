import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(StoreContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;