import UserNavbar from "@/components/UserNavbar";
import MainContainer from "@/components/MainContainer";
import React, {useEffect, useState, useContext} from "react";
import defaultImage from '@/public/images/picture.png'
import {Disclosure, Transition} from "@headlessui/react";
import Image from "next/image";
import emptyBox from "@/public/images/emptyBox.svg";
import axios from 'axios';
import { AlertContext } from "@/components/AlertContext";
import {config} from "@/config";
import { useCookies } from "react-cookie";
import { getSession } from "@/login";

function MyOrders() {
    const [orders, setOrders] = useState([]);
    const { showAlert } = useContext(AlertContext);
    const[cookies] = useCookies(['session'])


    
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get(`${config.baseUrl}/api/v1/orders/`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });
                setOrders(res.data); 
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            }
        };

        fetchOrders();
    }, []);
    console.log('orders: ');
    console.log(orders);
    
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleToggle = (orderId) => {
        setSelectedOrder((prev) => (prev === orderId ? null : orderId));
    };

    const handleButtonClick = async (product_id, quantity) => {
        console.log('in handleButtonClick');
        console.log('product_id: ' + product_id);
        console.log('quantity: ' + quantity);


        try {
            const session = await getSession(cookies);
            if (!session) {
                console.log("session not found")
            }
            const access = session?.user.accessToken
            const response = await axios.post(
                `${config.baseUrl}/api/v1/basket/products/`,
                {
                    product_id: product_id,
                    quantity: quantity
                },
                {
                    headers: {
                        Authorization: "Bearer " + access,
                    },
                }
            );

            if (response.status === 201) {
                showAlert('Ваш товар успешно добавлен в корзину!', 'success');
                
            }

        } catch (error) {
            console.error(error);
            showAlert('Возможно у нас нет столько продуктов, сколько вы хотите добавить!', 'error');
        }
    };

    function whichStatus(status){
        if(status=='P'){
            return 'В обработке'
        }else if(status=='C'){
            return 'Доставлено'
        }else{
            return 'В пути'
        }
    }

    function formatDateString(dateString) {
        const date = new Date(dateString);
        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        };
        
        const formattedDate = new Intl.DateTimeFormat('default', options).format(date).replace(',', '');
        return formattedDate;
      }

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
                    <div className="md:w-4/5 w-full mb-[200px]">
                        <h3 className="text-[#1075B2] text-[15px] mt-4 uppercase">Мои заказы</h3>

                        <p className="font-sans mt-2 mb-2 text-[#1075B2]">
                            У вас {orders.count} {getOrdersText(orders.count)}
                        </p>

                        {orders.count > 0 ? (
                            <div className="flex flex-col shadow-lg rounded mt-1 bg-white w-full ">
                                <div className="flex h-[75px] sm:h-[50px] py-3 shadow z-10 w-full font-sans border-b">
                                    <div className="flex w-1/4 pl-3 text-[16px] sm:text-[18px] lg:text-lg items-center">Номер заказа</div>
                                    <div className="flex w-1/4 text-[16px] sm:text-[18px] lg:text-lg items-center">Сумма заказа</div>
                                    <div className="flex w-1/4 text-[16px] sm:text-[18px] lg:text-lg items-center">Дата</div>
                                    <div className="flex w-1/4 text-[16px] sm:text-[18px] lg:text-lg items-center">Статус</div>
                                </div>
                                <div className="overflow-y-auto max-h-[80vh]">
                                    {orders.results.map((order, index) => (
                                        <Disclosure key={index}>
                                            {({open}) => (
                                                <>
                                                    <Disclosure.Button
                                                        className="flex flex-col w-full py-2 border-t"
                                                    >
                                                        <div className="flex w-full items-center">
                                                            <div className="flex w-1/4 pl-3 text-sm sm:text-base lg:text-lg">№ {order.id}</div>
                                                            <div className="flex w-1/4  text-sm sm:text-base">{order.total_cost} ₸</div>
                                                            <div className="flex w-1/4  text-xs sm:text-base">{formatDateString(order.updated_at)}</div>
                                                            <div
                                                                className="flex w-[18.75%] text-xs sm:text-base text-lime-700">{whichStatus(order.order_status)}</div>
                                                            <div className="flex w-[6.25%] pt-1 ml-2 md:block hidden cursor-pointer"
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
                                                                className=" flex flex-col w-full h-auto px-4 py-5 р-30 border-2 border-b-0 border-l-0 border-r-0 border-dashed">

                                                                <div className="w-full flex flex-row">
                                                                    <div className="flex gap-3 flex-row w-1/2">
                                                                        <div>
                                                                            <Image width={100} height={90}
                                                                                   src={item.product.img_url !== null ? item.product.img_url : defaultImage}
                                                                                   alt="Product Photo"></Image>
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <h1 className="text-xs sm:text-base">{item.product.name}</h1>
                                                                            <div className="font-sans mt-3">
                                                                                <h2 className="sm: text-sm">{item.cost} ₸<font
                                                                                    className="text-[#1075B2] mb-[5px] font-bold"> x </font> {item.quantity}
                                                                                </h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex w-1/2 gap-3 mt-5 flex flex-col items-center ml-8">
                                                                        <div className="w-[40px] h-[40px] flex justify-center items-start  bg-cover mb-2">
                                                                            <Image width={80} height={80} 
                                                                            src={item.product.brand_logo_url !== null ? item.product.brand_logo_url : defaultImage }
                                                                                //    alt={item.order_items[0].product.brand_logo_url}
                                                                                   />
                                                                        </div>
                                                                        <div className="flex gap-2 sm: flex-col sm:flex-row">
                                                                            <button
                                                                                className="h-8 w-28 text-sm rounded-md bg-[#1075B2] bg-opacity-10 text-[#1075B2] sm:h-10 sm:w-34 lg:h-12 lg:w-40 lg:text-base">
                                                                                Оставить отзыв
                                                                            </button>
                                                                            <button
                                                                                className="h-8 w-28 text-sm rounded bg-[#1075B2] bg-opacity-10 text-[#1075B2] sm:h-10 sm:w-34 lg:h-12 lg:w-40 lg:text-base"
                                                                                onClick={() => handleButtonClick(item.product.id, item.quantity)}>
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
            {/*<div>*/}
            {/*    <h3 className="flex justify-center mt-12 ProductSansLight text-xl text-[#1075B2]">ПЕРСОНАЛЬНЫЕ*/}
            {/*        РЕКОМЕНДАЦИИ</h3>*/}
            {/*    <Products products={} fetchingStatus={true} />*/}
            {/*</div>*/}
        </MainContainer>
    )

}

export default MyOrders;