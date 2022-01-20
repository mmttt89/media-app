import React from 'react'
import { View, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import { AppText } from "@components/index";
import colors from '@constants/colors'

const AppButton = ({ ...props }) => {
    const { label, style, labelStyle, isloading, ...restOfProps } = props;

    return (
        <Pressable style={[styles.centerize, styles.container, isloading ? { backgroundColor: colors.border } : null, style]} {...restOfProps}>
            <AppText style={labelStyle}>
                {label}
            </AppText>
            {
                isloading ? <ActivityIndicator color={"#fff"} /> : null
            }
        </Pressable>
    )
}

export default AppButton

const styles = StyleSheet.create({
    centerize: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        borderRadius: 100,
        flexDirection: 'row',
        backgroundColor: colors.main,
        height: 45,
        width: "100%"
    },
})
