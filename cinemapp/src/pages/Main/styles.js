import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${({theme}) => theme.primaryLight};
  font-size: 32px;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.secondaryLight};
  font-size: 16px;
`;

export const InputWrapper = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`;

export const MovieInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.primaryBlue,
}))`
  width: 70%;
  font-size: 16px;
  border: 1px solid ${({theme}) => theme.thirdBlue};
  color: ${({theme}) => theme.primaryBlue};
  background-color: ${({theme}) => theme.secondaryLight};
  border-radius: 4px;
  padding: 0 6px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 25%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.secondaryBlue};
  padding: 8px;
  border: 1px solid ${({theme}) => theme.secondaryBlue};
  border-radius: 2px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.primaryLight};
`;

export const CardMovie = styled.View`
  flex-direction: row;
  padding: 10px;
  height: 100px;
  background-color: ${({theme}) => theme.primaryDark};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const CardImage = styled.Image`
  height: 80px;
  width: 55px;
`;

export const CardInfosWrapper = styled.View`
  flex: 1;
  height: 100%;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 8px 10px;
`;

export const CardTitle = styled.Text`
  color: ${({theme}) => theme.secondaryLight};
  font-size: 16px;
`;

export const CardSubtitle = styled.Text`
  color: ${({theme}) => theme.secondaryLight};
  font-size: 14px;
`;

export const Loading = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.secondaryLight,
}))``;

export const StarIcon = styled(Icon).attrs(({active, theme}) => ({
  size: 24,
  name: active ? 'ios-star' : 'ios-star-outline',
  color: theme.primaryOrange,
}))``;
