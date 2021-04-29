import React, {Component} from "react";
import Dialog from "./dialog";

export default class MyDialog extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isShowDialog: false
        }
    }

    toggle(){
        this.setState({
            isShowDialog: !this.state.isShowDialog
        })
    }

    render() {
        const {isShowDialog} = this.state;
        return (
            <div className='my-dialog'>
                <h4>MyDialog</h4>
                {
                    isShowDialog && <Dialog/>
                }
                <button onClick={() => {
                    this.toggle()
                }}>click</button>
            </div>
        )
    }
}
