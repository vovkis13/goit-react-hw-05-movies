import { useState, useEffect } from 'react';
import { fetchMovies } from 'api/fetchMovies';
import MovieListItem from 'components/MovieListItem';
import s from './HomePage.module.css';

export default function HomePage() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { results } = await fetchMovies('trending');
        setTrends(results);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2 className={s.title}>Trending movies</h2>
      {!loading && (
        <ul className={s.list}>
          {trends.map(movie => (
            <MovieListItem movie={movie} key={movie.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
