import UserNavbar from "@/components/UserNavbar";
import MainContainer from "@/components/MainContainer";
import React, {useEffect, useState} from "react";
import imported from "@/order.json"
import {Disclosure} from "@headlessui/react";
import Image from "next/image";
import dell from "../public/images/DELL.svg"
import dellPhoto from "../public/images/dellPowerEdge.svg"
import emptyCart from "@/public/images/emptyCart.svg";
import Products from "@/components/Products";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await imported;
    const data = await res.orders;

    return {
        props: {products: data}
    }
}

function my_orders(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedOrder, setSelectedOrder] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [orders, setOrder] = useState(props.products);

    const handleToggle = (orderId) => {
        setSelectedOrder((prev) => (prev === orderId ? null : orderId));
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('your_api_endpoint_here');
                const data = await response.json();
                orders(data.order);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchData();
    }, []);

    function getOrdersText(count) {
        if (count === 1) {
            return 'заказ';
        } else if (count >= 2 && count <= 4) {
            return 'заказа';
        } else {
            return 'заказов';
        }
    }

    if (orders.length !== 0) {
        return (
            <MainContainer>
                <div className="flex justify-center">
                    <div className="flex justify-between w-full">
                        <UserNavbar/>
                        <div className="w-4/5 mb-[200px]">
                            <h3 className="text-[#1075B2] text-[15px] mt-4 uppercase">Мои заказы</h3>

                            <p className="font-sans mt-2 text-[#1075B2]">
                                У вас {orders.length} {getOrdersText(orders.length)}
                            </p>


                            <div className="flex flex-col mt-1 h-min bg-white w-full ">
                                <div className="flex h-[40px] py-4 w-full font-sans">
                                    <div className="flex w-1/4 pl-3">Номер заказа</div>
                                    <div className="flex w-1/4">Сумма заказа</div>
                                    <div className="flex w-1/4">Дата</div>
                                    <div className="flex w-1/4">Статус</div>
                                </div>

                                {orders.map((order, index) => (
                                    <Disclosure key={index}>
                                        {({open}) => (
                                            <>
                                                <Disclosure.Button className="flex flex-col w-full py-2 border-t"
                                                >
                                                    <div className="flex w-full">
                                                        <div className="flex w-1/4 pl-3">№ {order.id}</div>
                                                        <div className="flex w-1/4">{order.total_price} ₸</div>
                                                        <div className="flex w-1/4">{order.updated_at}</div>
                                                        <div
                                                            className="flex w-[18.75%] text-lime-700">{order.status}</div>
                                                        <div className="flex w-[6.25%] pt-1 cursor-pointer"
                                                             onClick={handleToggle}>
                                                            <svg className={`${open ? 'rotate-180 transform' : ''}`}
                                                                 width="16" height="10" viewBox="0 0 16 10"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.4336 1L8.43359 9.5" stroke="#1075B2"
                                                                      strokeLinecap="round"/>
                                                                <path d="M1.43359 1L8.43359 9.5" stroke="#1075B2"
                                                                      strokeLinecap="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>

                                                </Disclosure.Button>
                                                <Disclosure.Panel
                                                    className="flex flex-col w-full h-60 transition duration-300 ease-in-out">
                                                    {order.order_items.map((item => (
                                                        <div
                                                            className="h-min w-full border-2 border-b-0 border-l-0 border-r-0 border-dashed flex"
                                                            key={item.product_id}>
                                                            <div className="w-full flex flex-row py-5 px-4">
                                                                <div className="flex gap-3 flex-row w-1/2">
                                                                    <div>
                                                                        <Image width={100} height={90} src={dellPhoto}
                                                                               alt="Product Photo"></Image>
                                                                    </div>
                                                                    <div className="flex flex-col">
                                                                        <h1>{item.product_name}</h1>
                                                                        <div className="font-sans mt-3">
                                                                            <h2>{item.price} ₸<font
                                                                                className="text-[1075B2] mb-1"> x </font> {item.quantity}
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex w-1/2 gap-3 mt-5">
                                                                    <div className=" mb-2">
                                                                        <Image width={30} height={30} src={dell}
                                                                               alt={"Dell_logo"}/>
                                                                    </div>
                                                                    <div className="flex gap-2">
                                                                        <button
                                                                            className="h-8 w-40 rounded-md bg-[#1075B2] bg-opacity-10 text-[#1075B2]">
                                                                            Оставить отзыв
                                                                        </button>
                                                                        <button
                                                                            className="h-8 w-40 rounded bg-[#1075B2] bg-opacity-10 text-[#1075B2]">
                                                                            В корзину
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="flex justify-center mt-12 ProductSansLight text-xl text-[#1075B2]">ПЕРСОНАЛЬНЫЕ
                        РЕКОМЕНДАЦИИ</h3>
                    <Products/>
                </div>
            </MainContainer>
        );
    } else {
        return (
            <MainContainer>
                <UserNavbar/>
                <div className="flex justify-center mt-10">
                    <Image className="w-28 h-28" src={emptyCart} alt="empty cart"></Image>
                </div>
                <div className="flex justify-center ProductSansLight text-lg my-[40px]">У вас пока нет заказов.</div>
                <div className="flex justify-center">
                    <Link
                        href={"/"}
                        className="j ProductSansLight text-sm text-[#1075B2] border-1px border-[#1075B2] py-2 px-10 rounded-md transition ease-in-out delay-50 hover:bg-[#1075B2] hover:text-white">На
                        главную
                    </Link>
                </div>
                <div>
                    <h3 className="flex justify-center mt-12 ProductSansLight text-xl text-[#1075B2]">ПЕРСОНАЛЬНЫЕ
                        РЕКОМЕНДАЦИИ</h3>
                    <Products/>
                </div>
            </MainContainer>
        );
    }

}

export default my_orders;