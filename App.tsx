import React from 'react';
import {
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashStack from './src/navigation/SplashStack';
import MainStack from './src/navigation/MainStack';

const Stack = createNativeStackNavigator();

const App = () => {
  Platform.OS === 'android'
    ? StatusBar.setBarStyle('default')
    : StatusBar.setBarStyle('dark-content');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashStack">
        <Stack.Screen
          name="SplashStack"
          component={SplashStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
