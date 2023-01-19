//TYPE CAPSULE

import React from 'react';
import { View } from 'react-native';
import { typeColors } from '../util/colors';
import PokeText from './PokeText';

const TypeCapsule = ({ type }) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: typeColors[type?.type.name.toLowerCase()],
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1,
        marginHorizontal: 2,
      }}
    >
      <PokeText style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>{type.type.name}</PokeText>
    </View>
  );
};

export default TypeCapsule;
