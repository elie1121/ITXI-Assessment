import React from 'react';
import {View , Text } from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';

const EnterCompanyIdScreen = ({insideOnboardingStack=false}) => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Enter company Id</Text>
        <CustomInput placeHolder='Company ID'/>
        {insideOnboardingStack?? // to only show this button in the onboarding navigator
          <Button text='Continue' onPress={()=>navigation.push("PickVoiceScreen")}/> 
        }
    </View>
  );
};

export default EnterCompanyIdScreen;