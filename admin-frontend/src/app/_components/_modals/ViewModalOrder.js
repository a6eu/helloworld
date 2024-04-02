import React, { useState } from 'react';
import { Modal, Descriptions, Radio, message, notification } from "antd";
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

            notification.success({
                message: 'Status Changed',
                description: `Order status changed to ${newStatus}`,
                duration: 5
            });
        } catch (error) {
            console.error('Error updating order status:', error);
            message.error('Failed to update order status');
        }
    };

    return (
        <Modal
            title="Order Details"
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            okText="Accept"
            cancelText="Cancel"
        >
            {order && (
                <>
                    <Descriptions title="Order Information">
                        <Descriptions.Item label="Order ID">{order.id}</Descriptions.Item>
                        <Descriptions.Item label="Recipient Name">{order.recipient_name}</Descriptions.Item>
                        <Descriptions.Item label="Address">{order.address}</Descriptions.Item>
                        <Descriptions.Item label="Payment Method">{order.payment_status && order.payment_status.status}</Descriptions.Item>
                        <Descriptions.Item label="Total Cost">₸ {order.total_cost}</Descriptions.Item>
                        <Descriptions.Item label="Date Created">{formatDate(order.created_at)}</Descriptions.Item>
                    </Descriptions>
                    <div style={{ marginTop: 20 }}>
                        <p>Change Status:</p>
                        <Radio.Group onChange={handleStatusChange} value={status}>
                            <Radio.Button value="P">Processing</Radio.Button>
                            <Radio.Button value="P">Awaiting Payment</Radio.Button>
                            <Radio.Button value="D">Delivering</Radio.Button>
                        </Radio.Group>
                    </div>
                </>
            )}
        </Modal>
    );
};

export default ViewModalOrder;
