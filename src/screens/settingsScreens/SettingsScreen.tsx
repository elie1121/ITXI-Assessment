import React from 'react';
import {View , Text } from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';

const SettingsScreen = () => {
  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Settings</Text>
        <Button text='Set Company ID'/>
        <Button text='Pick Voice'/>
    </View>
  );
};

export default SettingsScreen;