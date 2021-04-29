import { Button, StyleSheet, Text, View } from 'react-native';
import {
  ConfigurationStackScreen,
  MoviesStackScreen,
  SearchStackScreen
} from './screens';
import { ROUTES, TABS } from './routes';
import { blue, darkBlue, pink, white } from '../utils/colors';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { Host } from 'react-native-portalize';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';

enableScreens();

const defaultNavigationOptions = {
  headerTintColor: darkBlue,
  headerStyle: {
    backgroundColor: white
  }
};

const Tab = createBottomTabNavigator();
const TabsConfig = {
  tabBarOptions: {
    activeTintColor: pink,
    inactiveTintColor: blue,
    labelStyle: {
      margin: 0,
      padding: 1
    },
    style: {
      backgroundColor: white
    }
  }
};

const AppNavigator = () => (
  <NavigationContainer>
    <Host>
      <Tab.Navigator initialRouteName={ROUTES.MOVIE_LIST} {...TabsConfig}>
        <Tab.Screen
          name={TABS.HOME}
          component={MoviesStackScreen}
          options={{
            ...defaultNavigationOptions,
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={20} color={color} />
            )
          }}
        />
        <Tab.Screen
          name={TABS.SEARCH}
          component={SearchStackScreen}
          options={{
            ...defaultNavigationOptions,
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={20} color={color} />
            )
          }}
        />
        <Tab.Screen
          name={TABS.CONFIGURATION}
          component={ConfigurationStackScreen}
          options={{
            ...defaultNavigationOptions,
            tabBarIcon: ({ color }) => (
              <Feather name="menu" size={20} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </Host>
  </NavigationContainer>
);

export default AppNavigator;
