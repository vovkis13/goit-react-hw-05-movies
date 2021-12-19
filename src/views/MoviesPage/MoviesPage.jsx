import { useState } from 'react';
import { fetchMovies } from '../../api/fetchMovies';
import Searchbar from '../../components/Searchbar';
import MovieListItem from '../../components/MovieListItem';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const tempQuery = e.target[1].value;
    if (!tempQuery) {
      setMovies([]);
      return;
    }
    setLoading(true);
    const movies = await fetchMovies(tempQuery);
    setQuery(tempQuery);
    setMovies(movies.results);
    setLoading(false);
  };

  return (
    <>
      <Searchbar initQuery={query} onSubmit={handleSubmit} />
      {!loading && (
        <ul className={s.list}>
          {movies.map(movie => (
            <MovieListItem movie={movie} key={movie.id} />
          ))}
        </ul>
      )}
    </>
  );
}
