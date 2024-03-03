import React, {useEffect, useState} from 'react';
import emptyCart from '../public/images/emptyCart.svg'
import Image from "next/image"
import styles from "../styles/CartPage.module.css"
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import trashBin from "../public/images/trashBin.svg"
import trashBinW from "../public/images/trashBin_white.svg"
import MainContainer from "@/components/MainContainer";
import {RadioGroup} from "@headlessui/react";
import axios from "axios";
import PopularProducts from '@/components/product-page/PopularProducts';
import defaultImage from '@/public/images/picture.png'

function goToHome() {
    window.location.href = '/';
}

function Cart() {
    const [cartWithProducts, setCartWithProducts] = useState([]);
    let wholePrice = 0;
    let quantity = 0;
    function formatNumberWithSpaces(number) {
        if (number) {
            let roundedNumber = parseFloat(number).toFixed(2);
            roundedNumber = roundedNumber.toString();
            return roundedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        } else {
            return "-";
        }
    }


    const getBasket = () => {
        axios.get('https://shop-01it-group.up.railway.app/api/v1/basket', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }).then(response => {
            setCartWithProducts(response.data.products);
        }).catch((error) => {
            console.error('Error fetching products:', error);
        });
    };

    useEffect( () => {
        getBasket()
    }, []);

    const increaseQuantity = async (indexOfCartWProducts, idForRequest) => {
        if (cartWithProducts[indexOfCartWProducts].quantity >= 1) {
            cartWithProducts[indexOfCartWProducts].quantity += 1;
            const body = {
                quantity: cartWithProducts[indexOfCartWProducts].quantity,
            };
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
            };
            try {
                const response = await axios.patch(`https://shop-01it-group.up.railway.app/api/v1/basket/products/${idForRequest}`, body, config);
                getBasket();
            } catch (error) {
                console.error(error);
            }
        }
    }

    const decreaseQuantity = async (indexOfCartWProducts, idForRequest) => {
        if (cartWithProducts[indexOfCartWProducts].quantity > 1) {
            cartWithProducts[indexOfCartWProducts].quantity -= 1;
            const body = {
                quantity: cartWithProducts[indexOfCartWProducts].quantity,
            };
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
            };
            try {
                const response = await axios.patch(`https://shop-01it-group.up.railway.app/api/v1/basket/products/${idForRequest}`, body, config);
                getBasket();
            } catch (error) {
                console.error(error);
            }
        }
    }


    const removeItem = async (index) => {
        try {
            const response = await axios.delete(`https://shop-01it-group.up.railway.app/api/v1/basket/products/${index}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            getBasket();
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };


    const cleanCart = async () => {
        try {
            const response = await axios.delete(`https://shop-01it-group.up.railway.app/api/v1/basket`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            await getBasket();
        } catch (error) {
            console.error('Error cleaning bucket', error);
        }
    }

    if (cartWithProducts.length !== 0) {
        return (
            <MainContainer>
                <div className={styles.textCart}>КОРЗИНА</div>
                <div className={styles.productsAndInfoTable}>
                    <div className={styles.containerWithProducts}>
                        <div
                            className="w-full ProductSansLight text-md text-[#1075B2] pl-3 py-3 border-b-1px flex justify-between">
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
                                            <div className="h-auto flex align-center pb-6 border-b-1px">
                                                {result.product.img_url ? <Image className="ml-10" src={result.product.img_url} width={310}
                                                       height={310} alt="Product Photo"></Image>
                                                : <Image className="ml-10" src={defaultImage} width={310} height={310} alt="Product Photo"></Image>
                                                }
                                                <div className="flex-col ProductSansLight ml-10 mt-4">
                                                    <div className="text-[20px]">{result.product.name}</div>
                                                    <div
                                                        className="ProductSansMedium text-lg w-32">{formatNumberWithSpaces(result.product.price)} ₸
                                                    </div>
                                                    <div
                                                        className="text-[12px] w-2/3 mt-4">{result.product.description}</div>
                                                    <div className="flex justify-between items-center">
                                                        {result.product.logo_url ? <Image className="mt-4 w-[35px] h-[35px]" src={result.product.logo_url}
                                                               alt="Company Logo"></Image> : <Image className="mt-4 w-[35px] h-[35px]" src={defaultImage}
                                                                                                    alt="Company Logo"></Image>}
                                                        <div className="flex items-center pt-6">
                                                            <button onClick={() => removeItem(result.product.id)}><Image
                                                                className="mr-4"
                                                                src={trashBin}
                                                                alt="trashBin"></Image>
                                                            </button>

                                                            <button
                                                                onClick={() => increaseQuantity(indexOfCartWProducts, result.product.id)}
                                                                className="bg-[#E9E9E9] border-solid border-1px mr-customMargin rounded-[3px] w-5 flex justify-center items-center h-6">
                                                                <Image className="w-3" src={plus} alt="+"/>
                                                            </button>
                                                            <div
                                                                className="text-white bg-[#1075B2] mx-0.5 text-center mr-customMargin border-solid rounded-[3px] w-5 h-6">
                                                                {cartWithProducts[indexOfCartWProducts].quantity}
                                                            </div>
                                                            <button
                                                                onClick={() => decreaseQuantity(indexOfCartWProducts, result.product.id)}
                                                                className="bg-[#E9E9E9] border-solid border-1px rounded-[3px] w-5 flex justify-center items-center h-6 mr-4">
                                                                <Image className="w-3" src={minus} alt="-"/>
                                                            </button>
                                                            <div
                                                                className="mr-4 ProductSansMedium text-lg w-28">{formatNumberWithSpaces(wholePrice)} ₸
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
                    <div className={styles.infoTable}>
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
                                <button
                                    className="ProductSansLight mt-2 mb-6 text-sm text-[#1075B2] border-1px border-[#1075B2] h-[34px] w-3/4 rounded-md transition ease-in-out delay-50 hover:bg-[#1075B2] hover:text-white">ОФОРМИТЬ
                                    ЗАКАЗ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="flex justify-center mt-12 ProductSansLight text-xl text-[#1075B2]">ПЕРСОНАЛЬНЫЕ
                    РЕКОМЕНДАЦИИ</h3>
                <PopularProducts/>
            </MainContainer>
        )
    } else {
        return (
            <MainContainer>
                <div className="flex justify-center mt-10">
                    <Image className="w-28 h-28" src={emptyCart} alt="empty cart"></Image>
                </div>
                <div className="flex justify-center ProductSansLight text-lg my-[40px]">Ваша корзина пуста.</div>
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
            </MainContainer>
        )
    }

}

export default Cart;