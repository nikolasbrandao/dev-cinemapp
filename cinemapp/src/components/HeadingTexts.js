import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${({theme}) => theme.primaryLight};
  font-size: 32px;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.secondaryLight};
  font-size: 16px;
`;
