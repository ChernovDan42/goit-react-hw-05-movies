import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/APIFetch';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(res => {
        setReviews(res.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className={css.reviewsList}>
      {reviews.length > 0 ? (
        reviews.map(review => {
          const { id, author, content } = review;
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>We haven`t reviews for this movie</p>
      )}
    </ul>
  );
};

export default MovieReviews;
