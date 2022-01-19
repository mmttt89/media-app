import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from './Layout'
import { loginAsync } from "@redux/actions/index"

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloading: false,
            showPassword: false,
            username: "",
            password: ""
        }

        this.username = React.createRef(null);
        this.password = React.createRef(null);
    }

    _toggleShowPassword = () => this.setState({ showPassword: !this.state.showPassword });

    _validate = (username, password) => {
        let NumberOfErrors = 0;

        this.username.current?.setError(!username ? "username is required" : "", error => error ? NumberOfErrors++ : 0)
        this.password.current?.setError(!password ? "password is required" : "", error => error ? NumberOfErrors++ : 0);
        return NumberOfErrors == 0
    }

    _onChangeText = (sender, value) => {
        this.setState((prevState, props) => ({ ...prevState, [sender]: value }))
    }

    _login = () => {
        const { loginAsync } = this.props;
        const { username, password } = this.state;

        if (!this._validate(username, password)) {
            return;
        }
        this.setState(prevState => ({ ...prevState, isloading: true }), () => {
            loginAsync({ username, password })
                .then(result => {       
                    console.log(result)             
                    this.setState(prevState => ({ ...prevState, isloading: false }))
                })
                .catch(error => {
                    this.setState(prevState => ({ ...prevState, isloading: false }))
                })
        })

    }

    render() {
        return (
            <Layout
                state={this.state}
                passwordRef={this.username}
                usernameRef={this.password}
                toggleShowPassword={this._toggleShowPassword}
                onChangeText={this._onChangeText}
                login={this._login}
            />
        )
    }
}

export default connect(null, {
    loginAsync
})(LoginScreen)
