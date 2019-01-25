import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist href="">
        <img
          src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/01/2016AdeleAlbumCovers_Pello_1_210116.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock mundial!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
