import React from 'react';
import { Image } from 'react-native';

const Pokeball = ({ width = 30, height = 30, style = {} }) => {
  return <Image style={{ ...style, width: width, height: height }} source={require('../../assets/pokeball.png')} />;
};

export default Pokeball;
