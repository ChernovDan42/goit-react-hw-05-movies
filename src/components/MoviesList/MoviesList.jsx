import { Link, useLocation } from 'react-router-dom';
import pageStyles from '../styles/page_styles.module.css';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <section className={pageStyles.section}>
      <div className={pageStyles.containeer}>
        <ul className={css.moviesList}>
          {movies.map(movie => {
            const { id, title, name } = movie;
            return (
              <li key={id} className={css.listLink}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <h2>{title || name}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};
