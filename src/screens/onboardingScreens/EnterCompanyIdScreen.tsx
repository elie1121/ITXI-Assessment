import React from 'react';
import {View , Text } from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput/CustomInput';

const EnterCompanyIdScreen = () => {
  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Enter company Id</Text>
        <CustomInput placeHolder='Company ID'/>
        <Button text='Continue'/>
    </View>
  );
};

export default EnterCompanyIdScreen;