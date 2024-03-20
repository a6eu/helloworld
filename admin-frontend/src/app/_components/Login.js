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
        <div className={'w-full h-[100vh] absolute top-0 left-0 flex flex-col justify-center items-center bg-[#f5f5f5]'}>
            <h1 className={''}>Добро пожаловать!</h1>
            <Form
                name="basic"
                layout={'vertical'}

                style={{
                    width:300
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={(values) => handleSubmit(values)}
                autoComplete="off"
            >
                <Form.Item
                    label="Почта или номер телефона"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Введите почту или номер телефона!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset:9
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
