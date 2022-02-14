import React, { Component } from 'react';
import Layout from './Layout';

export class PostDetailsScreen extends Component {

    render() {
        const { params } = this.props.route
        return (
            <Layout
                data={params?.data}
            />
        );
    }
}

export default PostDetailsScreen;
