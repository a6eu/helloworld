import React, {useState} from 'react';
import {Form, Input, Modal, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import axios from "axios";

const apiUrl = 'https://shop-01it-group.up.railway.app/api/v1/news/'
const validateMessages = {
    required: '${label} обязательно!',
    types: {
        number: 'Некорректная цена!',
    },
    number: {
        range: '${label} не должна быть меньше 0',
    },
};


const NewNewsModal = ({open, setOpen, setReloadData}) => {
    const [form] = Form.useForm();
    const [confirmLoading, setConfirmLoading] = useState(false);

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
        setConfirmLoading(true);
        form.validateFields()
            .then((values) => {
                console.log(values)
                const accessToken = localStorage.getItem('accessToken');

                const  body = {
                    "title": values.title,
                    "content": values.content,
                }

                const config = {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    }}

                axios.post(apiUrl, body, config)
                    .then((r) => {
                        console.log(r)}
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
            title="Добавление новости"
            okText={"Добавить"}
            cancelText={"Отмена"}
            visible={open}
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
                    label="Название новости"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='content'
                    label="Контент"
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

export default NewNewsModal;