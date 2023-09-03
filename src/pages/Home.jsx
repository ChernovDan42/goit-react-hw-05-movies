import { useEffect, useState } from 'react';
import { getPopularMovies } from '../servises/APIFetch';
import { MoviesList } from '../components/MoviesList/MoviesList';
import css from '../components/styles/page_styles.module.css';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then(res => {
        setPopularMovies(res.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <section className={css.section}>
        <div className={css.containeer}>
          <h1>Trending today</h1>
          <MoviesList movies={popularMovies} />
        </div>
      </section>
    </main>
  );
};

export default Home;
