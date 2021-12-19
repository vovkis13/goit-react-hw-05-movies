import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
