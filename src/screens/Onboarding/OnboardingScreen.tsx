import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet, Image, Platform } from 'react-native';
import { RootStackParamList } from '../../util/rootStackParams';
import {
  requestMultiple,
  PERMISSIONS,
  checkMultiple,
  check,
} from 'react-native-permissions';

type mainScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainStack'
>;

const OnboardingScreen = () => {
  const navigation = useNavigation<mainScreenProp>();
  const [isPermission, setPermission] = useState<Boolean>(false);

  // iOS 접근권한 요청
  const iOSRequest = async () => {
    const permissionArr = [
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      PERMISSIONS.IOS.PHOTO_LIBRARY,
      PERMISSIONS.IOS.CAMERA,
    ];

    await requestMultiple(permissionArr).then((response) => {
      console.log('MULTIPLE REQUEST RESPONSE : ', response);
      const state = permissionArr.findIndex((permission) => {
        return permission[1] === 'denied' || permission[1] === 'blocked';
      });
      setPermission(state === -1);
      console.log(state, ' : 권한 상태 ios');
    });
  };

  // AOS 접근권한 요청
  const androidRequest = async () => {
    const permissionArr = [
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ];
    await requestMultiple(permissionArr).then((response) => {
      const permissionArr = Object.entries(response);
      const state = permissionArr.findIndex((permission) => {
        return permission[1] === 'denied' || permission[1] === 'blocked';
      });
      setPermission(state === -1);
      console.log(state, ' : 권한 상태 android');
    });
  };

  const permissionRequest = () => {
    if (Platform.OS === 'android') {
      androidRequest();
    } else {
      iOSRequest();
    }
  };

  useEffect(() => {
    permissionRequest();
  }, []);

  useEffect(() => {
    if (isPermission) {
      navigation.navigate('MainStack');
    }
  }, [isPermission]);

  return <View style={styles.contain}></View>;
};

const styles = StyleSheet.create({
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
  },
});

export default OnboardingScreen;
