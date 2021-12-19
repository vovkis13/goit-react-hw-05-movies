import { useState, useEffect } from 'react';
import { fetchMovies } from '../../api/fetchMovies';
import Searchbar from '../../components/Searchbar';
import MovieListItem from '../../components/MovieListItem';
// import PropTypes from 'prop-types';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSubmit();
  });

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
      <ul className={s.list}>
        {movies.map(movie => (
          <MovieListItem className={s.item} movie={movie} />
        ))}
      </ul>
    </>
  );
}

// MoviesPage.propTypes = {
//   //   imageURL: PropTypes.string.isRequired,
//   //   forAlt: PropTypes.string,
//   //   closeModal: PropTypes.func.isRequired,
// };
