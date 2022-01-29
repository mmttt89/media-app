import React, { Component } from 'react'
import Layout from './Layout'
import data from "@data/index"
import { dataFilter } from "@helpers/Utils"

const pageSize = 10;
const { POSTS } = data;

export class PostsScreen extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            noMore: false,
            isloading: false,
            isloadMoreLoading: false,
            isPullToRefreshLoading: false,
            pageNumber: 1,
            postsData: [],
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this._load();
    }

    _load = () => {
        const { pageNumber } = this.state;
        this.setState(prevState => ({ ...prevState, isloading: true }), () => {
            this._loadPosts(pageNumber, pageSize, false)
        })
    }

    _loadMore = () => {
        const { pageNumber } = this.state;
        this._loadPosts(pageNumber, pageSize, false)
    }

    _loadPosts = (pageNumber, pageSize, isPullToRefresh) => {
        this.setState(prevState => ({ ...prevState, isloadMoreLoading: true }), () => {
            //imitating the mock data seeding
            setTimeout(() => {
                try {

                    const result = dataFilter(POSTS, pageNumber, pageSize);

                    //is it reach to end
                    let noMore = this.state.noMore;
                    if (result.length < pageSize) {
                        noMore = true
                    }

                    let postsData = this.state.postsData;
                    isPullToRefresh ?
                        postsData = result :
                        postsData = this.state.postsData.concat(result);

                    this.setState(prevState => ({
                        ...prevState,
                        isloading: false,
                        isloadMoreLoading: false,
                        isPullToRefreshLoading: false,
                        postsData,
                        noMore,
                        pageNumber: pageNumber + 1,
                        errorMessage: "Somthing went wrong"
                    }))
                } catch (error) {
                    this.setState(prevState => ({
                        ...prevState,
                        isLoading: false,
                        isloadMoreLoading: false,
                        isPullToRefreshLoading: false,
                        errorMessage: error.message ?? "Somthing went wrong"
                    }))
                }
            }, 1000)
        })
    }

    _pullToRefresh = () => {
        this.setState(prevState => ({ ...prevState, pageNumber: 1, isPullToRefreshLoading: true, noMore: false }), () => {
            this._loadPosts(this.state.pageNumber, pageSize, true)
        })
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { postsData, isloading, errorMessage, isloadMoreLoading, isPullToRefreshLoading, noMore } = this.state

        return (
            <Layout
                postsData={postsData}
                errorMessage={errorMessage}
                noMore={noMore}
                isloading={isloading}
                isloadMoreLoading={isloadMoreLoading}
                isPullToRefreshLoading={isPullToRefreshLoading}
                pullToRefresh={this._pullToRefresh}
                loadMore={this._loadMore}
            />
        )
    }
}

export default PostsScreen
