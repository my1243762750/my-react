import React, {Component} from "react";

export function createForm (Comp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {}
            this.rules = {}
        }

        getFieldsValue() {
            return {...this.state}
        }

        setFieldsValue(obj) {
            this.setState(obj)
        }

        handleChange(e) {
            const {name, value} = e.target
            this.setState({
                [name]: value
            })
        }

        getFieldDecorator(fieldName, rules) {
            this.rules[fieldName] = rules
            return (Comp) => {
                return React.cloneElement(Comp, {
                    name: fieldName,
                    value: this.state[fieldName] || '',
                    onChange: this.handleChange.bind(this)
                })
            }
        }

        validateFields(callback) {
            const arr = []

            for (const key in this.state) {
                if (!this.state[key]) {
                    arr.push(1)
                } else {
                    console.log('not pass')
                }
            }

            if (arr.length === 0) {
                callback && callback(true)
            } else {
                callback && callback(false)
            }
        }

        getForm() {
            return {
                getFieldsValue: this.getFieldsValue.bind(this),
                setFieldsValue: this.setFieldsValue.bind(this),
                getFieldDecorator: this.getFieldDecorator.bind(this),
                validateFields: this.validateFields.bind(this)
            }
        }

        render() {
            console.log('render')
            const form = this.getForm()
            return (
                <Comp {...this.props} form={form}/>
            )
        }
    }
}
