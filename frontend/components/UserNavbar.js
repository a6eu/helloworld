import React, {useState, use} from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"

const UserNavbar = () => {
    return (
        <div className={styles.navbar}>
            <div className="flex flex-col justify-between">
                <a className="flex-row flex z-20 hover:text-[#1075B2] cursor-pointer">
                    <Image
                        className=" fill-blue-400"
                        src="./images/person.svg"
                        height={39}
                        width={39}
                    />
                    <h3 className="mt-[5px] ml-[20px] font-sans" href="google.com">Мой профиль</h3>
                </a>
                <a className="flex flex-row z-20 hover:text-[#1075B2] cursor-pointer">
                    <Image className="cursor-pointer ml-[5px]"
                        src="./images/Vector.svg"
                        height={30}
                        width={30}
                        alt="favourites"
                    />
                    <h3 className="mt-[5px] ml-[23px] font-sans" >Избранное</h3>
                </a>
                <a className="flex flex-row z-20 hover:text-[#1075B2] cursor-pointer ">
                    <Image className="cursor-pointer"
                        src="./images/shopping-cart.svg"
                        height={39}
                        width={39}
                        alt="cart"/>
                    <h3 className="mt-[5px] ml-5 font-sans">Мои заказы</h3>
                </a>
            </div>
        </div>
    )
}

export default UserNavbar