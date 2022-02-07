import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Image } from "react-native"
import FastImage from 'react-native-fast-image';
import Modal from "react-native-modal";
import colors from '@constants/colors';
import BOOKMARKS from '@data/bookmarks';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { AppIcon, AppText, AppTextInputSimple, AppTouch, AppTextSimple, AppIndicator } from "@components/index"

const AppBookmark = ({ id, data, ...props }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [bookmarkState, setBookmarkState] = useState({ bookmarks: [], isCreateNewCollection: false, collectionName: "", isloading: false })

    const _loadBookmarks = () => {
        //fetch bookmarks
        setIsModalVisible(true);
        setBookmarkState(prevState => ({ ...prevState, isloading: true }))
        setTimeout(() => {
            setBookmarkState(prevState => ({ ...prevState, bookmarks: BOOKMARKS, isloading: false }))
        }, 1000)
    }

    const _createNewCollection = () => {
        setBookmarkState(prevState => ({ ...prevState, isCreateNewCollection: true }))
    }

    const onChangeText = (collectionName) => {
        setBookmarkState(prevState => ({ ...prevState, collectionName }))
    }

    const _onModalHide = () => {
        setBookmarkState(prevState => ({ ...prevState, isCreateNewCollection: false, collectionName: "" }))
    }

    return (
        <>
            <AppIcon
                type="Feather"
                name="bookmark"
                style={{ fontSize: 20, marginLeft: 3 }}
                onLongPress={_loadBookmarks}
                onPress={() => console.log({ id })}
            />
            <Modal
                isVisible={isModalVisible}
                onBackButtonPress={() => setIsModalVisible(false)}
                onBackdropPress={() => setIsModalVisible(false)}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                avoidKeyboard={true}
                onModalWillHide={_onModalHide}
            >
                <View style={{ height: hp("28%"), backgroundColor: "#fff" }}>
                    <View style={styles.header}>
                        {
                            bookmarkState.isCreateNewCollection ?
                                <AppTouch
                                    onPress={() => setBookmarkState(prevState => ({ ...prevState, isCreateNewCollection: false }))}
                                    style={{
                                        position: "absolute",
                                        left: 10
                                    }}
                                >
                                    <AppIcon
                                        type="AntDesign"
                                        name="arrowleft"
                                        large
                                    />
                                </AppTouch>
                                :
                                <AppTouch
                                    onPress={() => _createNewCollection()}
                                    style={{
                                        position: "absolute",
                                        right: 10
                                    }}
                                >
                                    <AppIcon
                                        type="AntDesign"
                                        name="plus"
                                        large
                                    />
                                </AppTouch>
                        }
                        <AppText large>{bookmarkState.isCreateNewCollection ? "New collection" : "Save to"}</AppText>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {
                            bookmarkState.isCreateNewCollection ?
                                <CollectionItem
                                    source={{ uri: data?.urls?.raw }}
                                    onChangeText={onChangeText}
                                />
                                :
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {
                                        bookmarkState.isloading ?
                                            <AppIndicator />
                                            :
                                            bookmarkState.bookmarks.map((bookmarkItem, bookmarkIndex) => {
                                                return (
                                                    <CollectionItem
                                                        isReadonly
                                                        key={bookmarkIndex.toString()}
                                                        source={{ uri: bookmarkItem?.urls?.raw }}
                                                        onChangeText={onChangeText}
                                                        title={bookmarkItem?.title}
                                                    />
                                                )
                                            })
                                    }
                                </ScrollView>
                        }
                    </View>
                    <ModalActionButton
                        onPress={() => setIsModalVisible(false)}
                        confirmCondition={bookmarkState?.isCreateNewCollection && bookmarkState?.collectionName.trim()}
                    />
                </View>
            </Modal>
        </>
    );
};

export default AppBookmark;

const ModalActionButton = ({ confirmCondition, ...props }) =>
    <AppTouch
        style={[styles.footer, confirmCondition ? { backgroundColor: colors.main } : null]}
        {...props}
    >
        <AppText bold style={confirmCondition ? { color: colors.bg } : null}>
            {
                confirmCondition ? "Done" : "Cancel"
            }
        </AppText>
    </AppTouch>

const CollectionItem = ({ source, title, isReadonly, onChangeText, ...props }) =>
    <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 15 }}>
        <Image
            source={source}
            style={{
                width: 65,
                height: 65,
                borderRadius: 10
            }}
            resizeMode={FastImage.resizeMode.contain}
        />
        {
            isReadonly ?
                <AppTextSimple
                    small
                    numberOfLines={1}
                    style={{ width: 65 }}
                >
                    {
                        title
                    }
                </AppTextSimple>
                :
                <AppTextInputSimple
                    onChangeText={onChangeText}
                />
        }
    </View>

const sharedStyles = {
    footer_header: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const styles = StyleSheet.create({
    header: {
        ...sharedStyles.footer_header,
        borderBottomColor: colors.border,
        borderBottomWidth: 0.5
    },
    footer: {
        ...sharedStyles.footer_header,
        borderTopColor: colors.border,
        borderTopWidth: 0.5
    }
})
