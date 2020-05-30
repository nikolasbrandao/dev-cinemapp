import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const CardMovieWrapper = styled.View`
  flex-direction: row;
  padding: 10px;
  height: 100px;
  background-color: ${({theme}) => theme.primaryDark};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const CardImage = styled.Image`
  height: 80px;
  width: 55px;
`;

const CardInfosWrapper = styled.View`
  flex: 1;
  height: 100%;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 8px 10px;
`;

const CardTitle = styled.Text`
  color: ${({theme}) => theme.secondaryLight};
  font-size: 16px;
`;

const CardSubtitle = styled.Text`
  color: ${({theme}) => theme.secondaryLight};
  font-size: 14px;
`;

const StarIcon = styled(Icon).attrs(({active, theme}) => ({
  size: 24,
  name: active ? 'ios-star' : 'ios-star-outline',
  color: theme.primaryOrange,
}))``;

const CardMovie = ({movie, onPressFavorite}) => {
  return (
    <CardMovieWrapper key={movie.imdbID}>
      <CardImage ImageResizeMode="cover" source={{uri: movie.Poster}} />
      <CardInfosWrapper>
        <CardTitle>{movie.Title}</CardTitle>
        <CardSubtitle>Ano: {movie.Year}</CardSubtitle>
      </CardInfosWrapper>
      <TouchableOpacity onPress={() => onPressFavorite(movie)}>
        <StarIcon active={movie.Favorite} />
      </TouchableOpacity>
    </CardMovieWrapper>
  );
};

export default CardMovie;
