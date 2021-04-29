import React, {Component} from "react";

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'san',
            password: '111'
        }
    }

    submit() {
        const {username, password} = this.state
        console.log(username, password)
        if (username) {
            console.log('username is not null')
        } else if (password) {
            console.log('password is not null')
        }
    }

    usernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    passwordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        const {username, password} = this.state
        return (
            <div>
                <h4>MyForm</h4>
                <div>
                    username:<input defaultValue={username}
                                    onChange={this.usernameChange.bind(this)}
                                    type="text"/><br/>
                    password:<input defaultValue={password}
                                    onChange={this.passwordChange.bind(this)}
                                    type="text"/><br/>
                    <button onClick={() => {
                        this.submit()
                    }}>submit
                    </button>
                </div>
            </div>
        )
    }
}
