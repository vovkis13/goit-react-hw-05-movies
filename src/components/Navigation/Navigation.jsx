import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
