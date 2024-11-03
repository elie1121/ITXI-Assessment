import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/onboardingScreens/WelcomeScreen';
import EnterCompanyIdScreen from '../screens/onboardingScreens/EnterCompanyIdScreen';
import PickVoiceScreen from '../screens/onboardingScreens/PickVoiceScreen';

const Stack = createNativeStackNavigator();

const OnBoardingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{title:"Welcome Screen"}} name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen options={{title:"Enter Company Id Screen"}} name="EnterCompanyIdScreen" component={EnterCompanyIdScreen}  />
      <Stack.Screen options={{title:"Pick Voice Screen"}} name="PickVoiceScreen" component={PickVoiceScreen} />
    </Stack.Navigator>
  );
};

export default OnBoardingStackNavigator;