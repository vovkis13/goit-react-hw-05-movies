import { useState } from 'react';
import { fetchMovies } from '../../api/fetchMovies';
import Searchbar from '../../components/Searchbar';
import MovieListItem from '../../components/MovieListItem';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const query = e.target[1].value;
    if (!query) return;
    setLoading(true);
    try {
      const { results } = await fetchMovies('search', query);
      setMovies(results);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className={s.title}>Search movies</h2>
      <Searchbar onSubmit={handleSubmit} />
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
