import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from '../pages/Main';
import Favorites from '../pages/Favorites';

const Tab = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Buscar" component={Main} />
      <Tab.Screen name="Favoritos" component={Favorites} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;
