import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd063a3c1ffdc1b15e46a20f479fc1290',
  },
});

const APIKEY = '';
const BASEURL = '/';
export const IMAGEBASEURL = 'https://image.tmdb.org/t/p/w500';

export async function getPopularMovies() {
  const { data } = await instanse.get(`trending/movie/day`);
  return data;
}

export async function getMovieById(movieId) {
  const { data } = await instanse.get(`movie/${movieId}`);
  return data;
}

export async function getMovieCast(movieId) {
  const { data } = await instanse.get(`movie/${movieId}/credits`);
  return data;
}

export async function getMovieReviews(movieId) {
  const { data } = await instanse.get(`movie/${movieId}/reviews`);
  return data;
}

export async function searchMovie(name) {
  const params = {
    query: name,
    include_adults: false,
    language: 'es-US',
    page: 1,
  };
  const { data } = await instanse.get(`search/movie`, { params });
  return data;
}
