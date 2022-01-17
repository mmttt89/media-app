import React, { Component } from 'react'
import Layout from './Layout'

class LoginScreen extends Component {
    state = {
        showPassword: false
    }

    _toggleShowPassword = () => this.setState({ showPassword: !this.state.showPassword })

    render() {
        return (
            <Layout
                state={this.state}
                toggleShowPassword={this._toggleShowPassword}
            />
        )
    }
}

export default LoginScreen
