import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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
  width: 56px;
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

const NotFoundIcon = styled(MCIcon).attrs(({theme}) => ({
  size: 40,
  name: 'image-off',
  color: theme.secondaryLight,
}))`
  padding: 0 8px;
`;

const CardMovie = ({movie, onPressFavorite}) => {
  return (
    <CardMovieWrapper>
      {movie.Poster !== 'N/A' ? (
        <CardImage ImageResizeMode="cover" source={{uri: movie.Poster}} />
      ) : (
        <NotFoundIcon />
      )}
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
