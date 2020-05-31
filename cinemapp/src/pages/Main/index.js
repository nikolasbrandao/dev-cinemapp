import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {FlatList, Keyboard} from 'react-native';
import {Container, Title, SubTitle, CardMovie, Loading} from '../../components';
import * as S from './styles';
import {CinemaService} from '../../services';
import {addMovie, removeMovie} from '../../redux/cinemaApp';

const Main = () => {
  const [movie, setMovie] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitButton = async () => {
    if (loading) {
      return;
    }
    Keyboard.dismiss();
    setLoading(true);
    try {
      const {data} = await CinemaService.findByTitle(movie);
      setMovieList(data.Search);
    } catch (error) {
      console.log('Error');
    } finally {
      setLoading(false);
    }
  };

  const handleFavoriteButton = (item) => {
    const newListMovie = movieList.map((movieItem) => {
      if (movieItem.imdbID === item.imdbID) {
        const newMovie = {...movieItem, Favorite: !movieItem.Favorite};
        if (item.Favorite) {
          dispatch(removeMovie(newMovie.imdbID));
        } else {
          dispatch(addMovie(newMovie));
        }
        return newMovie;
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
          <CardMovie
            key={item.imdbID}
            movie={item}
            onPressFavorite={handleFavoriteButton}
          />
        )}
      />
    </Container>
  );
};

export default Main;
