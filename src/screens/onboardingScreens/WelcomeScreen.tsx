import React from 'react';
import {View , Text} from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';


const WelcomeScreen = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Welcome Screen</Text>
        <Button text="Get Started" onPress={()=>navigation.push("EnterCompanyIdScreen",{insideOnboardingStack:true})}/>
    </View>
  );
};

export default WelcomeScreen;