import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from "@screens/index";

const Tab = createBottomTabNavigator();

const AppTabs = ({ ...props }) => {
    const { PostsScreen, CreateScreen, ProfileScreen } = Screens;

    return (
        <Tab.Navigator {...props}>
            <Tab.Screen name="Posts" component={PostsScreen} />
            <Tab.Screen name="Create" component={CreateScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default AppTabs