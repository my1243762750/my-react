import React, {Component} from "react";
import hoc from './hoc.module.css'

const container = (Comp) => {
    return (props) => {
        return (
            <div className={hoc.container}>
                <Comp {...props}></Comp>
            </div>
        )
    }
}

const Child = () => {
    return (
        <div>Child</div>
    )
}

@container
@container
class Child2 extends Component {
    render() {
        return <div>Child2</div>
    }
}

const MyDiv = container(container(Child))

export default class MyHoc extends Component {
    render() {
        return (
            <div>
                <h4>MyHoc</h4>
                <MyDiv/>
                <Child2/>
            </div>
        )
    }
}
