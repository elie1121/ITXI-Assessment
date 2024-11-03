import React from 'react';
import {View , Text, Pressable, StyleSheet} from 'react-native';
import styles from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button';

const MainScreen = () => {
  return (
    <View style={mainScreenStyle.mainView}>
        <Pressable>
            <AntDesign name="setting" size={24}/>
        </Pressable>
        <View style={mainScreenStyle.screenTitleView}>
            <Text style={styles.screenTitleText}>Main Screen</Text>
            <Button text="Launch Voicebot screen"/>
        </View>

    </View>
  );
};

export default MainScreen;

const mainScreenStyle = StyleSheet.create({
    mainView:{
        padding:15,
        flex:1
    },
    screenTitleView:{
        flex:1,
        justifyContent:'center'
    }
});