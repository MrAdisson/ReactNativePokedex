// POKEMON STAT COMPONENT :

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../util/colors';
import PokeText from './PokeText';
import Separator from './Separator';

//FUNCTION THAT CONVERT STRING attack to Atk, special-attack to SpATk, special-defense to SpDef, defense to Def, hp to HP, speed to Spd using switch case
const convertStatName = (name) => {
  switch (name) {
    case 'attack':
      return 'Atk';
    case 'special-attack':
      return 'SpAtk';
    case 'special-defense':
      return 'SpDef';
    case 'defense':
      return 'Def';
    case 'hp':
      return 'HP';
    case 'speed':
      return 'Spd';
    default:
      return name;
  }
};

const PokemonStat = ({ stats }) => {
  return (
    <View style={{ padding: 40 }}>
      <View style={styles.statContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <PokeText style={styles.item}>Base Stats</PokeText>
          <PokeText style={styles.item}>Value</PokeText>
          <PokeText style={styles.item}>EV</PokeText>
        </View>
        <Separator color='white' />
        <View style={{ ...styles.statDetailContainer, width: '100%' }}>
          {stats?.map((stat) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <PokeText style={styles.statName}>{convertStatName(stat?.stat.name)}</PokeText>
              <PokeText style={styles.statValue}>{stat?.base_stat}</PokeText>
              <PokeText style={{ ...styles.statValue, color: stat?.effort > 0 ? colors.gold : 'white' }}>{stat?.effort}</PokeText>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default PokemonStat;

const styles = StyleSheet.create({
  statContainer: {
    backgroundColor: colors.defaultBlue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    width: '100%',
  },

  statDetailContainer: {
    padding: 10,
    borderRadius: 15,
    width: '100%',
  },
  item: {
    flex: 1,
    padding: 10,
    color: 'white',
    textAlign: 'center',
  },

  statName: { color: 'white', flex: 1, textAlign: 'left' },
  statValue: { color: 'white', flex: 1, textAlign: 'center' },
});
