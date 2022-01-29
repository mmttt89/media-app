import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { AppIcon } from "@components/index";
import Animated, { useSharedValue, withSpring, useAnimatedStyle, interpolate, Extrapolate } from "react-native-reanimated";

const AppLikeButton = () => {
    const liked = useSharedValue(0);

    const outlineStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP) }],
        };
    });

    const fillStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: liked.value }],
            opacity: liked.value
        };
    });

    return (
        <Pressable onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
            <Animated.View
                style={[
                    StyleSheet.absoluteFillObject,
                    outlineStyle,
                ]}
            >
                <AppIcon type="AntDesign" name={"hearto"}
                    style={{ fontSize: 20, marginRight: 3, color: "#333" }}
                />
            </Animated.View>

            <Animated.View style={fillStyle}>
                <AppIcon type="AntDesign" name={"heart"}
                    style={{ fontSize: 20, marginRight: 3, color: "#eb346e" }}
                />
            </Animated.View>

        </Pressable>
    );
};


export default AppLikeButton;