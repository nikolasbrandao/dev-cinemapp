import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../pages/Main';
import Favorites from '../pages/Favorites';
import {theme} from '../assets/theme';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: `${theme.primaryDark}`,
    borderTopWidth: 0,
  },
});

const Routes = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: `${theme.primaryOrange}`,
        inactiveTintColor: `${theme.secondaryLight}`,
        style: styles.safeArea,
      }}
      style={styles.safeArea}>
      <Tab.Screen
        name="Buscar"
        component={Main}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="ios-search"
              color={focused ? theme.primaryOrange : theme.secondaryLight}
              size={16}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'ios-star' : 'ios-star-outline'}
              color={focused ? theme.primaryOrange : theme.secondaryLight}
              size={16}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;
