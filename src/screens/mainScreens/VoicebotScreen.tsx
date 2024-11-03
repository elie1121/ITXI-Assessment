import React from 'react';
import {View , Text} from 'react-native';
import styles from '../styles';
import Button from '../../components/Button';

const VoicebotScreen = () => {
  return (
    <View style={styles.mainView}>
        <Text style={styles.screenTitleText}>Voicebot Screen</Text>
        <Button text="Dismiss"/>
    </View>
  );
};

export default VoicebotScreen;