import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import s from './MovieListItem.module.css';

export default function MovieListItem({ movie }) {
  const { id, title } = movie;
  return <Link to={`/${id}`}>{title}</Link>;
}

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }).isRequired,
};
