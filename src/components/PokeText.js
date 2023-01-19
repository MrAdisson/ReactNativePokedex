//TEXT COMPONENT WITH CUSTOM FONT

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Rest of the import statements
import { useFonts } from 'expo-font';

const PokeText = ({ children, style }) => {
  const [fontsLoaded] = useFonts({
    pokemon: require('../../assets/fonts/pokemonClassic.ttf'),
  });
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'pokemon',
    fontSize: 14,
  },
});

export default PokeText;
