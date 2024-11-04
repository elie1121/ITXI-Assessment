import React, { useRef,useState } from 'react';
import {View , Text, Pressable, StyleSheet ,Modal} from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import SettingsStackNavigator from '../../navigation/SettingsStackNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VoicebotScreen from './VoicebotScreen';

const MainScreen = () => {
const snapPoints =  ['100%', '75%', '50%','25%'];
  const sheetRef = useRef(null);

  const handleOpen = () => {
    sheetRef.current?.expand();
  };

  const handleClose = () => {
    sheetRef.current?.close();
  };

  const [isVoiceBotModalVisible, setIsVoiceBotModalVisile] = useState(false);


  const dismissVoicebot = () => {
    setIsVoiceBotModalVisile(false);
  };

  return (
    <View style={mainScreenStyle.mainView}>
        <Pressable onPress={() => handleOpen()}>
            <AntDesign name="setting" size={24}/>
        </Pressable>
        <View style={mainScreenStyle.screenTitleView}>
            <Text style={styles.screenTitleText}>Main Screen</Text>
            <Button text="Launch Voicebot screen" onPress={() => setIsVoiceBotModalVisile(true)} />
        </View>

        <Modal
            transparent={false} 
            animationType="slide"
            visible={isVoiceBotModalVisible}
            onRequestClose={()=>setIsVoiceBotModalVisile(false)}
        >
        <VoicebotScreen onDismiss={dismissVoicebot} />
      </Modal>

        {!isVoiceBotModalVisible? // if modal is visible hide the bottomsheet to remove any conflicts
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
        :''}

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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Ensure this is visible
    },
});
