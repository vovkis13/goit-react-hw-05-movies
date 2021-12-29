import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import s from './MovieCard.module.css';

export default function MovieCard({ movieInfo }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;
  const year = release_date.split('-')[0];
  return (
    <div className={s.card}>
      <div className={s.thumb}>
        <img src={poster_path} alt={title} />
      </div>
      <div className={s.info}>
        <h3 className={s.title}>
          {title} ({year})
        </h3>
        <p className={s.info}>User score: {vote_average * 10}%</p>
        <p className={s.subtitles}>Overview</p>
        <p className={s.info}>{overview}</p>
        <p className={s.subtitles}>Genres</p>
        <p className={s.info}>{genres.map(({ name }) => name).join(' ')}</p>
        <p className={s.subtitles}>Additional information:</p>
        <ul>
          <li className={s.addLink}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
              to={'cast'}
            >
              Cast
            </NavLink>
          </li>
          <li className={s.addLink}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
              to={'reviews'}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path={'cast'} element={<Cast />} />
          <Route path={'reviews'} element={<Reviews />} />
        </Routes>
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
