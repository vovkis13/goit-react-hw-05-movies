import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import s from './MovieListItem.module.css';

export default function MovieListItem({ movie }) {
  const { id, title } = movie;

  const { pathname } = useLocation();
  const path = pathname === '/' ? '/movies' : pathname;

  return (
    <li>
      <Link className={s.link} to={`${path}/${id}`}>
        {title}
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
