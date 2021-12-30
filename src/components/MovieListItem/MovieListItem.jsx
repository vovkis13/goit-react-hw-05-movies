import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieListItem.module.css';

export default function MovieListItem({ movie }) {
  const { id, title, poster_path, release_date } = movie;
  const { pathname, search } = useLocation();
  const path = pathname === '/' ? '/movies' : pathname;
  const year = release_date.split('-')[0];
  const handleClick = () =>
    localStorage.setItem('gobackURL', pathname + search);
  return (
    <li className={s.item}>
      <Link className={s.link} to={`${path}/${id}`} onClick={handleClick}>
        <div className={s.imagebox}>
          <img className={s.image} src={poster_path} alt={title}></img>
        </div>
        <div className={s.about}>
          <span className={s.title}>{title}</span>
          <span className={s.year}>({year})</span>
        </div>
      </Link>
    </li>
  );
}

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }).isRequired,
};
