"use client"
import React, {useEffect, useState} from 'react';
import {Avatar, Button, DatePicker, List, Select, Skeleton, Space, Table, Tooltip} from 'antd';
import Search from "antd/es/input/Search";
import {EyeOutlined} from "@ant-design/icons";
import {config} from "../../../config";
import axios from "axios";
import {getSession} from "@/lib";
import ViewModalOrder from "@/app/_components/_modals/ViewModalOrder";

const apiUrl = `${config.baseUrl}/api/v1/orders/`;

const Page = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [Loading, setLoading] = useState(false);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [status, setStatus] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("")
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        fetchOrderData(apiUrl).then(r => console.error(r));
    }, [startTime, endTime, status, paymentMethod, searchValue, currentPage]);

    const handleOk = () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    async function fetchOrderData(url) {
        const session = await getSession();
        console.log(session)
        const config = {
            headers: {
                Authorization: `Bearer ${session.user.accessToken}`,
            },
        }
        console.log(session.user.accessToken)
        setLoading(true);
        try {
            const response = await axios.get(url, config);
            setData(response.data.results);
            setTotal(response.data.count);
            console.log('response:', response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    const onChangeStart = (_, dateStr) => {
        setStartTime(dateStr);
    };

    const onChangeEnd = (_, dateStr) => {
        setEndTime(dateStr);
    };

    useEffect(() => {
        console.log('Start:', startTime);
    }, [startTime]);

    useEffect(() => {
        console.log('End:', endTime);
    }, [endTime]);

    const showModal = (order) => {
        setSelectedOrder(order);
        setModalVisible(true);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'id',
            render: (id) => (
                <span className={'flex justify-center'}>{id}</span>
            )
        },
        {
            title: 'Recipient Name',
            dataIndex: 'recipient_name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Payment Method',
            dataIndex: 'payment_status',
            render: (paymentStatus) => (
                <span>{paymentStatus && paymentStatus.status}</span>
            ),
        },
        {
            title: 'Order Status',
            dataIndex: 'order_status',
        },
        {
            title: 'Total Cost',
            dataIndex: 'total_cost',
            render: (totalCost) => (
                <span>₸ {totalCost}</span>
            )
        },
        {
            title: 'Date created',
            dataIndex: 'created_at',
            render: (created_at) => (
                <span>{formatDate(created_at)}</span>
            )
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (orderId) => (
                <Space>
                    <Tooltip title="View">
                        <Button type="link" icon={<EyeOutlined />} onClick={() => (showModal(orderId))} />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div>
            <div className={"w-full flex flex-col justify-between mb-10"}>
                <div className={"w-full py-4 bg-white rounded flex-col  flex"}>
                    <div className={`flex justify-around`}>
                        <div className={`flex gap-3 flex-row items-center`}>
                            <p>Старт:</p>
                            <DatePicker rootClassName={`h-7`} showTime format="YYYY-MM-DD HH:mm:ss"
                                        onChange={onChangeStart}/>
                        </div>
                        <div className={`flex gap-3 items-center flex-row`}>
                            <p>Конец:</p>
                            <DatePicker rootClassName={`h-7`} showTime format="YYYY-MM-DD HH:mm:ss"
                                        onChange={onChangeEnd}/>
                        </div>
                    </div>
                    <div className={`flex-row flex justify-around`}>
                        <div className={`flex flex-row items-center gap-3`}>
                            <p>Статус заказа:</p>
                            <Select className={`flex`}
                                    placeholder="Статус"
                                    style={{
                                        flex: 1,
                                    }}
                                    options={[
                                        {
                                            value: 'P',
                                            label: 'В обработке',
                                        },
                                        {
                                            value: 'C',
                                            label: 'Доставлен',
                                        },
                                        {
                                            value: 'O',
                                            label: 'В пути',
                                        },
                                    ]}
                            />
                        </div>
                        <div className={`flex flex-row items-center gap-3`}>
                            <p>Способ оплаты:</p>
                            <Select className={`flex`}
                                    placeholder="Способ"
                                    defaultValue={""}

                                    style={{
                                        flex: 1,
                                    }}
                                    options={[
                                        {
                                            value: 'Kaspi',
                                            label: 'Kaspi',
                                        },
                                        {
                                            value: 'Банковская карта',
                                            label: 'Банковская карта',
                                        }
                                    ]}
                            />

                        </div>
                        <div className={`flex flex-row items-center gap-3`}>
                            <p>Поиск:</p>
                            <Search loading={Loading} style={{marginRight: 10}}
                                    placeholder="Для поиска введите информацию о продукте" allowClear size={'middle'}
                                    enterButton/>
                        </div>
                        <div className={`flex flex-row items-center gap-3`}>
                            <p>Новый заказ</p>
                            <Button type="primary" size={"middle"}>+</Button>
                        </div>
                    </div>

                </div>
                <Table
                    columns={columns}
                    dataSource={data}
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
                    onChange={onChange}
                    rowKey="id"
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: event => showModal(record)
                        };
                    }}
                />
                <ViewModalOrder
                    visible={modalVisible}
                    order={selectedOrder}
                    onOk={handleOk}
                    onCancel={handleCancel}
                />
            </div>
        </div>
    );
};

export default Page;