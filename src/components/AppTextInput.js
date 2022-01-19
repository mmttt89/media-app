import React from "react";
import { View, TextInput, Keyboard, StyleSheet } from 'react-native';
import colors from "@constants/colors"
import consts from "@constants/index";
import { AppText, AppTouch } from "@components/index";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class ATextInputLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            status: 'NONE',
            error: ''
        }
    }

    // errorCallback: returns the state to caller component
    setError = (error, errorCallback) => {
        let isThereAnyError = (error) ? true : false;
        this.setState({ status: isThereAnyError ? 'ERROR' : 'CLEAR', error });
        if (errorCallback)
            errorCallback(isThereAnyError);
    }

    clearError = () => {
        if (this.state.status == 'ERROR') {
            this.setState({ status: 'NONE' });
        }
    }

    hasError = () => this.state.status == 'ERROR';

    handleFocus = (event) => {
        this.setState({ isFocused: true });
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    handleBlur = (event) => {
        this.setState({ isFocused: false });
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    render() {
        const { isFocused, error } = this.state;
        const { onFocus, onBlur, label, labelStyle, small, xsmall, placeholder,
           style, inputStyle, textInputStyle, iconComponent, inputIcon, inputIconComponent,
            rowIcon, rowIconProps, inputIconAction, ...otherProps } = this.props;

        let fontStyle = styles.normal;
        if (small) fontStyle = styles.small;
        if (xsmall) fontStyle = styles.xsmall;        

        return (
            <View style={style}>
                {
                    label ?
                        <AppText
                            style={[styles.label, fontStyle, labelStyle]} >
                            {
                                label
                            }
                        </AppText> : null
                }
                <View
                    style={[styles.container, isFocused ? styles.isFocused : null]}>
                    {
                        rowIcon ?
                            <View style={styles.rowIcon}>
                                <AppIcon
                                    name={rowIconProps.name}
                                    type={rowIconProps.type}
                                    style={[rowIconProps.style, isFocused ? styles.isFocusedIcon : null]}
                                />
                            </View> : null
                    }
                    <TextInput
                        placeholder={placeholder ?? ""}
                        placeholderTextColor={"#888a8f"}
                        ref={ref => this.input = ref}
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                        onSubmitEditing={Keyboard.dismiss}
                        style={[styles.input, fontStyle, textInputStyle]}
                        {...otherProps}
                    />
                    {
                        inputIconComponent ?
                            <AppTouch
                                onPress={inputIconAction}
                                style={styles.inputIcon}
                            >
                                {
                                    inputIconComponent
                                }
                            </AppTouch> : null
                    }
                </View>
                <AppText xxsmall style={styles.error} >
                    {
                        this.hasError() ? error : " "
                    }
                </AppText>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: hp('1%'),
        borderBottomColor: "#fff",
        borderBottomWidth: 3,
        flexDirection: "row",        
        borderRadius: 5,
        backgroundColor: "#f9f9f9",
    },
    isFocused: {
        borderBottomColor: colors.main
    },
    isFocusedIcon: {
        color: colors.main
    },
    input: {
        flex: 1,
        paddingHorizontal: wp("3%"),
        fontFamily: consts.FONT_FAMILY_NORMAL,
        minHeight: hp("6%"),
        flexDirection: "row",
        alignItems: 'center'
    },
    inputIcon: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15
    },
    rowIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderLeftWidth: 1,
        borderLeftColor: "#fff",
        minWidth: 60
    },
    label: {
        color: colors.textDefault
    },
    error: {
        color: '#ff0000'
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