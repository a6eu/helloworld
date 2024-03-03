"use client"
import React, {useEffect, useState} from 'react';
import {Avatar, List, Modal, Skeleton} from "antd";
import axios from 'axios';
import {EditOutlined} from "@ant-design/icons";


const apiUrl = 'https://shop-01it-group.up.railway.app/api/v1/products/';

const Page = () => {
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [initLoading, setInitLoading] = useState(false);

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    useEffect(() => {
        fetchData(apiUrl)
    }, []);

    function fetchData(url) {
        setInitLoading(true);
        axios.get(url)
            .then(response => {
                setData(response.data);
                setList(response.data.results);
                setTotal(response.data.count)
                console.log('response:', response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
        setInitLoading(false);
    }

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setConfirmLoading(false);
            setOpen(false)
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
                        },
                        pageSize: 4,
                        total: total
                    }}
                    renderItem={(item) => (
                        <List.Item
                            actions={[<EditOutlined className={"hover:cursor-pointer hover:color-white"} onClick={showModal}/>,
                                <a key="list-loadmore-more">more</a>]}
                        >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    // avatar={<Avatar src={} />}
                                    title={<span>{item.name}</span>}
                                    description={item.description.substring(0, 50) + "..."}
                                />
                                <div>content</div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
                <Modal
                    title="Title"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <Input defaultValue={} />
                </Modal>
            </>
        </div>
    );
};

export default Page;