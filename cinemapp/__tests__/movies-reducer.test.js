import moviesReducer, {ADD_MOVIE, REMOVE_MOVIE} from '../src/redux/cinemaApp';
import {firstMovie, secondMovie} from '../__mocks__/movies';

describe('movies reducer', () => {
  it('should return the initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_MOVIE', () => {
    expect(
      moviesReducer([], {
        type: ADD_MOVIE,
        movie: firstMovie,
      })
    ).toEqual([
      {
        movie: firstMovie,
      },
    ]);
    expect(
      moviesReducer([{movie: firstMovie}], {
        type: ADD_MOVIE,
        movie: secondMovie,
      })
    ).toEqual([
      {
        movie: firstMovie,
      },
      {
        movie: secondMovie,
      },
    ]);
  });

  it('should handle REMOVE_MOVIE', () => {
    expect(
      moviesReducer([{movie: firstMovie}], {
        type: REMOVE_MOVIE,
        payload: firstMovie.imdbID,
      })
    ).toEqual([]);

    expect(
      moviesReducer([{movie: firstMovie}, {movie: secondMovie}], {
        type: REMOVE_MOVIE,
        payload: firstMovie.imdbID,
      })
    ).toEqual([{movie: secondMovie}]);
  });
});
