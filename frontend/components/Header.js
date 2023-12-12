'use client'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import CatalogDropdown from "@/components/CatalogDropdown";
import CityDropdownMenu from "@/components/CityDropdownMenu";
import Link from "next/link";
import MyDialog from "@/components/ModalDialog";
import HamburgerNav from "@/components/HamburgerNav";


const Header = () => {
    const [selectedCity, setSelectedCity] = useState('Алматы' || localStorage.getItem('city'));

    const handleCityChange = (city) => {
        setSelectedCity(city);
    };
    useEffect(() => {
        const storedCity = localStorage.getItem('city');
        if (storedCity) {
            setSelectedCity(storedCity);
        }
    }, []);

    let [isModalOpen, setisModalOpen] = useState(false)

    function closeModal() {
        setisModalOpen(false)
    }

    function openModal() {
        setisModalOpen(true)
    }

    const [isHamOpen, setIsHamOpen] = useState(false)

    function handleHamClick() {
        setIsHamOpen(!isHamOpen)
    }

    return (
        <header className={styles.header}>
            <div className={"max-w-screen-xl w-full flex justify-between items-center p-2"}>
                <Link href={"/"} className={styles.imageSide}>
                    <Image className="cursor-pointer"
                           src="/images/image 1.svg"
                           height={60}
                           width={60}
                           alt="logo"
                    />
                </Link>

                <div className={styles.searchArea}>
                    <CatalogDropdown className={styles.catalogButton}>
                        <HamburgerNav onClick={handleHamClick}/>
                        &nbsp;&nbsp;КАТАЛОГ
                    </CatalogDropdown>
                    <div className={styles.searchBar}>
                        <div className={styles.typeArea}></div>
                        <button className={styles.searchButton}>
                            <svg width="25" height="25" viewBox="0 0 28 28" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.0833 16.3333H17.15L16.8 15.9833C17.9667 14.7 18.6667 12.95 18.6667 11.0833C18.6667 6.88333 15.2833 3.5 11.0833 3.5C6.88333 3.5 3.5 6.88333 3.5 11.0833C3.5 15.2833 6.88333 18.6667 11.0833 18.6667C12.95 18.6667 14.7 17.9667 15.9833 16.8L16.3333 17.15V18.0833L22.1667 23.9167L23.9167 22.1667L18.0833 16.3333ZM11.0833 16.3333C8.16667 16.3333 5.83333 14 5.83333 11.0833C5.83333 8.16667 8.16667 5.83333 11.0833 5.83333C14 5.83333 16.3333 8.16667 16.3333 11.0833C16.3333 14 14 16.3333 11.0833 16.3333Z"
                                    fill="#F9F9F9"/>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.cityDiv}>
                        <CityDropdownMenu
                            selectedCity={selectedCity}
                            onCityChange={handleCityChange}
                        />
                    </div>
                </div>

                <div className={styles.cartSide}>
                    <Link href={"/favorites"} className={styles.favourite}>
                        <Image className="cursor-pointer"
                               src="./images/Vector.svg"
                               height={22}
                               width={22}
                               alt="favourites"
                        />
                    </Link>
                    <Link className={styles.cart} href={"/cart"}>
                        <Image className="cursor-pointer"
                               src="./images/shopping-cart.svg"
                               height={30}
                               width={30}
                               alt="cart"
                        />
                    </Link>
                    <div className={styles.person}
                         onClick={openModal}
                    >
                        <Image
                               className="cursor-pointer"
                               src="./images/person.svg"
                               height={35}
                               width={35}
                               alt="profile"
                        />
                    </div>
                </div>
            </div>
            <MyDialog isModalOpen={isModalOpen} onClose={closeModal}></MyDialog>
        </header>


    )
};

export default Header;
