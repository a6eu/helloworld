import React, {useState, use} from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import {useRouter} from "next/router";

const UserNavbar = () => {
    const router = useRouter();

    return (
        <div className={styles.userNavbar}>
            <div className="flex flex-col justify-between">
                <Link href={"/profile"} className={`flex-row flex hover:text-[#1075B2] cursor-pointer ${router.pathname === '/profile' ? 'text-[#1075B2]' : ''}`}>
                    <svg className={`fill-current`} width="39" height="39" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.0001 33.3684C26.3924 33.3684 33.3685 26.4074 33.3685 18C33.3685 9.60774 26.3774 2.63171 17.9851 2.63171C9.57765 2.63171 2.63184 9.60774 2.63184 18C2.63184 26.4074 9.59276 33.3684 18.0001 33.3684ZM18.0001 23.1379C13.4649 23.1379 9.96941 24.75 8.44764 26.5581C6.42868 24.298 5.20821 21.2997 5.20821 18C5.20821 10.9035 10.8735 5.19311 17.9851 5.19311C25.0816 5.19311 30.7919 10.9035 30.8071 18C30.8071 21.3148 29.5866 24.3131 27.5526 26.5731C26.0308 24.7651 22.5353 23.1379 18.0001 23.1379ZM18.0001 20.5765C20.893 20.6066 23.1681 18.1356 23.1681 14.8963C23.1681 11.8527 20.8779 9.32148 18.0001 9.32148C15.1073 9.32148 12.802 11.8527 12.8322 14.8963C12.8472 18.1356 15.0922 20.5463 18.0001 20.5765Z"
                            fill="#3c3c3c3"/>
                    </svg>
                    <h3 className="mt-[5px] ml-[20px] font-sans hidden md:block">Мой профиль</h3>
                </Link>
                <Link
                    className={`flex flex-row hover:text-[#1075B2] cursor-pointer ${router.pathname === '/favorites' ? 'text-[#1075B2]' : ''}`}
                    href={"/favorites"}>
                    <svg className={`stroke-current ml-1`} width="30" height="36" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.3894 1.98303C22.0394 2.17503 23.2499 3.59853 23.2499 5.26053V28.5L11.9999 22.875L0.749939 28.5V5.26053C0.749939 3.59853 1.95894 2.17503 3.61044 1.98303C9.18472 1.33598 14.8152 1.33598 20.3894 1.98303Z"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3 className="mt-[5px] ml-[23px] font-sans hidden md:block">Избранное</h3>
                </Link>
                <Link href={"/my_orders"}
                      className={`flex flex-row hover:text-[#1075B2] cursor-pointer ${router.pathname === '/my_orders' ? 'text-[#1075B2]' : ''}`}>
                    <svg className={`fill-current`} width="39" height="39" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M35.235 15.75L33.1875 9.72003L19.395 1.91253C18.968 1.67614 18.488 1.55212 18 1.55212C17.512 1.55212 17.0319 1.67614 16.605 1.91253L2.81249 9.72003L0.764988 15.75C0.545968 16.3759 0.557018 17.0593 0.796157 17.6778C1.0353 18.2962 1.48689 18.8093 2.06999 19.125L2.81249 19.53V24.75C2.84483 25.2129 2.99119 25.6606 3.23851 26.0531C3.48584 26.4457 3.82645 26.771 4.22999 27L16.605 33.9975C17.0319 34.2339 17.512 34.3579 18 34.3579C18.488 34.3579 18.968 34.2339 19.395 33.9975L31.77 27C32.1735 26.771 32.5141 26.4457 32.7615 26.0531C33.0088 25.6606 33.1551 25.2129 33.1875 24.75V19.53L33.93 19.125C34.5131 18.8093 34.9647 18.2962 35.2038 17.6778C35.443 17.0593 35.454 16.3759 35.235 15.75ZM22.5 22.2075L21.42 19.3275L31.5 13.7925L32.49 16.6725L22.5 22.2075ZM18 4.36503L30.285 11.25L18 18L5.71499 11.25L18 4.36503ZM3.41999 16.6725L4.49999 13.7925L14.58 19.3275L13.5 22.2075L3.41999 16.6725ZM5.66999 21.06L15.2325 26.28L16.6275 22.14V30.8475L5.62499 24.75L5.66999 21.06ZM30.375 24.75L19.395 30.8475V22.14L20.8125 26.28L30.375 21.06V24.75Z"
                            />
                    </svg>
                    <h3 className="mt-[5px] ml-5 font-sans hidden md:block">Мои заказы</h3>
                </Link>
            </div>
        </div>
    )
    }

    export default UserNavbar