import React, {useEffect, useState} from 'react';
import {Container, Title, SubTitle} from '../../components';

const Favorites = () => {
  const [lading, setLoading] = useState(false);
  useEffect(() => {}, []);
  return (
    <Container>
      <Title>Favoritos</Title>
      <SubTitle>Seus filmes e séries do coração</SubTitle>
    </Container>
  );
};

export default Favorites;
