import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMovieById } from 'api/fetchMovies';
import MovieCard from 'components/MovieCard/MovieCard';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const movieInfo = await fetchMovieById(movieId);
        setMovie(movieInfo);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    !loading && (
      <div className={s.details}>
        <button className={s.goBack} onClick={() => navigate(-1)}>
          Go back
        </button>
        <h2 className={s.title}>Movie details</h2>
        {movie && <MovieCard movieInfo={movie} />}
      </div>
    )
  );
}
