import React from 'react';
import {Form, Input, InputNumber, Modal} from "antd";

const validateMessages = {
    required: '${label} обязательно!',
    types: {
        number: 'Некорректная цена!',
    },
    number: {
        range: '${label} не должна быть меньше 0',
    },
};

const EditProductModal = ({handleOk, confirmLoading, open, setOpen, form, currentItem}) => {
    return (
        <Modal
            title="Редактирование продукта"
            okText={"Редактировать"}
            cancelText={"Отмена"}
            visible={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={() => (setOpen(false))}
        >
            <Form
                className={"pt-4"}
                layout="vertical"
                form={form}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name='name'
                    label="Название"
                    initialValue={currentItem.name}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='price'
                    label="Цена"
                    initialValue={currentItem.price}
                    rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 10000000000000,
                        },
                    ]}
                >
                    <InputNumber/>
                </Form.Item>
                <Form.Item
                    name='description'
                    label="Описание"
                    initialValue={currentItem.description}
                >
                    <Input.TextArea/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditProductModal;