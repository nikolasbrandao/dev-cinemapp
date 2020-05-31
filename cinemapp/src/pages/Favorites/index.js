import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import {Container, Title, SubTitle, CardMovie} from '../../components';
import {addMovie, removeMovie} from '../../redux/cinemaApp';
import * as S from './styles';

const Favorites = () => {
  const movieList = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  const handleFavoriteButton = (item) => {
    const newMovie = {...item, Favorite: !item.Favorite};
    if (newMovie.Favorite) {
      dispatch(addMovie(newMovie));
    } else {
      dispatch(removeMovie(newMovie.imdbID));
    }
  };
  return (
    <Container>
      <Title>Favoritos</Title>
      <SubTitle>Seus filmes e séries do coração</SubTitle>
      <S.ListMovieWrapper>
        <FlatList
          data={movieList}
          renderItem={({item: {movie}}) => (
            <CardMovie
              key={movie.imdbID}
              movie={movie}
              onPressFavorite={handleFavoriteButton}
              showsVerticalScrollIndicator={false}
            />
          )}
        />
      </S.ListMovieWrapper>
    </Container>
  );
};

export default Favorites;
