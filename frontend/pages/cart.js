import React, {useEffect, useState} from 'react';
import emptyCart from '../public/images/emptyCart.svg'
import Image from "next/image";
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import trashBin from "../public/images/trashBin.svg"
import trashBinW from "../public/images/trashBin_white.svg"
import MainContainer from "@/components/MainContainer";
import {RadioGroup} from "@headlessui/react";
import axios from "axios";
import PopularProducts from '@/components/product-page/PopularProducts';
import defaultImage from '@/public/images/picture.png'
import {setPath} from "@/slices/breadcrumbSlice";
import Link from "next/link";
import { useCookies } from 'react-cookie';
import { getSession } from '@/login';   
import {config} from "@/config";
import ModalDialog from "@/components/ModalDialog";


function goToHome() {
    window.location.href = '/';
}

const Cart = () => {
    const [cartWithProducts, setCartWithProducts] = useState([]);
    let wholePrice = 0;
    let quantity = 0;
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [cookies] = useCookies(['session']);
    const [accessT, setAccessToken] = useState("");
    const [isSessionActive, setIsSessionActive] = useState(true);

    function formatNumberWithSpaces(number) {
        if (number) {
            let roundedNumber = parseFloat(number).toFixed(2);
            roundedNumber = roundedNumber.toString();
            return roundedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        } else {
            return "-";
        }
    }

    useEffect(() => {
        const checkSession = async () => {
            const session = await getSession(cookies);
            setIsSessionActive(session);
            // Если сессия не активна, открываем модальное окно
            setIsModalOpen(!session);
        };

        checkSession();
        
        getBasket(); // Загрузка корзины при монтировании компонента
    }, [cookies]);

    const getBasket = async () => {
        console.log("first");
        if (!isSessionActive) {
            console.log("session not found: sp you wont see products(");
            return;
        }
        setIsLoading(true);
        const session = await getSession(cookies);
        const accessToken = session?.user.accessToken;
        console.log("token", accessToken)
        try {
            const response = await axios.get(`${config.baseUrl}/api/v1/basket/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setCartWithProducts(response.data.products);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    };

    const updateQuantity = async (productId, newQuantity) => {
        if (!isSessionActive) {
            console.log("session not found");
            return;
        }
        const session = await getSession(cookies);
        const accessToken = session?.user.accessToken;
        try {
            await axios.patch(`${config.baseUrl}/api/v1/basket/products/${productId}`, {
                quantity: newQuantity,
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getBasket();
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const increaseQuantity = (currentQuantity, productId) => {
        updateQuantity(productId, currentQuantity + 1);
        console.log(productId, currentQuantity)
    };

    const decreaseQuantity = (currentQuantity, productId) => {
        if (currentQuantity > 1) {
            updateQuantity(productId, currentQuantity - 1);
        }
    };

    const removeItem = async (productId) => {
        if (!isSessionActive) {
            console.log("session not found");
            return;
        }
        const session = await getSession(cookies);
        const accessToken = session?.user.accessToken;
        try {
            await axios.delete(`${config.baseUrl}/api/v1/basket/products/${productId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getBasket(); // Обновляем корзину после удаления товара
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };

    const cleanCart = async () => {
        if (!isSessionActive) {
            console.log("session not found");
            return;
        }
        const session = await getSession(cookies);
        const accessToken = session?.user.accessToken;
        try {
            await axios.delete(`${config.baseUrl}/api/v1/basket/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            getBasket();
        } catch (error) {
            console.error('Error cleaning cart', error);
        }
    };

    return (
        <MainContainer>
            <head><title>Корзина с товарами</title></head>
            {isSessionActive ?
                !isLoading ?
                    cartWithProducts.length !== 0 ?
                        <>
                            <div className='flex lg:flex-row flex-col mt-[25px]'>
                                <div className='lg:w-3/4 w-full rounded-md shadow-md bg-white'>
                                    <div
                                        className="w-full ProductSansLight text-md text-[#1075B2] pl-3 py-3 border-b-1px flex sm:flex-row flex-col justify-between">
                                        <p>Количество товаров в корзине: <span
                                            className="ProductSansMedium">  {cartWithProducts.length}</span></p>
                                        <button
                                            onClick={() => cleanCart()}
                                            className="w-40 h-6 mr-3 text-[11px] bg-[#1075B2] text-white rounded-[6px] flex justify-center items-center">
                                            <Image
                                                src={trashBinW}
                                                alt="trashBinW"
                                                className="fill-white w-[14px]"
                                            ></Image>ОЧИСТИТЬ КОРЗИНУ
                                        </button>
                                    </div>
                                    {cartWithProducts.map((result, indexOfCartWProducts) => (
                                            <ul key={indexOfCartWProducts}>
                                                <RadioGroup>
                                                    <li>
                                                        <div className="hidden">
                                                            {wholePrice += result.product.price * result.quantity}</div>
                                                        <div className="hidden">
                                                            {quantity += result.quantity}</div>
                                                        <div
                                                            className="h-auto flex md:flex-row flex-col w-full md:w-full align-center pb-6 border-b-1px">
                                                            {result.product.img_url ?
                                                                <Image
                                                                    className="sm:ml-10 ml-4 ${styles.mobile-image}" // CSS classes applied to the image, including a margin-left of 10 and classes from a 'styles' object for mobile styling
                                                                    src={result.product.img_url} // Source URL of the image, presumably coming from the 'img_url' property of the 'result.product' object
                                                                    width={300} // Width of the image, set to 300 pixels
                                                                    height={300} // Height of the image, set to 300 pixels
                                                                    alt="Product Photo" // Alternative text for the image, to be displayed if the image fails to load or for accessibility purposes
                                                                />

                                                                :
                                                                <Image className="sm:ml-10 ml-4" src={defaultImage}
                                                                       width={300}
                                                                       height={300}
                                                                       alt="Product Photo"></Image>
                                                            }
                                                            <div
                                                                className="h-full flex-col justify-between ProductSansLight ml-4 sm:ml-10 mt-4">
                                                                <Link
                                                                    href={{pathname: `/products/${encodeURIComponent(result.product.name)}`}}
                                                                    key={result.product.id}
                                                                    onClick={() => dispatch(setPath([result.product.name]))}
                                                                >
                                                                    <div
                                                                        className="text-[18px] mr-4 break-words">{result.product.name}</div>
                                                                </Link>
                                                                <div className='flex justify-between items-center'>
                                                                    <div
                                                                        className="ProductSansMedium text-lg w-32">{formatNumberWithSpaces(result.product.price)} ₸
                                                                    </div>
                                                                    <div
                                                                        className='mr-4 text-sm text-gray-500'>Артикул: {result.product.article}</div>
                                                                </div>
                                                                <div
                                                                    className="text-[12px] w-2/3 mt-3">{result.product.description}</div>
                                                                <div
                                                                    className="flex justify-between items-center mt-16">
                                                                    {result.product.logo_url ?
                                                                        <Image className="mt-4 w-[35px] h-[35px]"
                                                                               src={result.product.logo_url}
                                                                               alt="Company Logo"></Image> :
                                                                        <Image className="mt-4 w-[35px] h-[35px]"
                                                                               src={defaultImage}
                                                                               alt="Company Logo"></Image>}
                                                                    <div className="flex items-center pt-4">
                                                                        <button
                                                                            onClick={() => removeItem(result.product.id)}>
                                                                            <Image
                                                                                className="mr-4"
                                                                                src={trashBin}
                                                                                alt="trashBin"></Image>
                                                                        </button>
                                                                        <button
                                                                            onClick={() => increaseQuantity(cartWithProducts[indexOfCartWProducts].quantity, result.product.id)}
                                                                            className="bg-[#E9E9E9] border-solid border-1px mr-customMargin rounded-[3px] w-5 flex justify-center items-center h-6">
                                                                            <Image className="w-3" src={plus} alt="+"/>
                                                                        </button>
                                                                        <div
                                                                            className="text-white bg-[#1075B2] mx-0.5 text-center mr-customMargin border-solid rounded-[3px] w-5 h-6">
                                                                            {cartWithProducts[indexOfCartWProducts].quantity}
                                                                        </div>
                                                                        <button
                                                                            onClick={() => decreaseQuantity(cartWithProducts[indexOfCartWProducts].quantity, result.product.id)}
                                                                            className="bg-[#E9E9E9] border-solid border-1px rounded-[3px] w-5 flex justify-center items-center h-6 mr-4">
                                                                            <Image className="w-3" src={minus} alt="-"/>
                                                                        </button>
                                                                        <div
                                                                            className="mr-4 ProductSansMedium text-lg w-32">{formatNumberWithSpaces(cartWithProducts[indexOfCartWProducts].quantity * result.product.price)} ₸
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </RadioGroup>
                                            </ul>
                                        )
                                    )}
                                </div>
                                <div
                                    className='mt-5 md:mt-0 lg:w-1/3 w-full h-64 sticky top-1 shadow-md rounded-md bg-white flex flex-col justify-between md:m-10'>
                                    <div className="flex-col">
                                        <div
                                            className="ProductSansLight text-[16px] text-[#1075B2] mb-1 ml-[45px] mt-[25px]">Промокод
                                        </div>
                                        <div className="flex justify-center">
                                            <input
                                                className="w-3/4 h-fit border-1px bg-[#f6f6f6] border-[#1075B2] rounded-md p-[4px]"
                                                placeholder="промокод"></input>
                                        </div>
                                    </div>
                                    <div className="flex-col">
                                        <div className="ProductSansLight flex justify-between px-10">
                                            <div
                                                className="text-[#1075B2]">{quantity} {quantity === 1 ? "товар на сумму:" : quantity >= 2 && quantity <= 4 ? "товара на сумму:" : "товаров на сумму:"}</div>
                                            <div>{formatNumberWithSpaces(wholePrice)} ₸</div>
                                        </div>
                                        <div className="ProductSansLight flex justify-between px-10">
                                            <div className="text-[#1075B2]">Сумма к оплате:</div>
                                            <div className="text-xl">{formatNumberWithSpaces(wholePrice)} ₸</div>
                                        </div>
                                        <div className="flex justify-center">
                                            <Link
                                                className="ProductSansLight mt-2 mb-6 text-sm flex justify-center items-center text-[#1075B2] border-1px border-[#1075B2] h-[34px] w-3/4 rounded-md transition ease-in-out delay-50 hover:bg-[#1075B2] hover:text-white"
                                                href="/order_registration">
                                                ОФОРМИТЬ ЗАКАЗ
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex w-full justify-center`}>
                                <h3 className="flex justify-center mt-12 ProductSansLight text-xl text-[#1075B2]">ПЕРСОНАЛЬНЫЕ
                                    РЕКОМЕНДАЦИИ</h3>
                            </div>
                            <PopularProducts/>
                        </>
                        :
                        <>
                            <div className="flex justify-center mt-10">
                                <Image className="w-28 h-28" src={emptyCart} alt="empty cart"></Image>
                            </div>
                            <div className="flex justify-center ProductSansLight text-lg my-[40px]">Ваша корзина
                                пуста.
                            </div>
                            <div className="flex justify-center">
                                <button
                                    onClick={goToHome}
                                    className="ProductSansLight text-sm text-[#1075B2] border-1px border-[#1075B2] h-7 w-32 rounded-md transition ease-in-out delay-50 hover:bg-[#1075B2] hover:text-white">На
                                    главную
                                </button>
                            </div>
                            <div>
                                <h3 className="flex justify-center mt-12 ProductSansLight text-xl text-[#1075B2]">ПЕРСОНАЛЬНЫЕ
                                    РЕКОМЕНДАЦИИ</h3>
                                <PopularProducts/>
                            </div>
                        </>
                    :
                    <div className="animate-pulse">
                        <div className={"w-full mt-3 flex rounded-[10px] bg-white p-5 "}>
                            <div className={"h-[100px] flex align-center pb-6 border-b-1px"}></div>
                            <div className={"w-[50%] m-3"}>
                                <div className={'h-[30px] rounded-[10px] bg-slate-200 mb-3'}></div>
                                <div className={'h-[150px] rounded-[10px] bg-slate-200'}></div>
                            </div>
                        </div>
                    </div>
                :
                <ModalDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            }
        </MainContainer>
    );
}

export default Cart;