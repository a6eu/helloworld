'use client'

import React, {useEffect, useState} from 'react';
import {config} from "../../../config";
import axios from "axios";
import { Cascader } from 'antd';

const apiUrl = `${config.baseUrl}/api/v1/categories/`;

const Page = () => {

    const [catalog, setCatalog] = useState([]);
    const [selected, setSelected] = useState([]);
    useEffect( () => {
        const addAttributes = (data) => {
            return data.map((item) => {
                if (item.children && item.children.length > 0) {
                    item.children = addAttributes(item.children);
                }
                return {
                    ...item,
                    value: item.name, // Assuming name should be the value
                    label: item.name, // Assuming name should be the label
                };
            });
        };

        const fetchCatalog = async () => {
            try {

                const response = await axios.get(apiUrl);
                console.log(response.data);
                const updatedCatalog = addAttributes(response.data)
                setCatalog(updatedCatalog);
            } catch (error) {
                console.log(error);
            }
        };

         fetchCatalog();
    }, []);

    const onChange = (values) => {
        console.log(values)
        setSelected([...values]);
    };
    return (
        <>
            <h2>
                Каталог
            </h2>
            <p>
                {
                    selected.map((item) => <>
                        <span>item</span>{` >> `}
                    </>)
                }
            </p>
            <Cascader.Panel options={catalog} onChange={onChange}/>
        </>
    );
};

export default Page;