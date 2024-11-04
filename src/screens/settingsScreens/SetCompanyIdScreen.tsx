import React from 'react';
import {View , Text } from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useNavigation,useRoute} from '@react-navigation/native';

const SetCompanyIdScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {insideSettingsStack} = route?.params || false;

  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Set Company Id</Text>
        <CustomInput placeHolder='Company ID'/>
        {insideSettingsStack?
            <Button text='Enter Company ID'  onPress={()=>navigation.push("EnterCompanyIdScreen")}/>
        :''}

    </View>
  );
};

export default SetCompanyIdScreen;