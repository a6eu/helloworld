import Products from '@/components/Products';
import React, {useEffect, useState} from "react";
import emptyCart from '../public/images/emptyCart.svg'
import Image from "next/image"
import styles from "../styles/CartPage.module.css"
import dell from "../public/images/DELL.svg"
import dellPowerEdge from "../public/images/dellPowerEdge.svg"
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import trashBin from "../public/images/trashBin.svg"

function goToHome() {
    window.location.href = '/';
}

function Cart() {
    const cartWithProducts = [{
        name: "First Product",
        price: 2000,
        description: "Сервер Dell/R540 12LFF/1/Xeon Gold/6230/2,1 GHz/16 Gb/H730P, 2Gb Cache, LP/0,1,5,6,10,50,60/1/600 Gb/SAS 2.5\"/10k/Nо ODD/(1+1) 750W",
        companyLogo: dell,
        productPhoto: dellPowerEdge,
        quantity: 2
    }, {
        name: "Second Product",
        price: 2000,
        description: "Сервер Dell/R540 12LFF/1/Xeon Gold/6230/2,1 GHz/16 Gb/H730P, 2Gb Cache, LP/0,1,5,6,10,50,60/1/600 Gb/SAS 2.5\"/10k/Nо ODD/(1+1) 750W",
        companyLogo: dell,
        productPhoto: dellPowerEdge,
        quantity: 2
    }, {
        name: "Second Product",
        price: 2000,
        description: "Сервер Dell/R540 12LFF/1/Xeon Gold/6230/2,1 GHz/16 Gb/H730P, 2Gb Cache, LP/0,1,5,6,10,50,60/1/600 Gb/SAS 2.5\"/10k/Nо ODD/(1+1) 750W",
        companyLogo: dell,
        productPhoto: dellPowerEdge,
        quantity: 2
    }
    ]
    if (cartWithProducts.length !== 0) {
        return (
            <div className="w-full h-full">
                <div className={styles.textCart}>КОРЗИНА</div>
                <div className={styles.productsAndInfoTable}>
                    <div className={styles.containerWithProducts}>
                        <div className="w-full ProductSansLight text-sm text-blue-500 pl-3 py-3 border-b-1px">В
                            КОРЗИНЕ {cartWithProducts.length} {(cartWithProducts.length === 1) ? <span>ТОВАР</span> :
                                <span>ТОВАРА</span>}</div>
                        {cartWithProducts.map(product => (
                                <ul key={product.name}>
                                    <li>
                                        <div className="h-[200px] flex align-center border-b-1px">
                                            <Image className="ml-10" src={product.productPhoto} alt="Product Photo"></Image>
                                            <div className="flex-col ProductSansLight ml-10 mt-4">
                                                <div className="text-[20px]">{product.name}</div>
                                                <div className="ProductSansMedium">{product.price} ₸</div>
                                                <div className="text-[10px] w-2/3 mt-4">{product.description}</div>
                                                <div className="flex justify-between items-center">
                                                    <Image className="mt-4" src={product.companyLogo}
                                                           alt="Company Logo"></Image>
                                                    <div className="flex items-center pt-6">
                                                        <Image className="mr-4" src={trashBin} alt="trashBin"></Image>
                                                        <button
                                                            className="bg-blue-50 border-solid border-1px mr-customMargin rounded-[3px] w-5 flex justify-center h-6">
                                                            <Image className="w-3" src={plus} alt="+"/>
                                                        </button>
                                                        <button
                                                            className="text-white bg-blue-500 mr-customMargin border-solid rounded-[3px] w-5 h-6">{product.quantity}
                                                        </button>
                                                        <button
                                                            className="bg-blue-50 border-solid border-1px rounded-[3px] w-5 flex justify-center h-6 mr-4">
                                                            <Image className="w-3" src={minus} alt="-"/>
                                                        </button>
                                                        <div className="mr-4">{product.price * product.quantity} ₸</div>
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
                    </div>
                </div>
                <h3 className="flex justify-center mt-12 ProductSansLight text-xl text-blue-500">ПЕРСОНАЛЬНЫЕ
                    РЕКОМЕНДАЦИИ</h3>
                <Products/>
            </div>
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
                        className="ProductSansLight text-sm text-blue-500 border-1px border-blue-500 h-7 w-32 rounded-md transition ease-in-out delay-50 hover:bg-blue-500 hover:text-white">На
                        главную
                    </button>
                </div>
                <div>
                    <h3 className="flex justify-center mt-12 ProductSansLight text-xl text-blue-500">ПЕРСОНАЛЬНЫЕ
                        РЕКОМЕНДАЦИИ</h3>
                    <Products/>
                </div>
            </div>
        )
    }

}

export default Cart;