import { NavLink, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import 'react-circular-progressbar/dist/styles.css';
import s from './MovieCard.module.css';

export default function MovieCard({ movieInfo }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;
  const year = release_date.split('-')[0];
  const percentage = vote_average * 10;
  return (
    <div className={s.card}>
      <div className={s.thumb}>
        <img src={poster_path} alt={title} />
      </div>
      <div className={s.info}>
        <h3 className={s.title}>
          {title} ({year})
        </h3>
        <CircularProgressbar
          className={s.progress}
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            strokeLinecap: 'round',
            textSize: '30px',
            pathColor: `rgba(178, 92, 235, ${percentage / 100})`,
            textColor: '#562675',
            trailColor: 'rgba(178, 92, 235, 0.3)',
          })}
        />
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
