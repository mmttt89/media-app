
import React from 'react';
import { FlatList, View } from 'react-native';
import { AppLayoutContainer, AppText, AppTouch, AppPost, AppErrorMessage, AppIndicator } from '@components/index';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import colors from '@constants/colors';

const Layout = ({
    postsData,
    isloading,
    isloadMoreLoading,
    isPullToRefreshLoading,
    loadMore,
    pullToRefresh,
    errorMessage,
    noMore,
    ...props
}) => {
    return (
        <AppLayoutContainer>
            {
                isloading ?
                    <AppIndicator
                        containerStyle={{ flex: 1 }}
                    />
                    :
                    <FlatList
                        removeClippedSubviews={true}
                        data={postsData}
                        refreshing={isPullToRefreshLoading}
                        onRefresh={pullToRefresh}
                        ListFooterComponent={postsData.length !== 0 ? <RenderFooter
                            isloadMoreLoading={isloadMoreLoading}
                            noMore={noMore}
                        /> : null
                        }
                        onEndReached={!isloadMoreLoading ? loadMore : null}
                        onEndReachedThreshold={0.5}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item, index }) => <AppPost data={item} index={index} />}
                    />
            }
            {
                errorMessage ?
                    <AppErrorMessage
                        containerStyle={{ flex: 1 }}
                        message={errorMessage}
                        onPress={loadMore}
                    /> : null
            }
        </AppLayoutContainer>
    );
};

export default Layout;

const RenderFooter = ({ isloadMoreLoading, noMore }) =>
    <View style={{
        width: "100%", justifyContent: "center", alignItems: 'center'
    }}>
        {
            !noMore && isloadMoreLoading ?
                <AppIndicator />
                :
                null
        }
    </View >


