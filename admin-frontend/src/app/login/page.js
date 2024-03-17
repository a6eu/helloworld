'use client'

import {useRouter} from 'next/navigation';
import axios from "axios";
import {Button, Form, Input, message} from "antd";
import {useState} from "react";

export default function LoginPage() {
    const router = useRouter();
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [loading, setLoading] = useState(false);

    async function handleSubmit(values) {
        setLoading(true);
        const emailOrPhone = values.username;
        const password = values.password;
        const requestBody = {
            "email_or_phone": emailOrPhone,
            "password": password
        };
        try {
            const response = await axios.post(`https://shop-01it-group.up.railway.app/auth/users/login/`, requestBody);
            console.log("response", response);
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            message.success('You have successfully logged in.');
            router.push('/');
        } catch (error) {
            message.error('There was an error logging in.');
            console.error(error);
        }
        setLoading(false);
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
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
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
                name="remember"
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
                <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
