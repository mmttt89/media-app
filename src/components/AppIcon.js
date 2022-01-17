import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '@constants/colors';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//this component is js beacuse of "react-native-vector-icons" typescript warnings

const AppIcon = ({ ...props }) => {
    const { type, name, large, small, xsmall, color, style, bright } = props

    let fontStyle = styles.normal;
    if (large) fontStyle = styles.large;
    if (small) fontStyle = styles.small;
    if (xsmall) fontStyle = styles.xsmall;

    let customColor = color ?? colors.icon;
    if (bright) customColor = "#fff";

    const _renderIcon = () => {
        switch (type) {
            case "FontAwesome": return <FontAwesomeIcon bright name={name} style={[{ color: customColor }, fontStyle, style]} {...props} />
            case "FontAwesome5": return <FontAwesomeIcon5 bright name={name} style={[{ color: customColor }, fontStyle, style]} {...props} />
            case "MaterialCommunityIcons": return <MaterialCommunityIcons bright name={name} style={[{ color: customColor }, fontStyle, style]} {...props} />
            case "Ionicons": return <Ionicons bright name={name} style={[{ color: customColor }, fontStyle, style]} {...props} />
            case "AntDesign": return <AntDesign bright name={name} style={[{ color: customColor }, fontStyle, style]} {...props} />
            case "Entypo": return <Entypo bright name={name} style={[{ color: customColor }, fontStyle, style]} {...props} />
            case "MaterialIcons": return <MaterialIcons bright name={name} style={[{ color: customColor }, fontStyle, style]} {...props} />
            default: <View><Text>No Icon</Text></View>
        }
    }

    return (
        _renderIcon() ?? null
    )
}

AppIcon.defaultProps = {
    type: "FontAwesome"
}

export default AppIcon;

const styles = StyleSheet.create({
    centerize: {
        justifyContent: "center",
        alignItems: "center"
    },
    large: {
        fontSize: 22
    },
    normal: {
        fontSize: 18
    },
    small: {
        fontSize: 13
    },
    xsmall: {
        fontSize: 10
    }
})