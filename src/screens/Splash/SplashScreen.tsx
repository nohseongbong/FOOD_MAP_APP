import React from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet, Image } from 'react-native';
import { RootStackParamList } from '../../util/rootStackParams';

type mainScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainStack'
>;

const SplashScreen = () => {
  const navigation = useNavigation<mainScreenProp>();

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        navigation.navigate('MainStack');
      }, 2000);
    }, [navigation]),
  );
  return (
    <View style={styles.contain}>
      <Image
        source={require('../../assets/images/splash_logo.png')}
        resizeMode={'contain'}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFEEEE',
  },
  logo: {
    width: 150,
  },
});

export default SplashScreen;
