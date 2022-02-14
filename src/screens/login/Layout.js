import React from 'react'
import { View, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LogoIcon } from "@assets/icons/index"
import { AppTextInput, AppText, AppButton, AppIcon, AppTouch } from '@components/index';
import colors from "@constants/colors"
import styles from "./styles"

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
