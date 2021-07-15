import React, {useEffect} from "react";
// import Form, {Field} from "rc-field-form";
import Form, {Field} from "../../components/MyRcFieldForm";

export default function RCForm() {
    const [form] = Form.useForm();
    const usernameRules = [{required: true, message: '用户名不能为空'}];
    const passwordRules = [{required: true, message: '密码不能为空'}];
    const onFinish = (values) => {
        console.log('onFinish', values);
    }
    const onFinishFailed = (values, errorFields) => {
        console.log('onFinishFailed', values, errorFields);
    }
    const onChange = (e) => {
        console.log('onChange', e.target.value);
    }
    const onInput = (e) => {
        console.log('onInput', e.target.value);
    }

    useEffect(() => {
        form.setFieldsValue({username: 'lisi', password: '123'});
    }, [])

    return (
        <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Field name="username" rules={usernameRules}>
                <input type="text" placeholder='username' onChange={onChange} onInput={onInput} />
            </Field>
            <Field name="password" rules={passwordRules}>
                <input type="password" placeholder='password' />
            </Field>
            <button>submit</button>
        </Form>
    );
}
