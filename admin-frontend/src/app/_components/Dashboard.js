"use client"

import React, {useEffect, useState} from 'react';
import {Avatar, Card, Col, Collapse, Row, Skeleton, Statistic} from "antd";
import Meta from "antd/es/card/Meta";
import {ShoppingOutlined, UserOutlined} from "@ant-design/icons";
import axios from "axios";
import {config} from "@/../config";
import {getSession} from "@/lib";
import CollapsedItem from "@/app/_components/CollapsedItem";
import ExpandedItem from "@/app/_components/ExpandedItem";

const initItems = [
    {
        key: '1',
        label: <CollapsedItem name={"Yerbolat Mukan"}
                              content={"It is a long established fact that a reader will be distracted by the ..."}
                              productName={"Dr.Web"}/>,
        children: <ExpandedItem name={"Yerbolat Mukan"}
                                content={"It is a long established fact that a reader will be distracted by the established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established fact that a reader will be distracted by the"}
                                productName={"Dr.Web"}/>,
    },
    {
        key: '2',
        label: <CollapsedItem name={"Yerbolat Mukan"}
                              content={"It is a long established fact that a reader will be distracted by the ..."}
                              productName={"Dr.Web"}/>,
        children: <ExpandedItem name={"Yerbolat Mukan"}
                                content={"It is a long established fact that a reader will be distracted by the established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established fact that a reader will be distracted by the"}
                                productName={"Dr.Web"}/>,
    },
    {
        key: '3',
        label: <CollapsedItem name={"Yerbolat Mukan"}
                              content={"It is a long established fact that a reader will be distracted by the ..."}
                              productName={"Dr.Web"}/>,
        children: <ExpandedItem name={"Yerbolat Mukan"}
                                content={"It is a long established fact that a reader will be distracted by the established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established established fact that a reader will be distracted by the established fact that a reader will be distracted by the established fact that a reader will be distracted by the"}
                                productName={"Dr.Web"}/>,
    },
];


function Dashboard() {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState('');
    // const [reviews, setReviews] = useState(initItems);
    let url = `${config.baseUrl}/api/v1/auth/users/profile/`
    useEffect(() => {
        const getProfile = async () => {
            const session = await getSession();
            console.log(session)
            const config = {
                headers: {
                    Authorization: `Bearer ${session.user.accessToken}`,
                },
            }
            setIsLoading(true);
            try {
                const response = await axios.get(url, config);
                setUser(response.data);
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false);
        }

        getProfile().then(r => {
            console.log(r)
        })
    }, []);


    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div>
            <span className={'text-xl font-bold '}>Dashboard</span>
            <Row gutter={16}>
                <Col span={10}>
                    <Card
                        style={{margin: '0 auto'}}
                    >
                        <Skeleton loading={isLoading} avatar active>
                            <Meta
                                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"/>}
                                title={user.first_name + " " + user.last_name}
                                description="Информация об админе"
                            />
                        </Skeleton>
                    </Card>
                </Col>
                <Col span={7}>
                    <div className={"bg-white p-4 rounded-md mb-3"}>
                        <Statistic title="Количество пользователей"
                                   value={112893}
                                   prefix={<UserOutlined />}
                                   loading={isLoading}
                        />
                    </div>
                </Col>
                <Col span={7}>
                    <div className={"bg-white p-4 rounded-md"}>
                        <Statistic title="Активных заказов" value={112893} prefix={<ShoppingOutlined />} loading={isLoading}/>
                    </div>
                </Col>
            </Row>

            <h3 className={'text-lg mb-2 mt-4'} >Последние отзывы</h3>
            <Collapse style={{marginTop: 16, backgroundColor: '#caddfa', border: '#caddfa'}} items={initItems} defaultActiveKey={['1']} onChange={onChange}/>
        </div>
    );
}



export default Dashboard;