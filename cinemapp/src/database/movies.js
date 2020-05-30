import {storeData, getData} from './common';

const DBNAME = 'MOVIESDB';

export const storeMovies = async (movies) => {
  await storeData(DBNAME, movies);
};

export const recoverMovies = () => getData(DBNAME);
