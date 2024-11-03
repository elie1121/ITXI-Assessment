import React from 'react';
import {View , Text } from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput/CustomInput';

const SetCompanyIdScreen = () => {
  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Set Company Id</Text>
        <CustomInput placeHolder='Company ID'/>
        <Button text='Enter Company ID'/>
    </View>
  );
};

export default SetCompanyIdScreen;