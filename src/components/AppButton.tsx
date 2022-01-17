import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AppText } from "@components/index";
import colors from '@constants/colors'

const AppButton = (props: any) => {
    const { label, style, labelStyle, restOfProps } = props;

    return (
        <View style={[styles.centerize, styles.container, style]} {...restOfProps}>
            <AppText style={labelStyle}>
                {label}
            </AppText>
        </View>
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
        backgroundColor: colors.main,
        height: 45,
        width: "100%"
    },
})
