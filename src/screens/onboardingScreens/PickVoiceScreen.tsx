import React from 'react';
import {View , Text } from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';

const PickVoiceScreen = () => {
  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Pick Voice Screen</Text>
        <Button text='Dismiss'/>
    </View>
  );
};

export default PickVoiceScreen;