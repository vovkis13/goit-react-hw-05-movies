import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../../api/fetchMovies';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const movieCast = await fetchMovieById(movieId, 'credits');
      setCast(movieCast);
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <h3>Cast:</h3>
      <ul className={s.cast}>
        {cast.map(actor => (
          <li key={actor.id}>
            <img src={actor.profile_path} alt={actor.name} />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

