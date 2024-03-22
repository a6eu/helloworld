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


const NewItemModal = ({apiUrl, open, setOpen, setReloadData}) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
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
        form.validateFields()
            .then( async (values) => {
                console.log(values)
                const session = await getSession();
                const  body = {
                    "title": values.title,
                    "content": values.content,
                }

                const config = {
                    headers: {
                        "Authorization": `Bearer ${session.user.accessToken}`,
                        "Content-Type": "application/json"
                    }}

                axios.post(apiUrl, body, config)
                    .then((r) => {
                        console.log("addition response", r)}
                    )
                    .catch((e) => {
                        console.log(e)
                    })

                form.resetFields();
                setOpen(false);
                setReloadData()
            })
    }

    const onSuccess = (e) => {
        console.log(e)
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
                    name='title'
                    label="Название"
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
                    name='content'
                    label="Контент"
                    rules={[
                        {
                            required: true,
                            message: 'Это обязательное поле!',
                        },
                    ]}
                >
                    <Input.TextArea/>
                </Form.Item>
                <Upload
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={handleChange}
                    onSuccess={onSuccess}
                    onError={(e) => {
                        console.log('error: ', e)}}
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
            </Form>
        </Modal>
    );
};

export default NewItemModal;