import React from 'react'
import { View } from 'react-native'

const AppLayoutContainer = ({ ...props }) =>
    <View style={{ flex: 1 }}>
        {props.children}
    </View>

export default AppLayoutContainer
