import React from 'react';
import {View, Text} from 'react-native';
import Padrao from '../styles/Padrao';

export default props =>
  <View>
    {
      props.numero % 2 == 0
      ? <Text>Par</Text>
      : <Text>Impar</Text>
    }        
  </View>
