import React, {useEffect} from "react";
import Form, {Field} from "rc-field-form";
import MyInput from "../../components/MyInput";

export default function RCForm() {
    const [form] = Form.useForm();
    const usernameRules = [{required: true, message: '用户名不能为空'}];
    const passwordRules = [{required: true, message: '密码不能为空'}];
    const onFinish = (values) => {
        console.log('onFinish', values);
    }
    const onFinishFailed = (values, errorFields, outOfDate) => {
        console.log('onFinishFailed', values, errorFields, outOfDate);
    }

    useEffect(() => {
        form.setFieldsValue({username: 'zhangsan', password: '123'});
    })

    return (
        <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Field name="username" rules={usernameRules}>
                <MyInput type="text" placeholder='username' />
            </Field>
            <Field name="password" rules={passwordRules}>
                <MyInput type="password" placeholder='password' />
            </Field>
            <button>submit</button>
        </Form>
    );
}
