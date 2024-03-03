"use client"
import React, {useEffect, useState} from 'react';
import {Form, Input, InputNumber, List, Modal, Skeleton} from "antd";
import axios from 'axios';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";


const apiUrl = 'https://shop-01it-group.up.railway.app/api/v1/products/';
const editUrl =  'https://shop-01it-group.up.railway.app/api/v1/products/';

const validateMessages = {
    required: '${label} обязательно!',
    types: {
        number: '${label} некорректная цена!',
    },
    number: {
        range: '${label} цена не должна быть меньше 0',
    },
};

const Page = () => {
    const [form] = Form.useForm();

    const [list, setList] = useState([]);

    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [initLoading, setInitLoading] = useState(false);

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        fetchData(apiUrl)
    }, []);

    useEffect(() => {
        if (currentItem) {
            form.setFieldsValue({name: currentItem.name, description: currentItem.description, price: currentItem.price});
        }
    }, [form, currentItem]);

    function fetchData(url) {
        setInitLoading(true);
        axios.get(url)
            .then(response => {
                setList(response.data.results);
                setTotal(response.data.count);
                // setCurrentPage(response.data)
                console.log('response:', response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
        setInitLoading(false);
    }

    const showModal = (item) => {
        setCurrentItem(item);
        console.log(item);
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            form
                .validateFields()
                .then((values) => {
                    console.log(values);
                    const body = {
                        brand: currentItem.brand.id,
                        name: values.name,
                        article: currentItem.article,
                        price: values.price,
                        description: values.description,
                        rating_total: currentItem.rating_total,
                        img_url: currentItem.img_url,
                        quantity: currentItem.quantity,
                        category: currentItem.category.id,
                    }
                    console.log(body)
                    axios.put(editUrl + `${currentItem.id}`, body).then((response) => {
                        console.log(response);
                    }).catch((error) => {
                        console.log(error)
                    })

                    setConfirmLoading(false);
                    setOpen(false);
                })
                .catch((info) => {
                    console.log("Validate Failed:", info);
                    setConfirmLoading(false);
                });

        }, 1000);
    };

    return (
        <div>
            <>
                <List
                    loading={initLoading}
                    itemLayout="horizontal"
                    dataSource={list}
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                            if (currentPage < page) {
                                fetchData(apiUrl + `?page=${page}`);
                            } else {
                                fetchData(apiUrl + `?page=${page}`);
                            }
                            setCurrentPage(page);
                        },
                        pageSize: 24,
                        total: total
                    }}
                    renderItem={(item) => (
                        <List.Item
                            actions={[<EditOutlined className={"hover:cursor-pointer hover:color-white"}
                                                    onClick={() => (showModal(item))}/>,
                                <DeleteOutlined className={"hover:cursor-pointer hover:color-white"}/>]}
                        >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    // avatar={<Avatar src={} />}
                                    title={<span>{item.name}</span>}
                                    description={item.description.substring(0, 50) + "..."}
                                />

                            </Skeleton>

                        </List.Item>
                    )}
                />
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
                        >
                            <Input defaultValue={currentItem.name}/>
                        </Form.Item>
                        <Form.Item
                            name='price'
                            label="Цена"
                            rules={[
                                {
                                    type: 'number',
                                    min: 0,
                                    max: 10000000000000,
                                },
                            ]}
                        >
                            <InputNumber defaultValue={currentItem.price}/>
                        </Form.Item>
                        <Form.Item name='description' label="Описание">
                            <Input.TextArea/>
                        </Form.Item>
                    </Form>
                </Modal>

            </>
        </div>
    );
};

export default Page;