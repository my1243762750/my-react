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
                }}>click one</button>
                <button onClick={() => {
                    store.dispatch((getState, dispatch) => {
                        setTimeout(() => {
                            dispatch({type: 'setName'});
                        }, 1000)
                    })
                }}>click two</button>
            </div>
        )
    }
}
