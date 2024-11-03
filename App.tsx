import React from 'react';
import {View , Text} from 'react-native';

import SplashScreen from './src/screens/SplashScreen';

import EnterCompanyIdScreen from './src/screens/onboardingScreens/EnterCompanyIdScreen';
import PickVoiceScreen from './src/screens/onboardingScreens/PickVoiceScreen';
import WelcomeScreen from './src/screens/onboardingScreens/WelcomeScreen';

import MainScreen from './src/screens/mainScreens/MainScreen';

const App = () => {
  return (
    <MainScreen />
  );
};

export default App;