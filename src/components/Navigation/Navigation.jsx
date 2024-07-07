import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <div className={css.container}>
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={linkClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
