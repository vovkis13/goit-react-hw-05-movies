import PropTypes from 'prop-types';
import MovieListItem from 'components/MovieListItem/';
import s from './MoviesCollection.module.css';

export default function MoviesCollection({ movies }) {
  return (
    <ul className={s.collection}>
      {movies.map(movie => (
        <MovieListItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}

MoviesCollection.propTypes = {
  onSubmit: PropTypes.array.isRequired,
};
