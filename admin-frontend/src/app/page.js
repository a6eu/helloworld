"use client"

import {Avatar, Button, Card, Col, Collapse, Row, Skeleton, Statistic} from "antd";

import {useEffect, useState} from "react";
import Meta from "antd/es/card/Meta";
import {EditOutlined, ShoppingOutlined, UserOutlined} from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import withAuth from "@/app/_components/AuthorizationWrapper";

const CollapsedItem = ({name, content, productName}) => {
    return (
        <div className={"flex justify-between"}>
            <p>{name}</p>
            <p>{productName}</p>
            <p style={{width: '50%'}}>{content}</p>
        </div>
    );
};

const ExpandedItem = ({content}) => {
    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    return (
        <div className={"flex flex-col justify-between text-base"}>
            <h3 className={'text=lg font-bold'}>Отзыв:</h3>
            <p style={{width: '70%', marginTop: 6, marginBottom: 16}}>{content}</p>

            <h3 className={'text=lg font-bold mb-2'}>Ваш ответ:</h3>
            <TextArea
                showCount
                maxLength={100}
                onChange={onChange}
                placeholder="Поле для ответа"
                style={{height: 120, width: '70%'}}
            />

            <Button style={{marginTop: 24, width: 150}} icon={<EditOutlined/>}>Ответить</Button>
        </div>);
};

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

const App = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState('');
    // const [reviews, setReviews] = useState(initItems);
    let url = `https://shop-01it-group.up.railway.app/auth/users/profile/`
    useEffect(() => {
        const getProfile = async () => {
            const bearerToken = localStorage.getItem("accessToken");
            console.log(bearerToken)
            const config = {
                headers: {
                    Authorization: `Bearer ${bearerToken}`,
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
            <sapn className={'text-xl font-bold '}>Dashboard</sapn>
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
        </div>)
        ;
};
export default App;