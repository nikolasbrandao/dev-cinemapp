import remove from 'lodash.remove';

// Action Types
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

// Action Creators
export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie,
  };
}

export function removeMovie(imdbID) {
  return {
    type: REMOVE_MOVIE,
    payload: imdbID,
  };
}

// reducer
const initialState = [];

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return [
        ...state,
        {
          movie: action.movie,
        },
      ];

    case REMOVE_MOVIE:
      return remove(state, ({movie}) => movie.imdbID !== action.payload);

    default:
      return state;
  }
}

export default moviesReducer;
