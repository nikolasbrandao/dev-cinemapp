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

  const EmptyList = () => (
    <S.EmptyListWrapper>
      <S.EmptyIcon />
      <S.EmptyListMessageHead>
        Não encontramos nenhum filme favoritado.
      </S.EmptyListMessageHead>
      <S.EmptyListMessageBody>
        Pesquise e adicione filmes, mantenha salva sua lista de filmes
        prediletos.
      </S.EmptyListMessageBody>
    </S.EmptyListWrapper>
  );

  console.log('MovieList', movieList);
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
          ListEmptyComponent={EmptyList}
          contentContainerStyle={{flexGrow: 1}}
        />
      </S.ListMovieWrapper>
    </Container>
  );
};

export default Favorites;
