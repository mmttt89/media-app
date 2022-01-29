import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { AppIcon } from "@components/index";
import Animated, { useSharedValue, withSpring, useAnimatedStyle, interpolate, Extrapolate } from "react-native-reanimated";

const AppLikeButton = ({ isLiked, doubleTap, ...props }) => {
    const liked = useSharedValue(isLiked ? 1 : 0);
    const [isMounted, setIsMounted] = useState(false)

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

    const _like = () => {
        liked.value = withSpring(liked.value ? 0 : 1)
    }

    useEffect(() => {
        if (isMounted) {
            _like()
        }
        setIsMounted(true)
    }, [isLiked]);


    return (
        <Pressable onPress={_like} {...props}>
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