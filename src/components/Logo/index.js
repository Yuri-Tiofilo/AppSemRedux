import React from 'react';
// import PropTypes from 'prop-types';
// import { ImageBackground } from 'react-native';
import { Container, Image } from './styles';
import logo from '../../../assets/imagem/Imagem1.png';

export default function Logo() {
  return (
    <Container>
      <Image source={logo} resizeMode="center" />
    </Container>
  );
}
