import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { AppText, AppTouch, AppProfileHeaderSmall, AppLikeButton } from '@components/index';
import FastImage from 'react-native-fast-image'
import colors from '@constants/colors';
import AppIcon from './AppIcon';
import { navigateTo, fromNow } from '@helpers/Utils';
import AppDoubleTap from './AppDoubleTap';

const { width } = Dimensions.get("window");

class AppPost extends React.PureComponent {
    state = {
        isLiked: this.props.data.liked_by_user
    }

    tapped = () => {        
        this.setState(prevState => ({ ...prevState, isLiked: !prevState.isLiked }))
    }

    render() {
        const { data } = this.props;
        return (
            <>
                <View style={styles.post_header}>
                    <AppProfileHeaderSmall
                        user={data?.user}
                    />
                    <AppTouch>
                        <AppIcon
                            type="Entypo"
                            name="dots-three-vertical"
                        />
                    </AppTouch>
                </View>
                <View style={styles.post_content}>
                    <AppDoubleTap onDoubleTap={this.tapped}>
                        <FastImage
                            source={{ uri: data?.urls?.raw }}
                            style={{
                                width,
                                height: width * 0.75
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </AppDoubleTap>
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

                            <AppLikeButton isLiked={this.state.isLiked} />

                            <AppIcon
                                type="Fontisto"
                                name="comment"
                                style={{ fontSize: 18, marginHorizontal: 3 }}
                                onPress={() => navigateTo("PostDetails", { data })}
                            />
                            <AppIcon
                                type="Feather"
                                name="send"
                                style={{ fontSize: 18, marginHorizontal: 3 }}
                            />
                        </View>
                        <AppIcon
                            type="Feather"
                            name="bookmark"
                            style={{ fontSize: 20, marginLeft: 3 }}
                        />
                    </View>
                    <View
                        style={{ marginTop: 6 }}
                    >
                        <AppText
                            bold
                            onPress={() => navigateTo("Likes")}
                        >
                            {data?.likes} likes
                        </AppText>
                        <View>
                            <AppText bold>
                                {
                                    data.user?.name
                                } <AppText onPress={() => navigateTo("PostDetails", { data })}>
                                    {
                                        data.description
                                    }
                                </AppText>
                            </AppText>
                        </View>
                        <AppText
                            gray
                            onPress={() => navigateTo("PostDetails", { data })}
                        >
                            {`View all ${data?.comments} comments`}
                        </AppText>
                        <AppText
                            xsmall
                            gray
                        >
                            {
                                fromNow(data?.created_at)
                            }
                        </AppText>
                    </View>
                </View>
            </>
        )
    }
}

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
