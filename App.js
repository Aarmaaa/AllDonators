import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Register';

export default function App() {
  return (
    <View style={styles.container}>

      <AppContainer/>
    
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  HomeScreen: {screen: HomeScreen},
  RegisterScreen: {screen: RegisterScreen},
})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
