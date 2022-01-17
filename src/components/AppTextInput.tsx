import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Keyboard, Platform } from 'react-native'
import colors from "@constants/colors"
import consts from '@constants/index'
import { AppText, AppTouch } from '@components/index'

const AppTextInput = (props: any) => {
    const { onFocus, onBlur, label, labelStyle, placeholder, style, inputStyle, textInputStyle, iconComponent,
        inputIcon, inputIconComponent, rowIcon, rowIconComponent, inputIconAction, ...otherProps } = props;

    const [isFocused, setIsFocused] = useState(false)

    return (
        <View style={style}>
            {label ?
                <AppText
                    style={[labelStyle]} >
                    {label}
                </AppText> : null
            }
            <View
                style={[
                    styles.container,
                    { flexDirection: "row-reverse" },
                    isFocused ? styles.isFocused : null
                ]}>
                {
                    inputIcon ?
                        <AppTouch
                            onPress={inputIconAction}
                            style={styles.inputIcon}
                        >
                            {
                                inputIconComponent
                            }
                        </AppTouch> : null
                }
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={"#888a8f"}
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                    onSubmitEditing={Keyboard.dismiss}
                    style={[styles.input, textInputStyle]}
                    {...otherProps}
                />
                {
                    rowIcon ?
                        <View style={styles.rowIcon}>
                            {rowIconComponent}
                        </View> : null
                }
            </View>
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
        borderBottomColor: colors.border,
        borderBottomWidth: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
    },
    isFocused: {
        borderBottomColor: colors.main
    },
    input: {
        flex: 1,
        paddingHorizontal: 6,
        minHeight: 12,
        fontFamily: consts.FONT_FAMILY_NORMAL,
        flexDirection: "row",
        alignItems: 'center',
        fontSize: 13,
        paddingVertical: Platform.OS == "ios" ? 16 : 10,
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
    }
})
