import api from './api';
import {MoviesDatabase} from '../database';

export const findByTitle = (title, page = 1) => {
  return api.get('', {
    params: {
      s: title,
      page,
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
