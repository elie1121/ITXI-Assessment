import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/mainScreens/MainScreen";
import OnBoardingStackNavigator from "./OnBoardingStackNavigator";
import SetCompanyIdScreen from "../screens/settingsScreens/SetCompanyIdScreen";
import SplashScreen from "../screens/SplashScreen";
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

    const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSplashScreenVisible(false); 
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);


    if (isSplashScreenVisible){
        return <SplashScreen />
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