import { useState, useEffect } from 'react';
import { fetchMovies } from '../../api/fetchMovies';
import MovieListItem from '../../components/MovieListItem';
// import PropTypes from 'prop-types';
import s from './HomePage.module.css';

export default function HomePage() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movies = await fetchMovies('trending');
      setTrends(movies.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <h2 className={s.title}>Trending movies</h2>
      <ul className={s.list}>
        {trends.map(movie => (
          <MovieListItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </>
  );
}
