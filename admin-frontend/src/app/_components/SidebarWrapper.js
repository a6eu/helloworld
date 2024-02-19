"use client"

import {Breadcrumb, Layout, Menu, theme} from "antd";
import React, {useState} from 'react';
import {PieChartOutlined, ProductOutlined, SwitcherOutlined,} from '@ant-design/icons';
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
    getItem((<Link href={"/dashboard"}>Dashboard</Link>), '1', <PieChartOutlined/>),
    getItem((<Link href={"/products"}>Products</Link>), '2', <ProductOutlined/>),
    getItem((<Link href={"/news"}>News</Link>), '3', <SwitcherOutlined/>),
];

const pages = [
    {title: 'Dashboard'},
    {title: 'Products'},
    {title: 'News'}
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

                    <div className={`p-6 min-h-[360px] bg-white rounded-[8px]`}>
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
