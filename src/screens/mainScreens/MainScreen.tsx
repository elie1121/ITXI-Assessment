import React, { useRef } from 'react';
import {View , Text, Pressable, StyleSheet} from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import PickVoiceScreen from '../onboardingScreens/PickVoiceScreen';
import SettingsStackNavigator from '../../navigation/SettingsStackNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MainScreen = () => {
const snapPoints =  ['100%', '75%', '50%','25%'];
  const navigation = useNavigation();
  const sheetRef = useRef(null);

  const handleOpen = () => {
    sheetRef.current?.expand();
  };

  const handleClose = () => {
    sheetRef.current?.close();
  };
  return (
    <View style={mainScreenStyle.mainView}>
        <Pressable onPress={() => handleOpen()}>
            <AntDesign name="setting" size={24}/>
        </Pressable>
        <View style={mainScreenStyle.screenTitleView}>
            <Text style={styles.screenTitleText}>Main Screen</Text>
            <Button text="Launch Voicebot screen"  />
        </View>

        <BottomSheet
            ref={sheetRef}
            index={-1} 
            enablePanDownToClose={true}
            onDismiss={()=>handleClose()} 
            snapPoints={snapPoints}
        >
        <BottomSheetView style={mainScreenStyle.sheetContent}>
            <SettingsStackNavigator />
        </BottomSheetView>
      </BottomSheet>

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
    },
    sheetContent: {
        flex:1
      },
});