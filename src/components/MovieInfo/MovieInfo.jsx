import stockPhoto from '../default/images/logo_imt_small2_medium.jpeg';
import css from './MovieInfo.module.css';
import PropTypes from 'prop-types';

export const MovieInfo = ({ movie }) => {
  const { poster_path, title, overview, release_date, genres } = movie;
  const year = release_date.slice(0, 4);

  return (
    <div className={css.movieInfoContainner}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : stockPhoto
        }
        alt="poster"
        style={{ width: 264, height: 426 }}
      />
      <div className={css.movieInfoText}>
        <h1>
          {title}({year})
        </h1>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul className={css.genresList}>
          {genres.map(({ id, name }) => {
            return (
              <li key={id} className={css.genreItem}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
