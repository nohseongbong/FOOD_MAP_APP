import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import NaverMap from './src/componect/NaverMap';

const App = () => {
  return (
    <SafeAreaView>
      <NaverMap />
    </SafeAreaView>
  );
};

export default App;
