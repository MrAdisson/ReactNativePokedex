//POKEMON LIST CARD FOR FLAT LIST :

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PokeText from './PokeText';
import Pokeball from './Pokeball';
import { spacing } from '../util/spacing';

const PokemonListCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState();

  const navigation = useNavigation();

  const getPokemon = async () => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    setPokemonData(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Details', {
          name: pokemonData.name,
        })
      }
    >
      <View style={styles.pokemonTextContainer}>
        {pokemonData && (
          <View style={{ flexDirection: 'row' }}>
            <Pokeball style={{ marginRight: spacing.m }} />
            <PokeText style={styles.pokemonText}>
              #{pokemonData?.id} - {pokemonData?.name.charAt(0).toUpperCase() + pokemonData?.name.slice(1)}
            </PokeText>
          </View>
        )}
      </View>
      <Image style={styles.image} source={{ uri: pokemonData?.sprites?.front_default }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
  },
  pokemonTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },

  pokemonText: {},
  image: {
    width: 80,
    height: 80,
  },
});

export default PokemonListCard;
