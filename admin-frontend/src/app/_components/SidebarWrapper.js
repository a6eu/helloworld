"use client"

import {Breadcrumb, Layout, Menu, theme} from "antd";
import React, {useState} from 'react';
import {PieChartOutlined, ProductOutlined, SwitcherOutlined, ApartmentOutlined, ShoppingOutlined, BankOutlined, UserOutlined} from '@ant-design/icons';
import Link from "next/link";

const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem((<Link href={"/"}>Dashboard</Link>), '1', <PieChartOutlined/>),
    getItem((<Link href={"/products"}>Продукты</Link>), '2', <ProductOutlined/>),
    getItem((<Link href={"/catalog"}>Каталог</Link>), '3', <ApartmentOutlined />),
    getItem((<Link href={"/orders"}>Заказы</Link>), '4', <ShoppingOutlined />),
    getItem((<Link href={"/news"}>Новости</Link>), '5', <SwitcherOutlined/>),
    getItem((<Link href={"/brands"}>Бренды</Link>), '6', <BankOutlined />),
    getItem((<Link href={"/users"}>Пользователи</Link>), '7', <UserOutlined />),
];

const pages = [
    {title: 'Dashboard'},
    {title: 'Продукты'},
    {title: 'Каталог'},
    {title: 'Заказы'},
    {title: 'Новости'},
    {title: 'Бренды'},
    {title: 'Пользователи'},
];


export default function SidebarWrapper({children}) {

    const [breadcrumbItems, setBreadcrumbItems] = useState([{title: 'Dashboard'}]);
    const [collapsed, setCollapsed] = useState(false);

    function onSelect(e) {
        setBreadcrumbItems([pages[e.key - 1]])
    }

    return (
        <Layout className={"min-h-[100vh]"}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical text-white w-full flex justify-center my-5 text-xl">Astana IT Group
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onSelect={(e) => onSelect(e)}/>
            </Sider>
            <Layout>
                <Content
                    className={"m-8"}
                >
                    <Breadcrumb
                        className={"mx-6 mb-4"}
                        items={breadcrumbItems}
                    />

                    <div className={`p-6`}>
                        {children}
                    </div>
                </Content>
                <Footer
                    className={"text-center"}
                >
                    Astana IT Group ©{new Date().getFullYear()} Created by <span
                    className={"italic font-bold"}>helloworld</span>
                </Footer>
            </Layout>
        </Layout>
    );
}
