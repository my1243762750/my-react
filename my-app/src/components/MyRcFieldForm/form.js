import React from "react";
import useForm from "./useForm";
import Context from "./context";

export default function Form(props) {
    const {onFinish, onFinishFailed} = props;
    const [form] = useForm(props.form);
    form.setCallbacks({onFinish, onFinishFailed});

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            form.submit();
        }}>
            <Context.Provider value={form}>
                {props.children}
            </Context.Provider>
        </form>
    );
}
