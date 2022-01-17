import * as React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from "@screens/index"

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const { LoginScreen } = Screens;

    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}


export default AuthStack