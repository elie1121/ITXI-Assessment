import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/mainScreens/MainScreen";
import OnBoardingStackNavigator from "./OnBoardingStackNavigator";
import SetCompanyIdScreen from "../screens/settingsScreens/SetCompanyIdScreen";
const Stack = createNativeStackNavigator();
const Navigation = () => {

    const linking = {
        prefixes:['itxi://'],
        config:{
            screens:{
                SetCompanyIdScreenAlone: 'SetCompanyId'
            }
        }
    }
    return(
        <NavigationContainer linking={linking}>
            <Stack.Navigator >
                <Stack.Screen options={{headerShown:false}} name="OnBoarding" component={OnBoardingStackNavigator}/>
                <Stack.Screen options={{headerShown:false}} name="MainScreen" component={MainScreen}/>
                <Stack.Screen options={{title:"Set Company Id"}} name="SetCompanyIdScreenAlone" component={SetCompanyIdScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;