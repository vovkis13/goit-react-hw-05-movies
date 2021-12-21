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
import MovieCast from '../../components/MovieCast';
import MovieReviews from '../../components/MovieReviews';
import s from './MovieInfoPage.module.css';

export default function MovieInfoPage({ children }) {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const movieInfo = await fetchMovieById(movieId);
      setMovie(movieInfo);
    }
    fetchData();
  }, [movieId]);

  return (
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
        <Route path={'cast'} element={<MovieCast id={movieId} />} />
        <Route path={'reviews'} element={<MovieReviews />} />
      </Routes>
    </div>
  );
}
