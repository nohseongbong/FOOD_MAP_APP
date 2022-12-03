import React, { useEffect } from 'react';
import { Image, Platform, View } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { Marker } from 'react-native-nmap';
import { StoreType } from '../lib/db/schema';
import img from '../assets/images/splash_logo.png';

const CustomMarker = ({ item }) => {
  const { id, name, category, latitude, longitude, imageUrl, onClickStore } =
    item;

  const getPhotos = async () => {
    try {
      const { edges } = await CameraRoll.getPhotos({
        first: 100,
      });
      console.log('📸', edges);
    } catch (error) {
      console.log('getPhoto', error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <Marker
      width={40}
      height={50}
      coordinate={{ latitude, longitude }}
      onClick={() => onClickStore(item)}
      // image={{ uri: 'https://via.placeholder.com/150/24f355' }}
      image={img}
    />
  );
};

export default CustomMarker;
