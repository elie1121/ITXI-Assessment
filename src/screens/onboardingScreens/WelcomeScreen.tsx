import React from 'react';
import {View , Text} from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';

const WelcomeScreen = () => {
  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Welcome Screen</Text>
        <Button text="Get Started"/>
    </View>
  );
};

export default WelcomeScreen;