import styled from 'styled-components/native';

const Loading = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.secondaryLight,
}))``;

export default Loading;
