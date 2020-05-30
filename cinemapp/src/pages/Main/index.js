import React, {useState} from 'react';
import {FlatList, Keyboard, TouchableOpacity} from 'react-native';
import {Container} from '../../components';
import * as S from './styles';
import {CinemaService} from '../../services';

const Main = () => {
  const [movie, setMovie] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmitButton = async () => {
    if (loading) {
      return;
    }
    Keyboard.dismiss();
    setLoading(true);
    try {
      const {data} = await CinemaService.findByTitle(movie);
      setMovieList(data.Search);
      console.log(data.Search);
    } catch (error) {
      console.log('Error');
    } finally {
      setLoading(false);
    }
  };

  const handleFavoriteButton = (item) => {
    // persiste item
    const newListMovie = movieList.map((movieItem) => {
      if (movieItem.imdbID === item.imdbID) {
        return {...movieItem, Favorite: !movieItem.Favorite};
      }
      return movieItem;
    });
    setMovieList(newListMovie);
  };

  return (
    <Container>
      <S.Title>Cinema APP</S.Title>
      <S.SubTitle>Bem-vindo ao mundo espetacular do cinema</S.SubTitle>
      <S.InputWrapper>
        <S.MovieInput
          placeholder="O que você busca ..."
          onChangeText={(text) => setMovie(text)}
          value={movie}
        />
        <S.SubmitButton onPress={handleSubmitButton}>
          {loading ? <S.Loading /> : <S.TextButton>Buscar</S.TextButton>}
        </S.SubmitButton>
      </S.InputWrapper>
      <FlatList
        data={movieList}
        renderItem={({item}) => (
          <S.CardMovie key={item.imdbID}>
            <S.CardImage ImageResizeMode="cover" source={{uri: item.Poster}} />
            <S.CardInfosWrapper>
              <S.CardTitle>{item.Title}</S.CardTitle>
              <S.CardSubtitle>Ano: {item.Year}</S.CardSubtitle>
            </S.CardInfosWrapper>
            <TouchableOpacity onPress={() => handleFavoriteButton(item)}>
              <S.StarIcon active={item.Favorite} />
            </TouchableOpacity>
          </S.CardMovie>
        )}
      />
    </Container>
  );
};

export default Main;
