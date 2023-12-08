import Products from '@/components/Products';
import React, {useState} from 'react';
import emptyCart from '../public/images/emptyCart.svg'
import Image from "next/image"
import styles from "../styles/CartPage.module.css"
import dell from "../public/images/DELL.svg"
import dellPowerEdge from "../public/images/dellPowerEdge.svg"
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import trashBin from "../public/images/trashBin.svg"
import trashBinW from "../public/images/trashBin_white.svg"
import MainContainer from "@/components/MainContainer";

function goToHome() {
    window.location.href = '/';
}

function Cart() {
    let quantity = 0;
    let wholePrice = 0;
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
        updatedCart.pop(index)
        setCartWithProducts(updatedCart)
    }

    const cleanCart = () => {
        const updatedCart = [];
        setCartWithProducts(updatedCart)
    }

    const [cartWithProducts, setCartWithProducts] = useState([
        {
            name: "First Product",
            price: 2000,
            description: "Сервер Dell/R540 12LFF/1/Xeon Gold/6230/2,1 GHz/16 Gb/H730P, 2Gb Cache, LP/0,1,5,6,10,50,60/1/600 Gb/SAS 2.5\"/10k/Nо ODD/(1+1) 750W",
            companyLogo: dell,
            productPhoto: dellPowerEdge,
            quantity: 10
        },
        {
            name: "Second Product",
            price: 2000,
            description: "Сервер Dell/R540 12LFF/1/Xeon Gold/6230/2,1 GHz/16 Gb/H730P, 2Gb Cache, LP/0,1,5,6,10,50,60/1/600 Gb/SAS 2.5\"/10k/Nо ODD/(1+1) 750W",
            companyLogo: dell,
            productPhoto: dellPowerEdge,
            quantity: 2
        }
    ],);

    if (cartWithProducts.length !== 0) {
        return (
            <MainContainer>
                <div className={styles.textCart}>КОРЗИНА</div>
                <div className={styles.productsAndInfoTable}>
                    <div className={styles.containerWithProducts}>
                        <div
                            className="w-full ProductSansLight text-md text-[#1075B2] pl-3 py-3 border-b-1px flex justify-between">
                            <p>В
                                КОРЗИНЕ {cartWithProducts.length} {(cartWithProducts.length === 1) ? "ТОВАР" :
                                    "ТОВАРА"}</p>
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
                                    <li>
                                        <div className="hidden">
                                            {quantity += product.quantity}</div>
                                        <div className="hidden">
                                            {wholePrice += product.price * product.quantity}</div>
                                        <div className="h-[200px] flex align-center border-b-1px">
                                            <Image className="ml-10" src={product.productPhoto} alt="Product Photo"></Image>
                                            <div className="flex-col ProductSansLight ml-10 mt-4">
                                                <div className="text-[20px]">{product.name}</div>
                                                <div className="ProductSansMedium text-lg">{product.price} ₸</div>
                                                <div className="text-[12px] w-2/3 mt-4">{product.description}</div>
                                                <div className="flex justify-between items-center">
                                                    <Image className="mt-4" src={product.companyLogo}
                                                           alt="Company Logo"></Image>
                                                    <div className="flex items-center pt-6">
                                                        <button onClick={() => removeItem(index)}><Image className="mr-4"
                                                                                                         src={trashBin}
                                                                                                         alt="trashBin"></Image>
                                                        </button>

                                                        <button
                                                            onClick={() => increaseQuantity(index)}
                                                            className="bg-[#E9E9E9] border-solid border-1px mr-customMargin rounded-[3px] w-5 flex justify-center h-6">
                                                            <Image className="w-3" src={plus} alt="+"/>
                                                        </button>
                                                        <div
                                                            className="text-white bg-[#1075B2] mx-0.5 text-center mr-customMargin border-solid rounded-[3px] w-5 h-6">{product.quantity}
                                                        </div>
                                                        <button
                                                            onClick={() => decreaseQuantity(index)}
                                                            className="bg-[#E9E9E9] border-solid border-1px rounded-[3px] w-5 flex justify-center h-6 mr-4">
                                                            <Image className="w-3" src={minus} alt="-"/>
                                                        </button>
                                                        <div
                                                            className="mr-4 ProductSansMedium text-lg w-20">{product.price * product.quantity} ₸
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
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
                        <div className="flex-col items-center">
                            <div className="ProductSansLight flex justify-around">
                                <div
                                    className="text-[#1075B2]">{quantity} {quantity === 1 ? "товар на сумму:" : quantity >= 2 && quantity <= 4 ? "товара на сумму:" : "товаров на сумму:"}</div>
                                <div>{wholePrice}</div>
                            </div>
                            <div className="ProductSansLight flex justify-around">
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
                <Products/>
            </MainContainer>
        )
    } else {
        return (
            <div className="w-full">
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
                    <Products/>
                </div>
            </div>
        )
    }

}

export default Cart;