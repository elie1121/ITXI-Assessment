import React from 'react';
import {View , Text} from 'react-native';
import styles from './styles';
const SplashScreen = () => {
  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;