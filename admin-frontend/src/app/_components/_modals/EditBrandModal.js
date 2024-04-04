import React, {useEffect, useState} from 'react';
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


const EditBrandModal = ({apiUrl, item, open, setOpen, setReloadData}) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
        if (item) {
            let defaultValues = {
                title: item.name ? item.name : item.title,
                content: item.description ? item.description : item.content
            };
            console.log(item)
            form.setFieldsValue(defaultValues);
        }
    }, [form, item])

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
        form.validateFields()
            .then(async (values) => {
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

                axios.put(apiUrl + `${item.id}/`, formData, config)
                    .then((r) => {
                            console.log("editing response", r)
                        }
                    )
                    .catch((e) => {
                        console.log(e)
                    })

                form.resetFields();
                setOpen(false);
                setReloadData();
            })
    }

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <Modal
            title=""
            okText={"Изменить"}
            cancelText={"Отмена"}
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}>
            {
                item &&
                <Form
                    className={"pt-4"}
                    layout="vertical"
                    form={form}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name='name'
                        label="Название продукта"
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
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleChange}
                        onError={(e) => {
                            console.log('error: ', e)
                        }}
                    >
                        {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                </Form>
            }
        </Modal>
    );
};

export default EditBrandModal;