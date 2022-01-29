import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '@constants/colors';

const AppIndicator = ({ containerStyle, ...props }) => {
    return (
        <View style={[{ justifyContent: 'center', alignItems: 'center' }, containerStyle]}>
            <ActivityIndicator color={colors.border} {...props} />
        </View>
    );
};

export default AppIndicator;
