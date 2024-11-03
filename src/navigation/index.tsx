import { NavigationContainer } from "@react-navigation/native";
import EnterCompanyIdScreen from "../screens/onboardingScreens/EnterCompanyIdScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/mainScreens/MainScreen";
import SplashScreen from "../screens/SplashScreen";
import OnBoardingStackNavigator from "./OnBoardingStackNavigator";

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{headerShown:false}} name="OnBoarding" component={OnBoardingStackNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;