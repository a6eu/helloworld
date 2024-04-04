import React, {useState} from 'react';
import {Form, Input, Modal, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import axios from "axios";
import {getSession} from "@/lib";

const validateMessages = {
    required: '${label} обязательно!',
    types: {
        number: 'Некорректная цена!',
    },
    number: {
        range: '${label} не должна быть меньше 0',
    },
};


const NewProductModal = ({apiUrl, open, setOpen}) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);

    const handleChange = ({fileList: newFileList}) => setFileList(newFileList);

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined/>
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    const handleOk = () => {
        form.validateFields().then(async (values) => {
            const session = await getSession();
            const formData = new FormData();
            formData.append("article", values.article);
            formData.append("name", values.name);
            formData.append("price", values.price);
            formData.append("description", values.description);
            formData.append("rating_total", values.rating_total);
            if (fileList.length > 0) {
                const file = fileList[0].originFileObj;
                formData.append("img_url", file);
            }
            formData.append("quantity", values.quantity);

            const config = {
                headers: {
                    "Authorization": `Bearer ${session.user.accessToken}`,
                },
            };

            axios.post(apiUrl, formData, config)
                .then((r) => {
                    console.log("addition response", r);
                })
                .catch((e) => {
                    console.log(e);
                });

            form.resetFields();
            setOpen(false);
        });
    };


    const onSuccess = (e) => {
        console.log("Success")
    };
    return (
        <Modal
            title=""
            okText={"Добавить"}
            cancelText={"Отмена"}
            open={open}
            onOk={handleOk}
            onCancel={() => setOpen(false)}>
            <Form
                className={"pt-4"}
                layout="vertical"
                form={form}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name='article'
                    label="Артикль"
                    rules={[
                        {
                            required: true,
                            message: 'Это обязательное поле!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='name'
                    label="Имя продукта"
                    rules={[
                        {
                            required: true,
                            message: 'Это обязательное поле!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='price'
                    label="Цена продукта"
                    rules={[
                        {
                            required: true,
                            message: 'Это обязательное поле!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='description'
                    label="Описание"
                    rules={[
                        {
                            required: true,
                            message: 'Это обязательное поле!',
                        },
                    ]}
                >
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item
                    name='rating_total'
                    label="Рейтинг"
                    rules={[
                        {
                            required: true,
                            message: 'Это обязательное поле!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='img_url'
                    label="Фото"
                    rules={[
                        {
                            required: false,
                            message: 'Это обязательное поле!',
                        },
                    ]}
                >
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleChange}
                        onSuccess={onSuccess}
                        onError={(e) => {
                            console.log('error: ', e)
                        }}
                    >
                        {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item
                    name='quantity'
                    label="Количество"
                    rules={[
                        {
                            required: true,
                            message: 'Это обязательное поле!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default NewProductModal;