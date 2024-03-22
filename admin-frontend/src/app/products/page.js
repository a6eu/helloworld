"use client"
import React, {useEffect, useState} from 'react';
import {Avatar, Button, Form, List, Skeleton} from "antd";
import axios from 'axios';
import {DeleteOutlined, EditOutlined, PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import EditProductModal from "@/app/_components/_modals/EditProductModal";
import NewProductModal from "@/app/_components/_modals/NewProductModal";
import DeleteProductModal from "@/app/_components/_modals/DeleteProductModal";
import useFetchData from "@/app/_components/useFetchData";
import {config} from "@/../config";


const apiUrl = `${config.baseUrl}/api/v1/products/`;


const Page = () => {
    const [form] = Form.useForm();

    const [list, setList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [initLoading, setInitLoading] = useState(false);

    const [openEditProductModal, setOpenEditProductModal] = useState(false);
    const [openNewProductModal, setOpenNewProductModal] = useState(false);
    const [openDeleteProductModal, setOpenDeleteProductModal] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        fetchData(apiUrl);
    }, []);

    useEffect(() => {
        if (currentItem) {
            const numericValue = isNaN(currentItem.price) ? 0 : parseFloat(currentItem.price);
            form.setFieldsValue({name: currentItem.name, description: currentItem.description, price: numericValue});
        }
    }, [form, currentItem]);

    function fetchData(url) {
        useFetchData(url, setList, setTotal, setInitLoading)
            .then(r => {console.log(r)})
    }

    const showModal = (item) => {
        setCurrentItem(item);
        console.log(item);
        setOpenEditProductModal(true);
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
                    axios.put(apiUrl + `${currentItem.id}`, body)
                        .then((response) => {
                            console.log(response);
                            fetchData(apiUrl + `?search=${searchValue}&page=${currentPage}`);
                        }).catch((error) => {
                        console.log(error)
                    })

                    setConfirmLoading(false);
                    setOpenEditProductModal(false);
                })
                .catch((info) => {
                    console.log("Validate Failed:", info);
                    setConfirmLoading(false);
                });

        }, 1000);
    };

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        console.log(_e);
        setSearchValue(value);

        searchRequest(value);
    };

    const searchRequest = (value) => {
        setInitLoading(true);
        axios.get(`${apiUrl}?search=${value}`)
            .then((response) => {
                console.log(response);
                if (response.data && response.data.results) {
                    setList(response.data.results);
                    setTotal(response.data.count);
                }
                setInitLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setInitLoading(false);
            });
    };

    const formatItemName = (name) => {
        return name.split('/')[0];
    }

    const formatItemDescription = (name, description) => {
        const infoFromName = name.substring(name.indexOf('/'));
        return infoFromName + "\n" + description;
    };
    return (
        <div>
            <>
                <div className={"w-full flex justify-between mb-10"}>
                    <div className={"w-[70%] flex"}>
                        <Search loading={initLoading} style={{marginRight: 10}}
                                placeholder="Для поиска введите информацию о продукте" allowClear size={'large'}
                                onSearch={onSearch}
                                enterButton/>
                    </div>
                    <Button type="primary" icon={<PlusOutlined/>} size={'large'} onClick={() => setOpenNewProductModal(true)}>
                        Новый продукт
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
                                fetchData(apiUrl + `?search=${searchValue}&page=${page}`);
                            } else {
                                fetchData(apiUrl + `?search=${searchValue}&page=${page}`);
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
                                <DeleteOutlined className={"hover:cursor-pointer hover:color-white"}
                                onClick={() => setOpenDeleteProductModal(true)}/>]}
                        >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta className={"break-words"}
                                    avatar={item.img_url ? <Avatar shape="square" size={64}  src={item.img_url} /> : <Avatar shape="square" size={64} src={'/defaultImage.png'} />}
                                    title={<span>{formatItemName(item.name)}</span>}
                                    description={formatItemDescription(item.name, item.description)}
                                />

                            </Skeleton>

                        </List.Item>
                    )}
                />
                <EditProductModal handleOk={handleOk} setOpen={setOpenEditProductModal} open={openEditProductModal} confirmLoading={confirmLoading}
                                  form={form} currentItem={currentItem}/>
                <NewProductModal open={openNewProductModal} setOpen={setOpenNewProductModal} />
                <DeleteProductModal open={openDeleteProductModal} setOpen={setOpenDeleteProductModal} />
            </>
        </div>
    );
};

export default Page;