import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Select, InputNumber, Space } from 'antd';
import axios from 'axios';
import { config } from '../../../../config';
import {getSession} from "@/lib";

const { Option } = Select;

const CreateOrderModal = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${config.baseUrl}/api/v1/products/?search=`);
                setProducts(response.data.results);
                setLoading(false);
                console.log(response);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleProductChange = (productId, index) => {
        const updatedProducts = [...selectedProducts];
        updatedProducts[index].id = productId;
        setSelectedProducts(updatedProducts);
    };

    const handleQuantityChange = (quantity, index) => {
        const updatedProducts = [...selectedProducts];
        updatedProducts[index].quantity = quantity;
        setSelectedProducts(updatedProducts);
    };

    const handleAddProduct = () => {
        setSelectedProducts([...selectedProducts, { id: null, quantity: 1 }]);
    };

    const handleRemoveProduct = index => {
        const updatedProducts = [...selectedProducts];
        updatedProducts.splice(index, 1);
        setSelectedProducts(updatedProducts);
    };

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            const orderData = {
                recipient_name: values.recipient_name,
                recipient_phone: values.recipient_phone,
                address: values.address,
                flat: values.flat || null,
                floor: values.floor || null,
                comment_for_address: values.comment_for_address || '',
                order_items: selectedProducts.map(product => ({
                    product_id: product.id,
                    quantity: product.quantity
                }))
            };
            selectedProducts.map((product) => {
                console.log(product.id);
                console.log(product.quantity);
            })
            const session = await getSession();
            const conf = {
                headers: {
                    Authorization: `Bearer ${session.user.accessToken}`,
                },
            };
            await axios.post(`${config.baseUrl}/api/v1/orders/`, orderData, conf);
            form.resetFields();
            onCreate();
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <Modal
            visible={visible}
            title="Create New Order"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={handleSubmit}
            confirmLoading={loading}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="recipient_name"
                    label="Имя"
                    rules={[{ required: true, message: 'Please enter recipient name' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="recipient_phone"
                    label="Номер телефона"
                    rules={[{ required: true, message: 'Please enter recipient phone number' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Адрес"
                    rules={[{ required: true, message: 'Please enter address' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="floor"
                    label="Этаж"
                    rules={[{ required: true, message: 'Please enter address' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="flat"
                    label="Квартира"
                    rules={[{ required: true, message: 'Please enter address' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="comment for address"
                    label="Доп. информация"
                    rules={[{ required: true, message: 'Please enter address' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Products">
                    {selectedProducts.map((product, index) => (
                        <Space className={index > 0 && 'mt-3'} key={index} size={"middle"} direction={"horizontal"}>
                            <Select
                                size={"middle"}
                                showSearch
                                placeholder="Search for a product"
                                optionFilterProp="children"
                                loading={loading}
                                onChange={value => handleProductChange(value, index)}
                                style={{ width: '300px' }}
                                value={product.id}
                            >
                                {products.map(product => (
                                    <Option key={product.id} value={product.id}>
                                        {product.name}
                                    </Option>
                                ))}
                            </Select>
                            <InputNumber
                                min={1}
                                defaultValue={1}
                                value={product.quantity}
                                onChange={value => handleQuantityChange(value, index)}
                                style={{ width: '40px' }}
                            />
                            <Button type="primary" onClick={() => handleRemoveProduct(index)}>Remove</Button>
                        </Space>
                    ))}
                    <Button type="dashed" onClick={handleAddProduct} style={{ marginTop: '10px' }}>Add Product</Button>
                </Form.Item>

                {/*{selectedProducts.map((product, index) => (*/}
                {/*    <div key={index}>*/}
                {/*        <p>Product: {product.id}</p>*/}
                {/*        <p>Quantity: {product.quantity}</p>*/}
                {/*    </div>*/}
                {/*))}*/}
            </Form>
        </Modal>
    );
};

export default CreateOrderModal;
