import React, {Component} from "react";
// import {createForm} from 'rc-form'
import {createForm} from './my-rc-form'

const usernameRules = {required: true, message: 'username is not null'}
const passwordRules = {required: true, message: 'password is not null'}

class Input extends Component{
    render() {
        const {label} = this.props
        return (
            <div>
                <span>{label}:</span>
                <input type="text" {...this.props}/>
            </div>
        )
    }
}

@createForm
class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'san',
            password: '111'
        }
    }

    submit() {
        const {getFieldsValue, validateFields} = this.props.form
        const {username, password} = getFieldsValue()
        console.log(username, password)
        validateFields((valid) => {
            console.log('valid', valid)
        })
    }

    componentDidMount() {
        const {setFieldsValue} = this.props.form
        setFieldsValue({
            username: 'san',
            password: '111'
        })
    }

    render() {
        console.log(this.props)
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                <h4>MyForm</h4>
                <div>
                    {
                        getFieldDecorator('username', {rules:[usernameRules]})(
                            <Input label='username'/>
                        )
                    } <br/>
                    {
                        getFieldDecorator('password', {rules:[passwordRules]})(
                            <Input label='password'/>
                        )
                    } <br/>
                    <button onClick={() => {
                        this.submit()
                    }}>submit
                    </button>
                </div>
            </div>
        )
    }
}

export default MyForm
