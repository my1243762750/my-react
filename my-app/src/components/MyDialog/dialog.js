import React, {Component} from "react";
import dialog from './dialog.module.css'
import {createPortal} from 'react-dom'

export default class Dialog extends Component{
    constructor(props) {
        super(props);
        this.node = document.createElement('div')
        document.body.appendChild(this.node)
    }

    componentWillUnmount() {
        if (this.node) {
            document.body.removeChild(this.node)
        }
    }

    render() {
        return createPortal(
            <div className={dialog.dialog}>Dialog</div>,
            this.node
        )
    }
}
