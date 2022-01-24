import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from "@screens/index";
import { AppIcon } from "@components/index";

const Tab = createBottomTabNavigator();

const AppTabStack = ({ ...props }) => {
    const { PostsScreen, CreateScreen, ProfileScreen } = Screens;

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false
            }}
            {...props}
        >
            <Tab.Screen
                name="Posts"
                component={PostsScreen}                
                options={{                    
                    tabBarIcon: ({ color, size }) => <AppIcon type="AntDesign" name="home" color={color} />
                }}
            />
            <Tab.Screen
                name="Create"
                component={CreateScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <AppIcon type="AntDesign" name="pluscircleo" color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <AppIcon type="AntDesign" name="user" color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

export default AppTabStack