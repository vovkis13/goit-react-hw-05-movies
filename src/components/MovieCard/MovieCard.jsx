import React from 'react';
import PropTypes from 'prop-types';
import s from './MovieCard.module.css';

export default function MovieCard({ movieInfo }) {
  const { poster_path, title, release_date, popularity, overview, genres } =
    movieInfo;

  return (
    <div className={s.card}>
      <div className={s.thumb}>
        <img src={poster_path} alt={title} />
      </div>
      <div className={s.info}>
        <h3>{title}</h3>
        <span>{release_date}</span>
        <p>{popularity}</p>
        <p>{overview}</p>
        <p>{genres.map(({ name }) => name).join(' ')}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    popularity: PropTypes.number,
    overview: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    genres: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};