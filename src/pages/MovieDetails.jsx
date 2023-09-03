import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { getMovieById } from '../servises/APIFetch';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import styles from '../components/styles/page_styles.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(movieId)
      .then(res => setMovieData(res.data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.containeer}>
          <Link to={backLinkLocationRef.current}>
            <button className={styles.buttonBack} type="button">
              Go back
            </button>
          </Link>

          {movieData && <MovieInfo movie={movieData} />}

          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
