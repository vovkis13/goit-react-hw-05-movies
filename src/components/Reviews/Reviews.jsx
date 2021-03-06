import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'api/fetchMovies';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetchMovieById(movieId, 'reviews');
      setReviews(results);
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <h3 className={s.title}>Reviews:</h3>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews.length > 0 && (
        <ul className={s.reviews}>
          {reviews.map((review, i) => (
            <li className={s.review} key={review.id}>
              <details open={i < 3}>
                <summary className={s.author}>{review.author}</summary>
                <p className={s.content}>{review.content}</p>
              </details>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
