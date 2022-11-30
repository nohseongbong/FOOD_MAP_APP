import { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import COLOR from '../style/palette';

type TabPropsType = {
  isFocus: boolean;
};

const statusBarHt =
  Platform.OS === 'ios'
    ? getStatusBarHeight(true) + 15
    : StatusBar.currentHeight;

const TopTab = ({ isFocus }: TabPropsType) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const animationStyles = {
    opacity: animation,
  };
  useEffect(() => {
    changeMapFocus();
  }, [isFocus]);

  const changeMapFocus = () => {
    if (isFocus) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      return;
    }
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  return (
    <Animated.View style={[styles.contain, animationStyles]}>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tab_title}>검색</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tab_title}>카테고리</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tab_title}>즐겨찾기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tab_title}>설정</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  contain: {
    width: '95%',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: statusBarHt,
    backgroundColor: '#fff',
    zIndex: 100,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  tab: {
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tab_title: {
    fontSize: 15,
    color: COLOR.TEXT_COLOR,
  },
});

export default TopTab;
