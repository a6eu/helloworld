import UserNavbar from "@/components/UserNavbar";
import MainContainer from "@/components/MainContainer";
import React, {useEffect, useState} from "react";
import imported from "@/order.json"
import {Disclosure, Transition} from "@headlessui/react";
import Image from "next/image";
import dell from "../public/images/DELL.svg"
import dellPhoto from "../public/images/dellPowerEdge.svg"
import Products from "@/components/Products";
import emptyBox from "@/public/images/emptyBox.svg";

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
        if (count >= 11 && count <= 20) {
            return 'заказов';
        } else {
            const lastDigit = count % 10;
            const lastTwoDigits = count % 100;

            if (lastDigit === 1) {
                return 'заказ';
            } else if (lastDigit >= 2 && lastDigit <= 4) {
                return 'заказа';
            } else if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
                return 'заказов';
            } else {
                return 'заказов';
            }
        }
    }

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

                        {orders.length > 0 ? (
                            <div className="flex flex-col shadow-lg rounded mt-1 bg-white w-full ">
                                <div className="flex h-[40px] py-3 shadow z-10 w-full font-sans border-b">
                                    <div className="flex w-1/4 pl-3">Номер заказа</div>
                                    <div className="flex w-1/4">Сумма заказа</div>
                                    <div className="flex w-1/4">Дата</div>
                                    <div className="flex w-1/4">Статус</div>
                                </div>
                                <div className="overflow-y-auto max-h-[80vh]">
                                    {orders.map((order, index) => (
                                        <Disclosure key={index}>
                                            {({open}) => (
                                                <>
                                                    <Disclosure.Button
                                                        className="flex flex-col w-full py-2 border-t"
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

                                                    {order.order_items.map((item => (
                                                        <Transition
                                                            show={open}
                                                            enter="transition-opacity duration-75"
                                                            enterFrom="opacity-0"
                                                            enterTo="opacity-100"
                                                            leave="transition-opacity duration-150"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                            key={item.product_id}
                                                        >
                                                            <Disclosure.Panel
                                                                className=" flex flex-col w-full h-[110px] px-4 py-5 р-30 border-2 border-b-0 border-l-0 border-r-0 border-dashed">

                                                                <div className="w-full flex flex-row">
                                                                    <div className="flex gap-3 flex-row w-1/2">
                                                                        <div>
                                                                            <Image width={100} height={90}
                                                                                   src={dellPhoto}
                                                                                   alt="Product Photo"></Image>
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <h1>{item.product_name}</h1>
                                                                            <div className="font-sans mt-3">
                                                                                <h2>{item.price} ₸<font
                                                                                    className="text-[#1075B2] mb-[5px] font-bold"> x </font> {item.quantity}
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
                                                            </Disclosure.Panel>
                                                        </Transition>
                                                    )))}

                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className={'w-full flex flex-col items-center h-[60vh]'}>
                                <div className="flex justify-center mt-20">
                                    <Image className="w-28 h-28" src={emptyBox} alt="empty cart"></Image>
                                </div>
                                <div className="flex justify-center ProductSansLight text-lg">Товары не найдены
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <h3 className="flex justify-center mt-12 ProductSansLight text-xl text-[#1075B2]">ПЕРСОНАЛЬНЫЕ
                    РЕКОМЕНДАЦИИ</h3>
                <Products/>
            </div>
        </MainContainer>
    )

}

export default my_orders;