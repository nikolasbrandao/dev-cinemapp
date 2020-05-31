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
  const [moviePage, setMoviePage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = async (movies = []) => {
    if (loading) {
      return;
    }
    Keyboard.dismiss();
    setLoading(true);
    try {
      const {data} = await CinemaService.findByTitle(movie, moviePage);
      if (data.Error) {
        throw new Error(data.Error);
      } else {
        setMovieList([...movies, ...data.Search]);
        setMoviePage(moviePage + 1);
      }
    } catch (error) {
      console.log('Error', error);
      const newList = [];
      setMovieList(newList);
    } finally {
      setLoading(false);
      setLoadingButton(false);
    }
  };

  const handleSubmitButton = async () => {
    setLoadingButton(true);
    await handleSearch();
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

  const ListFooter = () => loading && <Loading />;

  return (
    <Container>
      <Title>Cinema APP</Title>
      <SubTitle>Bem-vindo ao mundo espetacular do cinema</SubTitle>
      <S.InputWrapper>
        <S.MovieInput
          placeholder="O que você busca ..."
          onChangeText={(text) => setMovie(text)}
          value={movie}
          onSubmitEditing={handleSubmitButton}
        />
        <S.SubmitButton onPress={handleSubmitButton}>
          {loadingButton ? <Loading /> : <S.TextButton>Buscar</S.TextButton>}
        </S.SubmitButton>
      </S.InputWrapper>
      <FlatList
        data={movieList}
        keyExtractor={(item) => item.imdbID + Math.random()}
        renderItem={({item}) => (
          <CardMovie movie={item} onPressFavorite={handleFavoriteButton} />
        )}
        onEndReachedThreshold={0.3}
        onEndReached={() => handleSearch(movieList)}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListFooter}
      />
    </Container>
  );
};

export default Main;
