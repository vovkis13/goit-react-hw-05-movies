import { useEffect, useState } from 'react';
import {
  NavLink,
  useNavigate,
  useParams,
  Route,
  Routes,
} from 'react-router-dom';
import { fetchMovieById } from '../../api/fetchMovies';
import MovieCard from '../../components/MovieCard/MovieCard';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
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
      <div>
        <button className={s.goBack} onClick={() => navigate(-1)}>
          Go back
        </button>
        {movie && <MovieCard movieInfo={movie} />}
        <p className={s.addTitle}>Additional information:</p>
        <ul>
          <li>
            <NavLink className={s.addLink} to={'cast'}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={s.addLink} to={'reviews'}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path={'cast'} element={<Cast />} />
          <Route path={'reviews'} element={<Reviews />} />
        </Routes>
      </div>))
};

