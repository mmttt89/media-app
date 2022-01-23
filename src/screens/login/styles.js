import { StyleSheet } from "react-native"
import colors from "@constants/colors"
import consts from "@constants/index"

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

export default styles