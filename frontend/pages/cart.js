import Products from '@/components/Products';
import React, {useEffect, useState} from 'react';
import emptyCart from '../public/images/emptyCart.svg'
import Image from "next/image"
import styles from "../styles/CartPage.module.css"
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import trashBin from "../public/images/trashBin.svg"
import trashBinW from "../public/images/trashBin_white.svg"
import MainContainer from "@/components/MainContainer";
import imported from "../db.json";
import dell from "../public/images/DELL.svg"
import dellPhoto from "../public/images/dellPowerEdge.svg"
import {RadioGroup} from "@headlessui/react";
import axios from "axios";

function goToHome() {
    window.location.href = '/';
}

export const getStaticProps = async () => {
    const res = await imported;
    const data = await res.products;

    return {
        props: {products: data}
    }
}

function Cart(props) {
    const [cartWithProducts, setCartWithProducts] = useState(props.products);
    let quantity = 0;
    let wholePrice = 0;

    const [products, setProducts] = useState([]);
    const [fetchingStatus, setFetchingStatus] = useState(true)
    //Recommendations
    useEffect(() => {
        setProducts(imported.products)
    }, []);

    const increaseQuantity = (index) => {
        const updatedCart = [...cartWithProducts];
        updatedCart[index].quantity += 1;
        setCartWithProducts(updatedCart);
    }

    const decreaseQuantity = (index) => {
        if (cartWithProducts[index].quantity > 1) {
            const updatedCart = [...cartWithProducts];
            updatedCart[index].quantity -= 1;
            setCartWithProducts(updatedCart);
        }
    }

    const removeItem = (index) => {
        const updatedCart = [...cartWithProducts];
        updatedCart.splice(index, 1)
        setCartWithProducts(updatedCart)
    }

    const cleanCart = () => {
        setCartWithProducts([])
    }


    if (cartWithProducts.length !== 0) {
        return (
            <MainContainer>
                <div className={styles.textCart}>КОРЗИНА</div>
                <div className={styles.productsAndInfoTable}>
                    <div className={styles.containerWithProducts}>
                        <div
                            className="w-full ProductSansLight text-md text-[#1075B2] pl-3 py-3 border-b-1px flex justify-between">
                            <p>Количество товаров в корзине:  <span className="ProductSansMedium">  {cartWithProducts.length}</span> </p>
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
                        {cartWithProducts.map((product, index) => (
                                <ul key={index}>
                                    <RadioGroup>
                                        <li>
                                            <div className="hidden">
                                                {quantity += product.quantity}</div>
                                            <div className="hidden">
                                                {wholePrice += product.price * product.quantity}</div>
                                            <div className="h-auto flex align-center pb-6 border-b-1px">
                                                <Image className="ml-10" src={dellPhoto} alt="Product Photo"></Image>
                                                <div className="flex-col ProductSansLight ml-10 mt-4">
                                                    <div className="text-[20px]">{product.name}</div>
                                                    <div className="ProductSansMedium text-lg">{product.price} ₸</div>
                                                    <div className="text-[12px] w-2/3 mt-4">{product.description}</div>
                                                    <div className="flex justify-between items-center">
                                                        {/*---------------------FIX THAT---------------------*/}
                                                        <Image className="mt-4" src={dell}
                                                               alt="Company Logo"></Image>
                                                        <div className="flex items-center pt-6">
                                                            <button onClick={() => removeItem(index)}><Image
                                                                className="mr-4"
                                                                src={trashBin}
                                                                alt="trashBin"></Image>
                                                            </button>

                                                            <button
                                                                onClick={() => increaseQuantity(index)}
                                                                className="bg-[#E9E9E9] border-solid border-1px mr-customMargin rounded-[3px] w-5 flex justify-center items-center h-6">
                                                                <Image className="w-3" src={plus} alt="+"/>
                                                            </button>
                                                            <div
                                                                className="text-white bg-[#1075B2] mx-0.5 text-center mr-customMargin border-solid rounded-[3px] w-5 h-6">
                                                                {product.quantity}
                                                            </div>
                                                            <button
                                                                onClick={() => decreaseQuantity(index)}
                                                                className="bg-[#E9E9E9] border-solid border-1px rounded-[3px] w-5 flex justify-center items-center h-6 mr-4">
                                                                <Image className="w-3" src={minus} alt="-"/>
                                                            </button>

                                                            <div
                                                                className="mr-4 ProductSansMedium text-lg w-24">{product.price * product.quantity} ₸
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
                                <div>{wholePrice}</div>
                            </div>
                            <div className="ProductSansLight flex justify-between px-10">
                                <div className="text-[#1075B2]">Сумма к оплате:</div>
                                <div className="text-xl">{wholePrice}</div>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="ProductSansLight mb-6 text-sm text-[#1075B2] border-1px border-[#1075B2] h-[34px] w-3/4 rounded-md transition ease-in-out delay-50 hover:bg-[#1075B2] hover:text-white">ОФОРМИТЬ
                                    ЗАКАЗ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="flex justify-center mt-12 ProductSansLight text-xl text-[#1075B2]">ПЕРСОНАЛЬНЫЕ
                    РЕКОМЕНДАЦИИ</h3>
                <Products products={products} fetchingStatus={fetchingStatus}/>
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
                    <Products products={products} fetchingStatus={fetchingStatus}/>
                </div>
            </MainContainer>
        )
    }

}

export default Cart;