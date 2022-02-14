import React from "react";
import { TextInput, Keyboard, StyleSheet } from 'react-native';
import colors from "@constants/colors"
import consts from "@constants/index";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class AppTextInputSimple extends React.PureComponent {

    render() {
        const { small, xsmall, placeholder, textInputStyle, ...otherProps } = this.props;

        let fontStyle = styles.normal;
        if (small) fontStyle = styles.small;
        if (xsmall) fontStyle = styles.xsmall;

        return (
            <TextInput
                placeholder={placeholder ?? ""}
                placeholderTextColor={"#888a8f"}
                focusable={true}
                onSubmitEditing={Keyboard.dismiss}
                style={[styles.input, fontStyle, textInputStyle]}
                underlineColorAndroid={colors.main}
                autoFocus={true}
                {...otherProps}
            />
        )
    }
}

export default AppTextInputSimple;

var styles = StyleSheet.create({
    isFocused: {
        borderBottomColor: colors.main
    },
    input: {
        paddingHorizontal: 5,
        fontFamily: consts.FONT_FAMILY_NORMAL,
        minHeight: consts.FONT_SIZE_NORMAL,
        flexDirection: "row",
        alignItems: 'center'
    },
    normal: {
        fontSize: consts.FONT_SIZE_NORMAL
    },
    small: {
        fontSize: consts.FONT_SIZE_SMALL
    },
    xsmall: {
        fontSize: consts.FONT_SIZE_XSMALL
    }
});