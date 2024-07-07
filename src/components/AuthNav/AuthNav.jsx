import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};
const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink className={linkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={linkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
