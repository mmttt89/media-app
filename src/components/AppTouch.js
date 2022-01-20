import React from "react";
import { Pressable } from "react-native";

const AppTouch = ({...props}) =>
    <Pressable        
        {...props}
    >
        {props.children}
    </Pressable>

export default AppTouch;