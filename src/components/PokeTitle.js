//TEXT COMPONENT WITH CUSTOM FONT

import React from 'react';
import { View } from 'react-native';
import { colors } from '../util/colors';
import { spacing } from '../util/spacing';
import Pokeball from './Pokeball';
// Rest of the import statements
import PokeText from './PokeText';

const PokeTitle = ({ title, style = {} }) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderTopColor: colors.defaultBlue,
        borderBottomColor: colors.defaultBlue,
        backgroundColor: colors.darkBlue,
        ...style,
      }}
    >
      <Pokeball style={{ margin: spacing.l }} />
      <PokeText style={{ marginLeft: spacing.m, color: 'white' }}>{title.toUpperCase()}</PokeText>
    </View>
  );
};

export default PokeTitle;
