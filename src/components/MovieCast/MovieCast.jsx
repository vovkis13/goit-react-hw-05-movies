import { useState, useEffect } from 'react';
import { fetchMovieCreditsById } from '../../api/fetchMovies';
import s from './MovieCast.module.css';

export default function MovieCast({ id }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movieCast = await fetchMovieCreditsById(id);
      setCast(movieCast);
    }
    fetchData();
  }, [id]);

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
