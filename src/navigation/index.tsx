import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/mainScreens/MainScreen";
import OnBoardingStackNavigator from "./OnBoardingStackNavigator";
import { Pressable } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
const Stack = createNativeStackNavigator();
const Navigation = () => {


    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{headerShown:false}} name="OnBoarding" component={OnBoardingStackNavigator}/>
                <Stack.Screen options={{headerShown:false}} name="MainScreen" component={MainScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;