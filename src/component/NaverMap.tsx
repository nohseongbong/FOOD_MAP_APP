import React, { useState, useRef, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import NaverMapView, { Marker } from 'react-native-nmap';
import { StoreType } from '../lib/db/schema';
import { mapModel } from '../lib/model/mapModel';
import { observer } from 'mobx-react-lite';
import { api } from '../lib/api/api';
import CustomMarker from './CustomMarker';

export interface Map {
  storeList: Array<StoreType>;
}
enum MapType {
  Basic = 0,
  Navi = 1,
  Satellite = 2,
  Hybrid = 3,
  Terrain = 4,
}

const initCenter = {
  latitude: 37.39428145504664,
  longitude: 127.11273613232407,
  zoom: 16,
};

export interface MarkerType extends StoreType {
  onClickStore: () => void;
}

const NaverMap = observer(() => {
  const [cameraCenter, setCameraCenter] = useState(initCenter);
  const [storeList, setStoreList] = useState<MarkerType[]>([]);

  // const P0 = { latitude: 37.564362, longitude: 126.977011 };
  // const P1 = { latitude: 37.39428145504664, longitude: 127.11273613232407 };

  const onClickMap = () => {
    mapModel.handleIsFocus();
  };

  const handleCameraChange = (test) => {
    setCameraCenter({ ...test });
  };

  const onClickStore = (storeInfo: MarkerType) => {
    console.log(storeInfo, '스토어 눌림');
  };

  const getStoreList = async () => {
    const res = await JSON.stringify(api.getStore());
    const response = JSON.parse(res);
    const list = response.map((i: StoreType) => {
      return {
        ...i,
        onClickStore,
      };
    });
    setStoreList(list);
  };

  useEffect(() => {
    getStoreList();
  }, []);

  return (
    <>
      <NaverMapView
        style={{ width: '100%', height: '100%' }}
        showsMyLocationButton={mapModel.isFocusMap}
        zoomControl={mapModel.isFocusMap}
        center={cameraCenter}
        mapType={MapType.Basic}
        onTouch={() => {}}
        onCameraChange={() => setCameraCenter({ ...cameraCenter })}
        onMapClick={onClickMap}
      >
        {storeList.map((item, index) => {
          return <CustomMarker key={`key=${index}_${item.id}`} item={item} />;
        })}
      </NaverMapView>
    </>
  );
});

export default NaverMap;
