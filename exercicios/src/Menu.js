import React from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Simples from './components/Simples';
import {Inverter} from './components/Multi';
import Contador from './components/Contador';

export default createDrawerNavigator(
  {
    Contador: {
      screen: () => <Contador />,
    },
    Inverter: {
      screen: () => <Inverter texto="React Nativee" />,
    },
    Simples: {
      screen: () => <Simples texto="Afdfsdfsd" />,
    },
  },
  {drawerWidth: 300},
);
