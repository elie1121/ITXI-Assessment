import React from 'react';
import {View , Text } from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Settings</Text>
        <Button text='Set Company ID' onPress={()=>navigation.push("SetCompanyIdScreen")}/>
        <Button text='Pick Voice' onPress={()=>navigation.push("PickVoiceScreen")}/>
    </View>
  );
};

export default SettingsScreen;