import { StyleSheet, View } from 'react-native';
import React from 'react';
import colors from '@constants/colors';

const AppDivider = ({ style, ...props }) => <View style={[styles.divider, style]} {...props}></View>

export default AppDivider;

const styles = StyleSheet.create({
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: colors.border,
        opacity: 0.3
    }
});
