import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Container, Title, SubTitle, CardMovie} from '../../components';
import {CinemaService} from '../../services';
import * as S from './styles';

const Favorites = () => {
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const getMoviesData = async () => {
    setLoading(true);
    try {
      const movies = await CinemaService.getAllMovies();
      setMovieList(movies || []);
      console.log(movies);
    } catch (error) {
      console.log('Error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  const handleFavoriteButton = (item) => {
    const newMovie = {...item, Favorite: !item.Favorite};
    if (newMovie.Favorite) {
      CinemaService.setFavorite(newMovie);
    } else {
      CinemaService.unsetFavorite(newMovie);
    }
    const newListMovie = movieList.filter(
      (movie) => movie.imdbID !== newMovie.imdbID
    );
    setMovieList(newListMovie);
  };

  return (
    <Container>
      <Title>Favoritos</Title>
      <SubTitle>Seus filmes e séries do coração</SubTitle>
      <S.ListMovieWrapper>
        <FlatList
          data={movieList}
          refreshing={loading}
          onRefresh={() => getMoviesData()}
          renderItem={({item}) => (
            <CardMovie
              key={item.imdbID}
              movie={item}
              onPressFavorite={handleFavoriteButton}
            />
          )}
        />
      </S.ListMovieWrapper>
    </Container>
  );
};

export default Favorites;
