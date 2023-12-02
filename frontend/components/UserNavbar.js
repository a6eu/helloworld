import React, {useState} from "react"
import Image from "next/image"
import styles from "../styles/Products.module.css"

const UserNavbar = () => {
    return (
        <div className="w-72 bg-white h-[240px] p-10 flex rounded-b-lg">
            <div className="flex flex-col justify-between">
                <a className="flex flex-row">
                    <Image className="cursor-pointer ml-[5px]"
                        src="./images/Vector.svg"
                        height={30}
                        width={30}
                        alt="favourites"
                    />
                    <h3 className="mt-[5px] ml-[23px] font-sans">Избранное</h3>
                </a>
                <a className="flex flex-row">
                    <Image className="cursor-pointer"
                        src="./images/shopping-cart.svg"
                        height={39}
                        width={39}
                        alt="cart"/>
                    <h3 className="mt-[5px] ml-5 font-sans">Корзина</h3>
                </a>
                <a className="flex-row flex">
                    <Image
                        className="cursor-pointer"
                        src="./images/person.svg"
                        height={39}
                        width={39}
                    />
                    <h3 className="mt-[5px] ml-[20px] font-sans">Профиль</h3>
                </a>
            </div>
        </div>
    )
}

export default UserNavbar