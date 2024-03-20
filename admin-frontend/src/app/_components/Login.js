'use client'

import {useRouter} from 'next/navigation';
import {Button, Form, Input, message} from "antd";
import {login} from "@/lib";

export default function Login() {
    const router = useRouter();

    async function handleSubmit(values) {
        console.log("values: ", values)
        try {
            const {success, messageText} = await login(values);
            if (success) {
                console.log(messageText);
                router.replace('/');
                message.success(messageText);
            } else {
                console.log(messageText);
                message.error(messageText);
            }
            console.log(values)
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={(values) => handleSubmit(values)}
            autoComplete="off"
        >
            <Form.Item
                label="Email or phone"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
