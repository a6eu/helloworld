'use client'
import React, {useEffect, useState} from 'react';
import {config} from "../../../config";
import useFetchData from "@/app/_components/useFetchData";
import {List} from "antd";

const apiUrl = `${config.baseUrl}/api/v1/categories/`

const Page = () => {

    const [list, setList] = useState([]);

    const [total, setTotal] = useState(0);
    const [initLoading, setInitLoading] = useState(false);
    const [reloadData, setReloadData] = useState(false);

    useEffect(() => {
        fetchData(apiUrl)
    }, [reloadData])

    function fetchData(url) {
        useFetchData(url, setList, setTotal, setInitLoading)
            .then(r => {console.log(r.data)})
    }

    useEffect(() => {
        console.log('LIST: ', list); // Для отладки
    }, [list]);


    const handleReload = () => {
        setReloadData(!reloadData);
    }

    return (
        <div>
            <List
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item) => (
                    <List.Item actions={[]}>
                        {item.categoryId}
                    </List.Item>
                )}
                />
        </div>
    );
};

export default Page;