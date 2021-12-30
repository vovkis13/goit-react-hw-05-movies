import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'api/fetchMovies';
import Searchbar from 'components/Searchbar';
import MoviesCollection from 'components/MoviesCollection';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  async function getMovies(query) {
    if (!query) return;
    setLoading(true);
    try {
      const results = await fetchMovies('search', query);
      setMovies(results);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (searchParams.get('query')) getMovies(searchParams.get('query'));
  }, []);

  const handleSubmit = query => {
    navigate(`?query=${query}`);
    getMovies(query);
  };

  return (
    <div>
      <h2 className={s.title}>Search movies</h2>
      <Searchbar onSubmit={handleSubmit} />
      {!loading && <MoviesCollection movies={movies} />}
    </div>
  );
}
