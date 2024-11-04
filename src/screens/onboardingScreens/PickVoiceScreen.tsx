import React from 'react';
import {View , Text } from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';
import {useNavigation,useRoute} from '@react-navigation/native';

const PickVoiceScreen = () => {

  const navigation = useNavigation();

  const route = useRoute();

  const {insideOnboardingStack} = route?.params || false;

  const handleDismiss = () => {
    if(insideOnboardingStack){
        navigation.reset({
            index: 0, 
            routes: [{ name: 'MainScreen' }], 
        })
    }else{
        navigation.goBack();
    }
  };
  

  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Pick Voice Screen</Text>
        <Button text='Dismiss' onPress={()=>handleDismiss()}/>
    </View>
  );
};

export default PickVoiceScreen;