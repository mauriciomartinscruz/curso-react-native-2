import React from 'react';
import {Text} from 'react-native';
import Padrao from '../styles/Padrao';

export const Inverter = props => {
  const inv = props.texto.split('').reverse().join('');
  return <Text style={Padrao.ex}>{inv}</Text>;
}
