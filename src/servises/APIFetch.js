import axios from 'axios';

const APIKEY = 'd063a3c1ffdc1b15e46a20f479fc1290';
const BASEURL = 'https://api.themoviedb.org/3/';
export const IMAGEBASEURL = 'https://image.tmdb.org/t/p/w500';

export function getPopularMovies() {
  return axios.get(`${BASEURL}trending/movie/day?api_key=${APIKEY}`);
}

export function getMovieById(movieId) {
  return axios.get(`${BASEURL}movie/${movieId}?api_key=${APIKEY}`);
}

export function getMovieCast(movieId) {
  return axios.get(`${BASEURL}movie/${movieId}/credits?api_key=${APIKEY}`);
}

export function getMovieReviews(movieId) {
  return axios.get(`${BASEURL}movie/${movieId}/reviews?api_key=${APIKEY}`);
}

export function searchMovie(name) {
  return axios.get(
    `${BASEURL}search/movie?query=${name}&include_adult=false&language=en-US&page=1&api_key=${APIKEY}`
  );
}
