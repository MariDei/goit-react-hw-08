import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import css from './PrivateRoute.module.css';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    Component
  ) : (
    <Navigate className={css.link} to={redirectTo} />
  );
};

export default PrivateRoute;
