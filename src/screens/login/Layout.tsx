import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { AppTextInput, AppText, AppButton, AppIcon, AppTouch } from '@components/index';
import colors from "@constants/colors"
import { LogoIcon } from "@assets/icons/index"
import consts from '@constants/index';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface Iprops {
    state: any,
    toggleShowPassword: () => void
}
const Layout: React.FC<Iprops> = ({ toggleShowPassword, state }) =>
    <ScrollView
        style={[styles.container, { backgroundColor: colors.bg }]}
    >
        <View
            style={[styles.centerize, { paddingTop: 10 }]}
        >
            <LogoIcon />
        </View>
        <View
            style={styles.form}
        >
            <AppTextInput
                style={{ marginVertical: 3 }}
                placeholder={"username"}
            />
            <AppTextInput
                style={{ marginVertical: 3 }}
                secureTextEntry={!state?.showPassword}
                placeholder={"password"}
                inputIcon={true}
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
                style={styles.centerize}
            >
                <AppText
                    style={{ color: colors.lightBlue, paddingVertical: hp("2%") }}
                >
                    {"Forgot Password"}
                </AppText>
            </View>
            <View
                style={[{ marginTop: 5, marginBottom: 2 }, styles.centerize]}
            >
                <AppButton
                    label={"Enter to app"}
                    labelStyle={styles.buttonLabel}
                />
                <AppText
                    style={{ color: colors.main, paddingTop: hp("5%") }}
                >
                    {"Make New Account"}
                </AppText>
            </View>
            <View
                style={styles.divider}
            />
            <View
                style={[styles.terms, styles.centerize]}
            >
                <AppText
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
        fontSize: consts.FONT_SIZE_SMALL,
        textAlign: "center"
    },
})

