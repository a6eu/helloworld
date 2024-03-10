"use client"

import React, {useEffect, useState} from 'react';
import axios from "axios";
import useFetchData from "@/app/_components/useFetchData";
import {log} from "next/dist/server/typescript/utils";
import {Avatar, Button, List, Skeleton} from "antd";
import {DeleteOutlined, EditOutlined, PlusOutlined} from "@ant-design/icons";
import NewNewsModal from "@/app/_components/NewNewsModal";



const apiUrl = 'https://shop-01it-group.up.railway.app/api/v1/news/'
const Page = () => {
    const [list, setList] = useState([]);

    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [initLoading, setInitLoading] = useState(false);
    const [reloadData, setReloadData] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);


    const [openAddNewsModal, setOpenAddNewsModal] = useState(false);

    useEffect(() => {
        fetchData(apiUrl)
    }, [reloadData])

    function fetchData(url) {
        useFetchData(url, setList, setTotal, setInitLoading)
            .then(r => {console.log(r.data)})
    }

    const handleReload = () => {
        setReloadData(!reloadData);
    }

    const formatItemTitle = (name) => {
        return name.split('/')[0];
    }

    const formatItemDescription = (name, description) => {
        const infoFromName = name.substring(name.indexOf('/'));
        return infoFromName + "\n" + description;
    };

    const deleteNewsById = (id) => {
        const accessToken = localStorage.getItem('accessToken');
        const headers = {
            "Authorization": `Bearer ${accessToken}`,
        };

        const deleteUrl = apiUrl + `${id}/`;
        console.log(deleteUrl)
        axios.delete(deleteUrl, { headers })
            .then((r) => {
                setReloadData(!reloadData);
            })
            .catch((e) => {
                console.error('Error deleting news item:', e);
            });
    }

    const handleCurrentItem = (item) => {
        setCurrentItem(item);
    };
    return (
        <div className={'flex flex-col '}>
            <div className={'flex justify-between w-full'}>
                 <h2>Новости</h2>
                <Button type="primary" icon={<PlusOutlined/>} size={'large'} onClick={() => setOpenAddNewsModal(true)}>
                    Добавить новость
                </Button>
            </div>
            <List
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list}
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                        if (currentPage < page) {
                            fetchData(apiUrl + `?&page=${page}`);
                        } else {
                            fetchData(apiUrl + `?&page=${page}`);
                        }
                        setCurrentPage(page);
                    },
                    pageSize: 24,
                    total: total
                }}
                renderItem={(item) => (
                    <List.Item
                        actions={[<EditOutlined className={"hover:cursor-pointer hover:color-white"}/>,
                            <DeleteOutlined className={"hover:cursor-pointer hover:color-white"} onClick={() => (deleteNewsById(item.id))}/>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta className={"break-words"} onClick={() => handleCurrentItem(item)}
                                            avatar={item.image ? <Avatar shape="square" size={64}  src={item.image} /> : <Avatar shape="square" size={64} src={'/defaultImage.png'} />}
                                            title={<span>{formatItemTitle(item.title)}</span>}
                                            description={item.content}
                            />

                        </Skeleton>

                    </List.Item>
                )}
            />
            <NewNewsModal open={openAddNewsModal} setOpen={setOpenAddNewsModal} setReloadData={handleReload}/>
        </div>
    );
};

export default Page;