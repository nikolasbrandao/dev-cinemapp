import React, {useState} from 'react';
import {FlatList, Keyboard} from 'react-native';
import {Container, Title, SubTitle, CardMovie, Loading} from '../../components';
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
      console.log('data.Search', data.Search);
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
      <Title>Cinema APP</Title>
      <SubTitle>Bem-vindo ao mundo espetacular do cinema</SubTitle>
      <S.InputWrapper>
        <S.MovieInput
          placeholder="O que você busca ..."
          onChangeText={(text) => setMovie(text)}
          value={movie}
        />
        <S.SubmitButton onPress={handleSubmitButton}>
          {loading ? <Loading /> : <S.TextButton>Buscar</S.TextButton>}
        </S.SubmitButton>
      </S.InputWrapper>
      <FlatList
        data={movieList}
        renderItem={({item}) => (
          <CardMovie movie={item} onPressFavorite={handleFavoriteButton} />
        )}
      />
    </Container>
  );
};

export default Main;
