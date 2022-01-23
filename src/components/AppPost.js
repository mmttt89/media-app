import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { AppText, AppTouch } from '@components/index';
import colors from '@constants/colors';
import AppIcon from './AppIcon';

const { width, height } = Dimensions.get("window");
const SIZE = 40;

const AppPost = ({ data, ...props }) => {
    return (
        <>
            <View style={styles.post_header}>
                <AppTouch
                    style={styles.post_header_touch}
                >
                    <Image
                        source={{ uri: "https://i.picsum.photos/id/176/200/300.jpg?grayscale&hmac=Jdj7SwPo39coGPNTY3C3uRMWWUNWrDo5rOqcS6Gwgf0" }}
                        style={{
                            width: SIZE,
                            height: SIZE,
                            borderRadius: SIZE / 2
                        }}
                    />
                    <AppText bold style={{ marginHorizontal: 5 }}>
                        {data.user?.name}
                    </AppText>
                </AppTouch>
                <AppTouch>
                    <AppIcon type="Entypo" name="dots-three-vertical" />
                </AppTouch>
            </View>
            <View style={styles.post_content}>
                <Image
                    source={{ uri: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" }}
                    style={{
                        width,
                        height: width * 0.75,
                        resizeMode: 'contain'
                    }}
                />
            </View>
            <View
                style={styles.post_description}
            >
                <View
                    style={styles.post_like_buttons_container}
                >
                    <View
                        style={styles.post_like_buttons}
                    >
                        <AppIcon
                            type="AntDesign"
                            name="hearto"
                            style={{ fontSize: 20, marginRight: 3 }}
                        />
                        <AppIcon
                            type="Fontisto"
                            name="comment"
                            style={{ fontSize: 18, marginHorizontal: 3 }}
                        />
                        <AppIcon
                            type="Feather"
                            name="send"
                            style={{ fontSize: 18, marginHorizontal: 3 }}
                        />
                    </View>
                    <AppIcon type="Feather" name="bookmark" style={{ fontSize: 20, marginLeft: 3 }} />
                </View>
                <View
                    style={{ marginTop: 6 }}
                >
                    <AppText bold>
                        {data?.likes} likes
                    </AppText>
                    <View>
                        <AppText bold>
                            {
                                data.user?.name
                            } <AppText>
                                {
                                    data.caption
                                }
                            </AppText>
                        </AppText>
                    </View>
                    <AppText gray>
                        {`View all ${data?.comments} comments`}
                    </AppText>
                    <AppText xsmall gray>
                        {"3 days ago"}
                    </AppText>
                </View>
            </View>
        </>
    );
};

export default AppPost;

const rowStyle = {
    flexDirection: 'row',
    alignItems: 'center'
}
const styles = StyleSheet.create({
    post_header: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 0.5,
        borderColor: colors.border,
        paddingVertical: 5,
        paddingHorizontal: 7
    },
    post_header_touch: {
        ...rowStyle
    },
    post_like_buttons_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    post_like_buttons: {
        ...rowStyle
    },
    post_content: {

    },
    post_description: {
        paddingHorizontal: 7
    }
});
