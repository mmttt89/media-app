import React from 'react';
import { AppText, AppTouch } from '@components/index';
import { View } from 'react-native';

const AppErrorMessage = ({ onPress, containerStyle, message, ...props }) =>
    <AppTouch
        onPress={onPress}
        style={[{ justifyContent: 'center', alignItems: 'center', paddingVertical: 5 }, containerStyle]}
    >
        <AppText small gray {...props}>
            {
                message
            }
        </AppText>
    </AppTouch>

export default AppErrorMessage;
