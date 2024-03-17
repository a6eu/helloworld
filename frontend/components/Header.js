'use client'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, {useContext, useEffect, useRef, useState} from 'react';
import CategoriesDropdown from "@/components/CategoriesDropdown";
import CityDropdownMenu from "@/components/CityDropdownMenu";
import Link from "next/link";
import ModalDialog from "@/components/ModalDialog";
import favIconNonActive from "../public/images/Vector.svg";
import cartIconNonActive from "../public/images/shoppingCartNormal.svg";
import profileIconNonActive from "../public/images/person.svg";
import loginIconNonActive from "../public/images/loginIcon.svg";
import favIconActive from "../public/images/favorites.svg";
import cartIconActive from "../public/images/shoppingCartBlue.svg";
import profileIconActive from "../public/images/profileImg.svg";
import loginIconActive from "../public/images/loginIconBlue.svg";
import {useTokenExpirationCheck} from "@/customHooks/useTokenExpirationCheck";
import axios from "axios";
import {Alert, Dropdown, Input} from 'antd';
import defaultImage from "@/public/images/picture.png";
import {AlertContext} from "@/components/AlertContext";
import {debounce} from "lodash";
import {config} from "@/config";

const Header = () => {
    useTokenExpirationCheck()
    const {alert, showAlert, alertType} = useContext(AlertContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const searchContainerRef = useRef(null);
    const Search = Input;
    const loggedInItems = [{
        label: <a href={'/profile'}>Профиль</a>, key: '0',
    }, {
        label: <a href={"/cart"}>Корзина</a>, key: '1',
    }, {
        label: <a href={"/favourites"}>Избранное</a>, key: '2',
    },];

    const loggedOutItems = [{
        label: <a onClick={openModal}>Войти</a>, key: '0',
    }, {
        label: <a href={"/cart"}>Корзина</a>, key: '1',
    }, {
        label: <a href={"/favourites"}>Избранное</a>, key: '2',
    },];

    const performSearch = async (term) => {
        if (term.trim() === '') {
            setSearchResults([]);
            setIsSearchVisible(false);
            return;
        }

        try {
            const response = await axios.get(`${config.baseUrl}/api/v1/products/`, {
                params: { search: term.trim() }
            });
            setSearchResults(response.data.results);
            setIsSearchVisible(true);
        } catch (error) {
            console.error('Error performing search:', error);
            showAlert('Error performing search', 'error');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.baseUrl}/api/v1/products/`);
                setAllProducts(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const debouncedSearch = useRef(debounce(performSearch, 300)).current;

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        debouncedSearch(term);
    };

    const truncateDescription = (description, maxLength) => {
        return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
    };

    const [selectedCity, setSelectedCity] = useState('Алматы' || localStorage.getItem('city'));
    const [favoritesImg, setFavoritesImg] = useState(favIconNonActive);
    const [cartImg, setCartImg] = useState(cartIconNonActive);
    const [profileImg, setProfileImg] = useState(profileIconNonActive);
    const [loginIconImg, setLoginIconImg] = useState(loginIconNonActive);
    const [isLogged, setIsLogged] = useState(false);

    const handleCityChange = (city) => {
        setSelectedCity(city);
    };
    useEffect(() => {
        const access = localStorage.getItem('accessToken');
        const refresh = localStorage.getItem('refreshToken');
        if (access && refresh) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, [])
    useEffect(() => {
        if (isLogged) {
            setProfileImg(profileIconNonActive)
            setLoginIconImg(profileIconNonActive)
        } else {
            setProfileImg(loginIconNonActive)
            setLoginIconImg(loginIconNonActive)
        }
    }, [isLogged])
    useEffect(() => {
        const storedCity = localStorage.getItem('city');
        if (storedCity) {
            setSelectedCity(storedCity);
        }
    }, []);
    const handleClickOutside = (event) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
            setIsSearchVisible(false);
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            setIsSearchVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
    }

    return (
        <header className={styles.header}>
            <div className={"max-w-screen-xl w-full flex justify-between items-center p-2"}>
                <Link href={"/"} className='min-[320px]:max-[880px]:hidden'>
                    <Image className="cursor-pointer min-w-[60px]"
                           src="/images/image 1.svg"
                           height={60}
                           width={60}
                           alt="logo"
                    />
                </Link>
                <CategoriesDropdown/>
                <div className={"flex items-center"} ref={searchContainerRef}>
                    <Search placeholder="Поиск"
                            onChange={handleSearchChange}
                            value={searchTerm}
                            className='w-[400px] min-[320px]:max-lg:w-auto'
                    />
                    {isSearchVisible && searchTerm.trim() !== '' && (

                        <ul className="absolute max-h-[62vh] overflow-auto z-50 bg-white w-[438px] top-[59px] rounded shadow-lg border border-b-blue-200">
                            {searchResults.map((product) => (<Link rel="stylesheet" href={`/products/${product.name}`}>
                                <li className="flex flex-row border justify-between border-t-o border-l-0 border-r-0 py-2 px-2"
                                    key={product.id}>
                                    <div className="flex flex-row h-[85px] w-[55%]">
                                        {product.img_url ?
                                            <Image
                                                width={80}
                                                height={80}
                                                alt={"pic"}
                                                src={product.img_url}
                                                className={`object-contain`}
                                            /> :
                                            <Image src={defaultImage} alt={product.name}
                                                   width={80}
                                                   height={80}/>
                                        }
                                        <div className="ml-2">
                                            <h3 className="text-[13px]">{truncateDescription(product.name, 20)}</h3>
                                            <span>{parseInt(product.price)} ₸</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-xs w-[40%]">{truncateDescription(product.description, 105)}</p>
                                </li>
                            </Link>))}
                        </ul>)}
                </div>
                <CityDropdownMenu
                    selectedCity={selectedCity}
                    onCityChange={handleCityChange}
                />

                <div className='min-[320px]:max-[880px]:flex hidden pr-2'>
                    <Dropdown
                        menu={{
                            items: isLogged ? loggedInItems : loggedOutItems,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <svg width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                 fill="#1075b2">
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path d="M4 19h16v-2H4v2zm16-6H4v2h16v-2zM4 9v2h16V9H4zm16-4H4v2h16V5z"/>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </Dropdown>
                </div>

                <div className='flex items-center justify-between w-[120px] min-[320px]:max-[880px]:hidden'>
                    <Link href={"/favorites"} className='mb-[5px]'>
                        <Image className="cursor-pointer min-w-[22px]"
                               src={favoritesImg}
                               height={22}
                               width={22}
                               alt="favourites"
                               onMouseOver={() => setFavoritesImg(favIconActive)}
                               onMouseLeave={() => setFavoritesImg(favIconNonActive)}
                        />
                    </Link>
                    <Link className='mb-[5px]' href={"/cart"}>
                        <Image className="cursor-pointer min-w-[30px]"
                               src={cartImg}
                               height={30}
                               width={30}
                               alt="cart"
                               onMouseOver={() => setCartImg(cartIconActive)}
                               onMouseLeave={() => setCartImg(cartIconNonActive)}
                        />
                    </Link>

                    {!isLogged ? <div
                        onClick={openModal}
                        className='flex justify-between'
                    >
                        <Image
                            className="cursor-pointer min-w-[35px]"
                            src={loginIconImg}
                            height={35}
                            width={35}
                            alt="profile"
                            onMouseOver={() => {
                                isLogged ? setLoginIconImg(profileIconActive) : setLoginIconImg(loginIconActive)
                            }}
                            onMouseLeave={() => {
                                isLogged ? setLoginIconImg(profileIconNonActive) : setLoginIconImg(loginIconNonActive)
                            }}
                        />
                    </div> : <Link href={"/profile"}>
                        <Image
                            className="cursor-pointer"
                            src={profileImg}
                            height={35}
                            width={35}
                            alt="profile"
                            onMouseOver={() => setProfileImg(profileIconActive)}
                            onMouseLeave={() => setProfileImg(profileIconNonActive)}
                        />
                    </Link>}
                </div>
            </div>
            {alert.show &&
                <div
                    className={`fixed z-50 top-5 right-5 transition-opacity duration-300 ease-out transform-gpu ${
                        alert.show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                    }`}><Alert type={alert.type} showIcon
                               className={'flex flex-row w-[340px]'}
                               message={alert.message} closable></Alert></div>}
            <ModalDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </header>

    )
};

export default Header;
