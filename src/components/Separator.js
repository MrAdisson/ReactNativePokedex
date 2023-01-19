//SIMPLE SEPARATOR 100% WIDTH BLACK COMPONENT :

import React from 'react';
import { View } from 'react-native';

const Separator = ({ color = 'black' }) => {
  return <View style={{ width: '100%', height: 1, backgroundColor: color }} />;
};

export default Separator;
