//LOADER COMPONENT USING REACT-SPINNER-LOADER

import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
// import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color='black' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
