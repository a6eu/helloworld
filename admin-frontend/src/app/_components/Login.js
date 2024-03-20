'use client'

import {useRouter} from 'next/navigation';
import {Button, Form, Input, message, Skeleton} from "antd";
import {login} from "@/lib";
import {useState} from "react";

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(values) {
        setLoading(true);
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
        setLoading(false);
    }

    return (
        <div className={'w-full h-[100vh] absolute top-0 left-0 flex flex-col justify-center items-center bg-[#f5f5f5]'}>
            <Skeleton className={"w-5"} header={false} active avatar={true} title={false} size={'large'} round={true} paragraph={false} loading={loading}>
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
                    <h1>Добро пожаловать!</h1>
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
            </Skeleton>
        </div>
    );
}
