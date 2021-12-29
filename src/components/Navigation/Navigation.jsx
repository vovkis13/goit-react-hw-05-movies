import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  const location = useLocation();
  const handleClick = () => localStorage.setItem('url', location.pathname);
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
            onClick={handleClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
            onClick={handleClick}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
