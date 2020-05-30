import api from './api';
import {MoviesDatabase} from '../database';

export const findByTitle = (title) => {
  return api.get('', {
    params: {
      s: title,
    },
  });
};

export const setFavorite = async (movie) => {
  const movies = (await MoviesDatabase.recoverMovies()) || [];
  movies.push(movie);
  MoviesDatabase.storeMovies(movies);
};

export const unsetFavorite = async (movie) => {
  const movies = (await MoviesDatabase.recoverMovies()) || [];
  const newMoviesList = movies.filter(
    (movieItem) => movieItem.imdbID !== movie.imdbID
  );
  MoviesDatabase.storeMovies(newMoviesList);
};

export const getAllMovies = async () => {
  const movies = await MoviesDatabase.recoverMovies();
  return movies;
};
