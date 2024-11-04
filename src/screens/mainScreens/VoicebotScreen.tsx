import React from 'react';
import {View , Text} from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';

const VoicebotScreen = ({onDismiss}) => {
  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Voicebot Screen</Text>
        <Button text="Dismiss" onPress={()=>onDismiss()}/>
    </View>
  );
};

export default VoicebotScreen;