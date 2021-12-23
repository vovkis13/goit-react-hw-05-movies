import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../api/fetchMovies';
import Searchbar from '../../components/Searchbar';
import MovieListItem from '../../components/MovieListItem';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  // if (searchParams.get('query')) getMovies(searchParams.get('query'));

  async function getMovies(query) {
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
  }

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target[1].value;
    navigate(`?query=${query}`);
    getMovies(query);
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
