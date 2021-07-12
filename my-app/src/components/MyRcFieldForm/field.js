import React, {Component} from "react";
import Context from "./context";

export default class Field extends Component{
    static contextType = Context;

    componentDidMount() {
        const {name} = this.props;
        this.unRegister = this.context.setFieldEntities(name, this);
    }

    componentWillUnmount() {
        this.unRegister && this.unRegister();
    }

    onStoreChange = () => {
        this.forceUpdate();
    }

    controlled(comp){
        const {name, rules} = this.props;
        const {setFieldValue, getFieldValue, validate} = this.context;
        const trigger = rules.trigger || 'blur';
        return {
            value: getFieldValue(name) || '',
            onChange: (e) => {
                const value = e.target.value;
                setFieldValue(name, value);
                if (trigger === 'change') {
                    validate(name, value, rules);
                }
                comp.props.onChange && comp.props.onChange(e);
            },
            onBlur: (e) => {
                const value = e.target.value;
                if (trigger === 'blur') {
                    validate(name, value, rules);
                }
                comp.props.onBlur && comp.props.onBlur(e);
            }
        }
    }

    render() {
        const {name, children} = this.props;
        const {getErrors} = this.context;
        const cloneChildren = React.cloneElement(children, this.controlled(children));
        const error = getErrors()[name];
        return (
            <>
                {cloneChildren}
                <div>{!!error && error.message}</div>
            </>
        );
    }
}
