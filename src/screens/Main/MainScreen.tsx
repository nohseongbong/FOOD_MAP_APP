import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StoreType } from '../../lib/db/schema';
import { api } from '../../lib/api/api';
import NaverMap from '../../component/NaverMap';
import realm from '../../lib/db/schema';
import TopTab from '../../component/TopTab';

const MainScreen = observer(() => {
  const [data, setData] = useState<StoreType>({
    id: 0,
    name: '가게 이름',
    category: '한식',
    latitude: 37.564362,
    longitude: 126.977011,
    imageUrl: '',
  });

  useEffect(() => {
    // realm.write(() => {
    //   realm.create('Store', data);
    // });
    const test = async () => {
      const res = await api.getStore();
      console.log(res, ' : get');
    };
    test();
  }, []);

  return (
    <View style={styles.contain}>
      <TopTab />
      <NaverMap />
    </View>
  );
});
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
