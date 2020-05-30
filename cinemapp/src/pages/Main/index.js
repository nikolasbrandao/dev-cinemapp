import React, {useState} from 'react';

import {Container} from '../../components';
import * as S from './styles';
import {CinemaService} from '../../services';

const Main = () => {
  const [movie, setMovie] = useState('');

  const handleSubmitButton = async () => {
    try {
      const {data} = await CinemaService.findByTitle(movie);
      console.log('data', data);
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
    </Container>
  );
};

export default Main;
