import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Container, Title, SubTitle, CardMovie} from '../../components';
import {CinemaService} from '../../services';

const Favorites = () => {
  const [lading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    CinemaService.getAllMovies()
      .then((movies) => {
        console.log('movies', movies);
        setMovieList(movies || []);
      })
      .catch((err) => console.log('Error', err));
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

export default Favorites;
