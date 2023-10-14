import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink
            className={css.navLink}
            to="/"
            activestyle={{ color: 'red' }}
          >
            Home
          </NavLink>
          <NavLink
            className={css.navLink}
            to="/movies"
            activestyle={{ color: 'red' }}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
