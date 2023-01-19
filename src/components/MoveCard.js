//MOVE CARD COMPONENT

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { typeColors } from '../util/colors';
import Loader from './Loader';
import PokeText from './PokeText';

const MoveCard = ({ move }) => {
  //REQUEST MOVE INFO FROM API
  const [moveInfo, setMoveInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(move.move.url)
      .then((response) => response.json())
      .then((data) => {
        console.log('movedata', data);
        setMoveInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{ ...styles.container, backgroundColor: 'grey' }}>
        <Loader />
      </View>
    );
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={{ ...styles.container, backgroundColor: typeColors[moveInfo.type.name] }}>
      <PokeText style={styles.text}>{move.move.name}</PokeText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});

export default MoveCard;
