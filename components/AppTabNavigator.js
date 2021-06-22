import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ExchangeScreen from '../screens/Exchange'
import HomeScreen from '../screens/HomeScreen'

export const AppTabNavigator = createBottomTabNavigator({
    Exchange:{screen:ExchangeScreen},
    HomeScreen:{screen:HomeScreen}
  })