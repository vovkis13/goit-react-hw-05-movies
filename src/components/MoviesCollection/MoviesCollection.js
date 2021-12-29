import MovieListItem from 'components/MovieListItem/';
import s from './MoviesCollection.module.css';

export default function MoviesCollection({ movies }) {
  return (
    <ul className={s.collection}>
      {movies.map(movie => (
        <MovieListItem movie={movie} />
      ))}
    </ul>
  );
}
