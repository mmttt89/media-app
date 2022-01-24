import React, { Component } from 'react'
import Layout from './Layout'


export class PostsScreen extends Component {

    navigateTo = (name, params) => {
        const { navigation } = this.props;
        navigation.navigate(name, params)
    }

    render() {
        return (
            <Layout
                navigateTo={this.navigateTo}
            />
        )
    }
}

export default PostsScreen
