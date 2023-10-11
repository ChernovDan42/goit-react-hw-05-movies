import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchMovie } from 'servises/APIFetch';
import css from '../components/styles/page_styles.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    searchMovie(movieName)
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => console.log(error));
  }, [movieName]);

  const submitQuery = e => {
    e.preventDefault();
    const params = e.target.elements.name.value;
    setSearchParams({ name: params });
    e.target.reset();
  };

  return (
    <main>
      <section className={css.section}>
        <SearchBox submitQuery={submitQuery} />
        {movies.length === 0 && <h1>No match</h1>}
        <MoviesList movies={movies} />
      </section>
    </main>
  );
};

export default Movies;
