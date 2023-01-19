//HOME SCREEN POKEDEX PAGE

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { spacing } from '../../util/spacing';
import Pokeball from '../Pokeball';
import PokemonListCard from '../PokemonListCard';
import PokeText from '../PokeText';

const HomeScreen = () => {
  const [pokedex, setPokedex] = useState([]);
  const fullPokedexRef = useRef(pokedex);
  const textInputRef = useRef('');
  const next = useRef('');
  const limit = 905;

  const getPokemon = async (req) => {
    const response = await fetch(req);
    const data = await response.json();
    fullPokedexRef.current = data.results;
    setPokedex(pokedex.concat(data.results));
    next.current = data.next;
  };
  const searchPokemon = (value) => {
    if (value.length > 0) {
      const filteredPokemon = pokedex.filter((pokemon) => {
        return pokemon.name.includes(value.toLowerCase());
      });
      setPokedex(filteredPokemon);
    } else {
      setPokedex(fullPokedexRef.current);
    }
  };

  useEffect(() => {
    getPokemon(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  }, []);

  const renderItem = useCallback(({ item }) => <PokemonListCard pokemon={item} />, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pokeball style={{ margin: 10 }} />
        <PokeText style={{ fontSize: 24, marginVertical: spacing.m }}>POKEDEX</PokeText>
        <Pokeball style={{ margin: 10 }} />
      </View>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <TextInput style={styles.input} placeholder='Search Pokemon' onChangeText={(value) => searchPokemon(value)} ref={textInputRef} />
          {/* CROSS BUTTON TO EMPTY TEXT INPUT VALUE */}
        </View>
        <TouchableOpacity
          onPress={() => {
            textInputRef.current.clear();
            setPokedex(fullPokedexRef.current);
          }}
          style={{ backgroundColor: 'white', marginHorizontal: 5, padding: 10, borderRadius: 10 }}
        >
          <Text>X</Text>
        </TouchableOpacity>
      </View>
      <FlatList style={styles.flatList} data={pokedex} renderItem={renderItem} keyExtractor={(item) => item?.name} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: 'red',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  image: {
    width: 100,
    height: 100,
  },
  flatList: {
    width: '100%',
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 10,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchBarContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
