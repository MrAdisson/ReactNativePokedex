//POKEMON DETAILS PAGE POKEDEX :

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors, typeColors } from '../../util/colors';
import { spacing } from '../../util/spacing';
import Loader from '../Loader';
import Pokeball from '../Pokeball';
import PokemonStat from '../PokemonStat';
import PokeText from '../PokeText';
import PokeTitle from '../PokeTitle';
import Separator from '../Separator';
import TypeCapsule from '../TypeCapsule';

const DetailsScreen = ({ route, navigation }) => {
  const [pokemon, setPokemon] = useState();
  const [pokemonDetails, setPokemonDetails] = useState();

  const [isShiny, setIsShiny] = useState(false);
  const pokemonName = route.params.name.charAt(0).toUpperCase() + route.params.name.slice(1);

  const [isClosedPokemonCard, setIsClosedPokemonCard] = useState(false);
  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
    const data = await response.json();
    setPokemon(data);
    console.log(data);
  };

  const getPokemonDetails = async () => {
    if (!pokemon) return;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
    const data = await response.json();
    setPokemonDetails(data);
    console.log(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);
  useEffect(() => {
    getPokemonDetails();
  }, [pokemon]);

  console.log(pokemon);

  return (
    <>
      {pokemonDetails ? (
        <>
          <View style={{ ...styles.container, backgroundColor: typeColors[pokemon.types[0].type.name] }}>
            {!isClosedPokemonCard && (
              <View style={{ ...styles.pokemonCard }}>
                <TouchableOpacity
                  style={{ ...styles.imageContainer, backgroundColor: typeColors[pokemon.types[0].type.name] }}
                  onPress={() => setIsShiny(!isShiny)}
                >
                  <Image style={styles.image} source={{ uri: isShiny ? pokemon?.sprites?.front_shiny : pokemon?.sprites?.front_default }} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                  {pokemon?.types?.map((type) => (
                    <TypeCapsule type={type} />
                  ))}
                </View>
                <PokeText style={styles.item}>{pokemonName}</PokeText>
                {isShiny && <PokeText style={{ ...styles.item, color: colors.gold }}>{'(Sh)'}</PokeText>}
              </View>
            )}
            <TouchableOpacity onPress={() => setIsClosedPokemonCard(!isClosedPokemonCard)}>
              <PokeText style={styles.item}>{isClosedPokemonCard ? '(+)' : '(-)'}</PokeText>
            </TouchableOpacity>

            <Separator />
            <ScrollView bounces style={{ width: '100%', backgroundColor: 'white', padding: 0 }} contentContainerStyle={{}}>
              <PokeTitle title='statistics' />
              <PokemonStat stats={pokemon?.stats} />
              <PokeTitle title='abilities' />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <PokeText style={styles.item}>Abilities</PokeText>
                <PokeText style={styles.item}>Hidden</PokeText>
              </View>

              {pokemon?.abilities?.map((ability) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                  <PokeText style={styles.item}>{ability?.ability.name}</PokeText>
                  <PokeText style={styles.item}>{ability?.is_hidden ? 'Yes' : 'No'}</PokeText>
                </View>
              ))}
              <PokeTitle title='moves' />
              <TouchableOpacity onPress={() => navigation.navigate('MoveDetails', { moveList: pokemon?.moves, pokemon: pokemon })}>
                <PokeText style={styles.item}>Moves</PokeText>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </>
      ) : (
        <View style={styles.container}>
          <Loader />
        </View>
      )}
      <View
        style={{
          backgroundColor: colors.darkBlue,
          borderTopColor: 'black',
          borderTopWidth: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Pokeball />
          <PokeText style={styles.item}>Go Back</PokeText>
          <Pokeball />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pokemonCard: {
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 40,
    backgroundColor: 'white',
    marginVertical: spacing.l,
  },
  item: {
    padding: 5,
  },
  image: {
    width: 150,
    height: 150,
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderColor: 'white',
  },

  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    margin: spacing.m,
    flexDirection: 'row',
  },
});

export default DetailsScreen;
