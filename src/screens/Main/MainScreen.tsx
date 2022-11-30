import React, { useEffect, useState } from 'react';
import NaverMap from '../../component/NaverMap';
import { StyleSheet, View } from 'react-native';
import realm from '../../lib/db/schema';
import { StoreType } from '../../lib/db/schema';
import { api } from '../../lib/api/api';

const MainScreen = () => {
  const [data, setData] = useState<StoreType>({
    id: '1',
    name: '테스트',
    category: '음식점',
    latitude: 3,
    longitude: 4,
  });

  useEffect(() => {
    // realm.write(() => {
    //   realm.create('Store', data);
    // });
    api.getStore();
    const test = async () => {
      const res = await api.getStore();
      console.log(res, ' : get');
    };
    test();
  }, []);

  return (
    <View style={styles.contain}>
      <NaverMap />
    </View>
  );
};
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
