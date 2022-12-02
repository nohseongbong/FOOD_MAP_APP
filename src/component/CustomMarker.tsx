import React from 'react';
import { Image, View } from 'react-native';
import { Marker } from 'react-native-nmap';
import { StoreType } from '../lib/db/schema';

const CustomMarker = ({ item }) => {
  const { id, name, category, latitude, longitude, imageUrl, onClickStore } =
    item;
  return (
    <Marker
      width={50}
      height={50}
      coordinate={{ latitude, longitude }}
      onClick={() => onClickStore(item)}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}
      >
        <Image style={{ flex: 1 }} resizeMode={'contain'} />
      </View>
    </Marker>
  );
};

export default CustomMarker;
