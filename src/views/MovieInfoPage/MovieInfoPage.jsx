import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../../api/fetchMovies';
import MovieCard from '../../components/MovieCard/MovieCard';
// import s from './MovieInfoPage.module.css';

export default function MovieInfoPage() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const movieInfo = await fetchMovieById(movieId);
      setMovie(movieInfo);
    }
    fetchData();
  }, [movieId]);

  return movie && <MovieCard movieInfo={movie} />;
}
