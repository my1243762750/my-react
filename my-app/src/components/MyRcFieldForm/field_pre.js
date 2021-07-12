import React, {useContext, useState, useEffect} from "react";
import Context from "./context";

export default function Field (props) {
    const form = useContext(Context);
    let {name, rules, children} = props;
    const {setRule, setFieldValue, getFieldValue, setFieldUpdate} = form;
    const [value, setValue] = useState(getFieldValue(name) || '');
    const controlled = () => {
        return {
            value: value,
            onChange: (e) => {
                const value = e.target.value;
                setFieldValue(name, value);
                console.log('onchange')
            }
        }
    }

    useEffect(() => {
        console.log('Field useEffect 1');
        setRule(name, rules);
        setFieldValue(name, null);
        setFieldUpdate(name, setValue);
        children = React.cloneElement(children, controlled());
    }, [])

    return (
        <div>
            {children}
        </div>
    );
}
