import React, { useState } from 'react';
import NaverMapView, { Marker } from 'react-native-nmap';
import { StoreType } from '../lib/db/schema';
import TopTab from './TopTab';

export interface Map {
  storeList: Array<StoreType>;
}

const NaverMap = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const P0 = { latitude: 37.564362, longitude: 126.977011 };
  const P1 = { latitude: 37.39428145504664, longitude: 127.11273613232407 };

  const onClickMap = (event: string) => {
    setIsFocus((e) => !e);
  };

  return (
    <>
      <TopTab isFocus={isFocus} />
      <NaverMapView
        style={{ width: '100%', height: '100%' }}
        showsMyLocationButton={true}
        center={{ ...P0, zoom: 16 }}
        onTouch={() => {
          console.log('test');
        }}
        onCameraChange={(e) =>
          console.warn('onCameraChange', JSON.stringify(e))
        }
        onMapClick={(e) => onClickMap(JSON.stringify(e))}
      >
        <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')} />
        <Marker coordinate={P1} onClick={() => console.warn('onClick! p0')} />
      </NaverMapView>
    </>
  );
};

export default NaverMap;
