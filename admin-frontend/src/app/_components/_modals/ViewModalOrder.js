import React, { useState } from 'react';
import {Modal, Descriptions, Radio, message, notification, List, Avatar, Skeleton} from "antd";
import axios from 'axios';
import {getSession} from "@/lib";
import {config} from "../../../../config";


let apiUrl = `${config.baseUrl}/api/v1/order`
const ViewModalOrder = ({ visible, order, onOk, onCancel }) => {
    const [status, setStatus] = useState(order ? order.order_status : "");

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    // const formatItemName = (name) => {
    //     return name.split('/')[0];
    // }

    // const formatItemDescription = (name, description) => {
    //     const infoFromName = name.substring(name.indexOf('/'));
    //     return infoFromName + "\n" + description;
    // };

    const handleStatusChange = async (e) => {
        const newStatus = e.target.value;
        const session = await getSession();
        console.log(session)
        const config = {
            headers: {
                Authorization: `Bearer ${session.user.accessToken}`,
            },
        }
        try {
            await axios.patch(`${apiUrl}/${order.id}/`, { order_status: newStatus }, config);
            setStatus(newStatus);
            message.success('Order status updated successfully');
        } catch (error) {
            console.error('Error updating order status:', error);
            message.error('Failed to update order status');
        }
    };

    return (
        <Modal
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            okText="Accept"
            cancelText="Cancel"
            width={800}
            className={'top-7'}
        >
            {order && (
                <>
                    <Descriptions column={2} title="Информация о заказе">
                        <Descriptions.Item label="Номер заказа">{order.id}</Descriptions.Item>
                        <Descriptions.Item label="Получатель">{order.recipient_name}</Descriptions.Item>
                        <Descriptions.Item label="Номер получателя">{order.recipient_phone}</Descriptions.Item>
                        <Descriptions.Item label="Адрес">{order.address},{order.floor} дом,{order.flat} этаж</Descriptions.Item>
                        <Descriptions.Item label="Комментарий">{order.comment_for_address}</Descriptions.Item>
                        <Descriptions.Item
                            label="Способ оплаты">{order.payment_status.status}</Descriptions.Item>
                        <Descriptions.Item label="Итого">₸ {order.total_cost}</Descriptions.Item>
                        <Descriptions.Item label="Дата создания">{formatDate(order.created_at)}</Descriptions.Item>
                    </Descriptions>
                    <div style={{marginTop: 20}}>
                        <p>Изменить статус:</p>
                        <Radio.Group onChange={handleStatusChange} value={status}>
                            <Radio.Button value="P">В обработке</Radio.Button>
                            <Radio.Button value="C">Доставлено</Radio.Button>
                            <Radio.Button value="O">В пути</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div style={{marginTop: 20}}>
                        <p>Товары:</p>
                        <List
                            dataSource={order.order_items}
                            renderItem={item => (
                                <List.Item>
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            avatar={<Avatar shape="square" size={76} src={item.product.img_url} />}
                                            title={<span>{item.product.name}</span>}
                                            description={
                                                <>
                                                    <div className={'w-full flex-row'}>
                                                        <div className={'flex w-1/2 flex-col'}>
                                                            <div>Цена: {item.product.price} ₸</div>
                                                            <div>Кол-во: {item.quantity} шт.</div>
                                                            <div>Общ. цена: {item.cost} ₸</div>
                                                        </div>
                                                        <div className={'flex-col w-1/2'}>
                                                            <div>Артикул: {item.product.article}</div>
                                                            <div>Описание: {item.product.description}</div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        />
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                    </div>
                </>
            )}
        </Modal>
    );
};

export default ViewModalOrder;
