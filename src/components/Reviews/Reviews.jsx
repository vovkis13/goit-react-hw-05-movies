import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../../api/fetchMovies';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await fetchMovieById(movieId, 'reviews');
      setReviews(res.results);
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
