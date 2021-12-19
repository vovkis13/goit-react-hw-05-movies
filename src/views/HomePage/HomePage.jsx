import { useState, useEffect } from 'react';
import { fetchTrending } from '../../api/fetchMovies';
import MovieListItem from '../../components/MovieListItem';
// import PropTypes from 'prop-types';
import s from './HomePage.module.css';

export default function HomePage() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movies = await fetchTrending();
      setTrends(movies.results);
    }
    if (!trends.length) fetchData();
  }, [trends]);

  return (
    <>
      <h2 className={s.title}>Trending movies</h2>
      <ul className={s.list}>
        {trends.map(movie => (
          <MovieListItem className={s.item} movie={movie} />
        ))}
      </ul>
    </>
  );
}
