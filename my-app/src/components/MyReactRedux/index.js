import React, {Component} from 'react'
import {connect} from 'react-redux'

export default connect(
    state => state,
    {
        setName: () => {
            return {
                type: 'setName'
            }
        }
    }
)(class MyReactRedux extends Component {

    render() {
        console.log('props', this.props)
        const {name, age, setName} = this.props
        return (
            <div>
                <h4>MyReactRedux</h4>
                <span>{name}-{age}</span>
                <button onClick={() => {
                    setName()
                }}>click</button>
            </div>
        )
    }
})
