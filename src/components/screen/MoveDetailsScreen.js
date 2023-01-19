//MOVE DETAILS SCREEN

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors, typeColors } from '../../util/colors';
import { spacing } from '../../util/spacing';
import Loader from '../Loader';
import MoveCard from '../MoveCard';
import PokeText from '../PokeText';

const MoveDetailsScreen = ({ route, navigation }) => {
  const moves = route.params.moveList;
  const pokemon = route.params.pokemon;
  console.log(moves);

  return (
    <View syle={{ flex: 1 }}>
      <PokeText style={{ textAlign: 'center', paddingVertical: spacing.l, backgroundColor: typeColors[pokemon.types[0].type.name] }}>
        {pokemon.name} moves
      </PokeText>
      <FlatList data={moves} renderItem={({ item }) => <MoveCard move={item} key={item.name} />} keyExtractor={(item) => item.name} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moveCard: {
    backgroundColor: colors.white,

    borderRadius: spacing.md,
    padding: spacing.md,
    margin: spacing.md,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  image: {
    width: 150,
    height: 150,
  },
  item: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
});

export default MoveDetailsScreen;
