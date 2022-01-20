import React from 'react'
import { View } from 'react-native'
import colors from '@constants/colors'

const AppLayoutContainer = ({ ...props }) =>
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
        {props.children}
    </View>

export default AppLayoutContainer
