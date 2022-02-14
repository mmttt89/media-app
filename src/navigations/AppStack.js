import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppTabStack from "./AppTabStack";
import Screens from "@screens/";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    const { LikesScreen, PostDetailsScreen } = Screens

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false               
            }}
        >
            <Stack.Screen
                name="AppTabStack"
                component={AppTabStack}
            />
            <Stack.Screen
                name="Likes"
                component={LikesScreen}
                options={{
                    headerShown: true                  
                }}
            />
            <Stack.Screen
                name="PostDetails"
                component={PostDetailsScreen}
                options={{
                    headerShown: true,
                    headerTitle:"Comments"            
                }}
            />
        </Stack.Navigator>
    )
}

export default AppStack