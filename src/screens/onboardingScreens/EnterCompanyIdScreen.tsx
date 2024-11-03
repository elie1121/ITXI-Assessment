import React from 'react';
import {View , Text } from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useNavigation,useRoute} from '@react-navigation/native';

const EnterCompanyIdScreen = () => {
  
  const navigation = useNavigation();
  const route = useRoute();
  
  const {insideOnboardingStack} = route?.params || false;

  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Enter company Id</Text>
        <CustomInput placeHolder='Company ID'/>
        {insideOnboardingStack? // to only show this button in the onboarding navigator
          <Button text='Continue' onPress={()=>navigation.push("PickVoiceScreen")}/>
          :"" 
        }
    </View>
  );
};

export default EnterCompanyIdScreen;