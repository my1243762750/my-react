import React, {Component} from 'react'
import store from "./store";

export default class MyRedux extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate()
        })
    }

    render() {
        const {name, age} = store.getState()
        return (
            <div>
                <h4>MyRedux</h4>
                <span>{name}-{age}</span>
                <button onClick={() => {
                    store.dispatch({
                        type: 'setName'
                    })
                }}>click</button>
            </div>
        )
    }
}
