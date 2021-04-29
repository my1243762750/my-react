import React, {PureComponent} from "react";

// PureComponent用來提高性能 但是只做浅比较
export default class MyPureComponent extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            man: {
                name: 'san'
            }
        }
    }

    setCount() {
        this.setState({
            count: 100,
            man: {
                name: 'si'
            }
        })
    }

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.count !== nextState.count;
    }*/

    render() {
        console.log('render');
        const {count} = this.state;
        return (
            <div>
                <span>{count}</span>
                <button onClick={() => {
                    this.setCount()
                }}>click</button>
            </div>
        );
    }
}
