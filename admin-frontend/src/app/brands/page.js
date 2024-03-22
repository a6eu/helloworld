"use client";

import React, {useEffect, useState} from 'react';
import {Avatar, Button, List, Skeleton} from "antd";
import {DeleteOutlined, EditOutlined, PlusOutlined} from "@ant-design/icons";
import useFetchData from "@/app/_components/useFetchData";
import {config} from "../../../config";
import NewItemModal from "@/app/_components/_modals/NewItemModal";
import ItemModal from "@/app/_components/_modals/ItemModal";
import DeleteItemModal from "@/app/_components/_modals/DeleteItemModal";
import EditItemModal from "@/app/_components/_modals/EditItemModal";

const apiUrl = `${config.baseUrl}/api/v1/brands/`

const Page = () => {

    const [list, setList] = useState([]);

    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [initLoading, setInitLoading] = useState(false);
    const [reloadData, setReloadData] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);


    const [openAddNewsModal, setOpenAddNewsModal] = useState(false);
    const [openNewsModal, setOpenNewsModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    useEffect(() => {
        useFetchData(apiUrl, setList, setTotal, setInitLoading).then(r => {
            console.log(r.data)})
    }, [reloadData])

    function fetchData(url) {
        useFetchData(url, setList, setTotal, setInitLoading)
            .then(r => {console.log(r.data)})
    }

    const handleReload = () => {
        setReloadData(!reloadData);
    }

    const formatItemTitle = (name) => {
        return name?.split('/')[0];
    }



    const handleCurrentItem = (item) => {
        setCurrentItem(item);
        setOpenNewsModal(true);
    };

    const handleDeleteItem = (item) => {
        setCurrentItem(item);
        setOpenDeleteModal(true);
    };

    const handleEditItem = (item) => {
        setCurrentItem(item);
        setOpenEditModal(true);
    };

    return (
        <div>
            <div className={'flex justify-between w-full'}>
                <h2>Бренды</h2>
                <Button type="primary" icon={<PlusOutlined/>} size={'large'} onClick={() => setOpenAddNewsModal(true)}>
                    Добавить бренд
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
                        actions={[
                            <EditOutlined onClick={() => handleEditItem(item)} className={"hover:cursor-pointer hover:color-white"}/>,
                            <DeleteOutlined onClick={() => handleDeleteItem(item)} className={"hover:cursor-pointer hover:color-white"} />]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta className={"break-words "}
                                            avatar={item.logo_url ? <Avatar className={'cursor-pointer'} shape="square" size={64}  src={item.logo_url} onClick={() => handleCurrentItem(item)} /> : <Avatar shape="square" size={64} src={'/defaultImage.png'} />}
                                            title={<span>{formatItemTitle(item.name)}</span>}
                                            description={item.description}
                            />

                        </Skeleton>

                    </List.Item>
                )}
            />
            <NewItemModal apiUrl={apiUrl} open={openAddNewsModal} setOpen={setOpenAddNewsModal} setReloadData={handleReload}/>
            <ItemModal open={openNewsModal} setOpen={setOpenNewsModal} news={currentItem} />
            <DeleteItemModal apiUrl={apiUrl} open={openDeleteModal} setOpen={setOpenDeleteModal} item={currentItem} setReloadData={handleReload}/>
            <EditItemModal apiUrl={apiUrl} open={openEditModal} setOpen={setOpenEditModal} item={currentItem} setReloadData={handleReload}/>
        </div>
    );
};

export default Page;