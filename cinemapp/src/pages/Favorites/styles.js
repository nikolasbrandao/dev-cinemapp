import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ListMovieWrapper = styled.View`
  flex: 1;
  margin-top: 16px;
`;

export const EmptyListWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyIcon = styled(MDIcon).attrs(({theme}) => ({
  size: 100,
  name: 'filmstrip-off',
  color: theme.secondaryLight,
}))`
  margin-bottom: 16px;
`;

export const EmptyListMessageHead = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.secondaryLight};
  text-align: center;
  margin-bottom: 16px;
`;

export const EmptyListMessageBody = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.primaryLight};
  text-align: center;
`;
