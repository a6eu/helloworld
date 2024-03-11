"use client"

import {Layout, Menu, Image} from "antd";
import React from 'react';
import {
    ApartmentOutlined,
    BankOutlined,
    PieChartOutlined,
    ProductOutlined,
    ShoppingOutlined,
    SwitcherOutlined,
    UserOutlined,
    LoginOutlined
} from '@ant-design/icons';
import Link from "next/link";

const {Header, Content, Footer} = Layout;

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
    getItem((<Link href={"/login"}>Войти</Link>), '8', <LoginOutlined />),
];
function SidebarWrapper({children}) {

    return (
        <Layout className={"min-h-[100vh] -m-2 p-0"}>
            <Header className={'w-full  mx-auto'}>
                <div className={'max-w-screen-lg flex mx-auto'}>
                    <div className="demo-logo-vertical text-white flex text-l">
                        {/*<Image widt={'65'} src={'logo.svg'} alt={"Astana It Group"} preview={false}/>*/}
                    </div>
                    <Menu className={'m-0'} inlineCollapsed={false} theme="dark" mode="horizontal" items={items}/>
                </div>
            </Header>
            <Layout>
                <Content
                    className={"m-8"}
                >
                    <div className={`max-w-screen-lg mx-auto`}>
                        {children}
                    </div>
                </Content>
                <Footer
                    className={"text-center"}
                >
                    Astana IT Group ©{new Date().getFullYear()} Created by <span
                    className={"italic font-bold"}>hello-world</span>
                </Footer>
            </Layout>
        </Layout>
    );
}

export default SidebarWrapper;
