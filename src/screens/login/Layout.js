import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LogoIcon } from "@assets/icons/index"
import { AppTextInput, AppText, AppButton, AppIcon, AppTouch } from '@components/index';
import colors from "@constants/colors"
import consts from '@constants/index';

const Layout = ({
    login,
    toggleShowPassword,
    onChangeText,
    state,
    passwordRef,
    usernameRef
}) =>
    <ScrollView
        style={[styles.container, { backgroundColor: colors.bg }]}
    >
        <View
            style={styles.centerize}
        >
            <LogoIcon  width={hp('15%')}/>
        </View>
        <View
            style={styles.form}
        >
            <AppTextInput
                ref={usernameRef}
                style={{ marginVertical: 3 }}
                placeholder={"username"}
                onChangeText={value => onChangeText("username", value)}
            />
            <AppTextInput
                ref={passwordRef}
                style={{ marginVertical: 3 }}
                secureTextEntry={!state?.showPassword}
                placeholder={"password"}
                onChangeText={value => onChangeText("password", value)}
                inputIconComponent={
                    <AppTouch onPress={toggleShowPassword}>
                        {
                            state?.showPassword ?
                                <AppIcon type={"Ionicons"} name={"eye"} />
                                :
                                <AppIcon type={"Ionicons"} name={"md-eye-off-sharp"} />
                        }
                    </AppTouch>
                }
            />           
            <View
                style={[{ marginVertical: hp("1%") }, styles.centerize]}
            >
                <AppButton
                    label={"Enter to app"}
                    labelStyle={styles.buttonLabel}
                    onPress={login}
                    isloading={state.isloading}
                />
                <View style={{ paddingTop: hp("5%"), flexDirection: 'row', alignItems: 'center' }}>
                    <AppText>
                        Dont have an account?
                    </AppText>
                    <AppText                    
                        style={{ color: colors.main, marginHorizontal: 3 }}
                    >
                        Sign up
                    </AppText>
                </View>
            </View>
            <View
                style={styles.centerize}
            >
                <AppText
                    style={{ color: colors.lightBlue, paddingTop: hp("1%") }}
                >
                    Forgot Password
                </AppText>
            </View>
            <View
                style={styles.divider}
            />
            <View
                style={[styles.terms, styles.centerize]}
            >
                <AppText
                xsmall
                    style={styles.termsStrings}
                >
                    {"By using this application you accept the terms of use"}
                </AppText>
            </View>
        </View>
    </ScrollView>

export default Layout

const styles = StyleSheet.create({
    centerize: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: colors.bg
    },
    form: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    divider: {
        height: 0.8,
        width: "100%",
        backgroundColor: "#d4d4d4",
        marginVertical: 12
    },
    buttonLabel: {
        color: "#fff",
        fontSize: consts.FONT_SIZE_NORMAL
    },
    terms: {
        paddingTop: 8
    },
    termsStrings: {
        textAlign: "center"
    },
})

