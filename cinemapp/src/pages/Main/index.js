import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {Container} from '../../components';
import * as S from './styles';
import {CinemaService} from '../../services';

const Main = () => {
  const [movie, setMovie] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleSubmitButton = async () => {
    try {
      const {data} = await CinemaService.findByTitle(movie);
      setMovieList(data.Search);
      console.log(data.Search);
    } catch (error) {
      console.log('Error');
    }
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
          <S.TextButton>Buscar</S.TextButton>
        </S.SubmitButton>
      </S.InputWrapper>
      <FlatList
        data={movieList}
        renderItem={({item}) => (
          <S.CardMovie>
            <S.CardImage ImageResizeMode="cover" source={{uri: item.Poster}} />
            <S.CardInfosWrapper>
              <S.CardTitle>{item.Title}</S.CardTitle>
              <S.CardSubtitle>Ano: {item.Year}</S.CardSubtitle>
            </S.CardInfosWrapper>
            <View>{/* Icone de favorito */}</View>
          </S.CardMovie>
        )}
      />
    </Container>
  );
};

export default Main;
