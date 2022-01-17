import React from "react";
import { Pressable } from "react-native";

const AppTouch = (props: any) =>
    <Pressable        
        {...props}
    >
        {props.children}
    </Pressable>

export default AppTouch;