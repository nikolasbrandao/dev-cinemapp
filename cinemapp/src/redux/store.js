import {createStore} from 'redux';
import moviesReducer from './cinemaApp';

const store = createStore(moviesReducer);

export default store;
