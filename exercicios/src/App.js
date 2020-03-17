import React from 'react';
import {View, StyleSheet} from 'react-native';

import Simples from './components/Simples';
import {Inverter} from './components/Multi';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="assdf" />
        <Inverter texto="Economize BR" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 40,
  },
});
