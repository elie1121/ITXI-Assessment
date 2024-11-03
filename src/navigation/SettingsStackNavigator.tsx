import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EnterCompanyIdScreen from '../screens/onboardingScreens/EnterCompanyIdScreen';
import PickVoiceScreen from '../screens/onboardingScreens/PickVoiceScreen';
import SettingsScreen from '../screens/settingsScreens/SettingsScreen';
import SetCompanyIdScreen from '../screens/settingsScreens/SetCompanyIdScreen';

const Stack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{title:"Settings Screen"}} name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen options={{title:"Set Company Id Screen"}} name="SetCompanyIdScreen" component={SetCompanyIdScreen} />
      <Stack.Screen options={{title:"Enter Company Id Screen"}} name="EnterCompanyIdScreen" component={EnterCompanyIdScreen} />
      <Stack.Screen options={{title:"Pick Voice Screen"}} name="PickVoiceScreen" component={PickVoiceScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;