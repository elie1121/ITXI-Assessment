import React from 'react';
import {View , Text} from 'react-native';
import EnterCompanyIdScreen from './src/screens/onboardingScreens/EnterCompanyIdScreen';
import PickVoiceScreen from './src/screens/onboardingScreens/PickVoiceScreen';
import WelcomeScreen from './src/screens/onboardingScreens/WelcomeScreen';
import SplashScreen from './src/screens/SplashScreen';
const App = () => {
  return (
    <PickVoiceScreen />
  );
};

export default App;