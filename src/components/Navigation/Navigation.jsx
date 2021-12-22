import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink to="/" className={s.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={s.link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
