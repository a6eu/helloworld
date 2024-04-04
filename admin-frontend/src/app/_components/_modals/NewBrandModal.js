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


const NewBrandModal = ({apiUrl, open, setOpen, setReloadData}) => {
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
            formData.append("name", values.name);
            formData.append("description", values.description);
            if (fileList.length > 0) {
                const file = fileList[0].originFileObj;
                formData.append("logo_url", file);
            }

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
            setReloadData();
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
                    name='logo_url'
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
            </Form>
        </Modal>
    );
};

export default NewBrandModal;