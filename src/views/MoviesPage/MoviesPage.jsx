import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMovies } from '../../api/fetchMovies';
import Searchbar from '../../components/Searchbar';
import MovieListItem from '../../components/MovieListItem';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const query = e.target[1].value;
    navigate(`?query=${query}`);
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
    <div>
      <h2 className={s.title}>Search movies</h2>
      <Searchbar onSubmit={handleSubmit} />
      {!loading && (
        <ul className={s.list}>
          {movies.map(movie => (
            <MovieListItem movie={movie} key={movie.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
