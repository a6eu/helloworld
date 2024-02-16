'use client'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, {useEffect, useRef, useState} from 'react';
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
import {Dropdown} from 'antd';


const Header = () => {
    useTokenExpirationCheck()
    const [searchTerm, setSearchTerm] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const searchContainerRef = useRef(null);
    const items = [
        {
            label: <a href={"/profile"}>Профиль</a>,
            key: '0',
        },
        {
            label: <a href={"/cart"}>Корзина</a>,
            key: '1',
        },
        {
            label: <a href={"/favourites"}>Избранное</a>,
            key: '2',
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://shop-01it-group.up.railway.app/api/v1/products/');
                setAllProducts(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filteredProducts = allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredProducts);
        setIsSearchVisible(true);
    }, [searchTerm, allProducts]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
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

        console.log(access + "\n" + refresh)
        if (access && refresh) {
            setIsLogged(true);
            console.log("logged")
        } else {
            setIsLogged(false);
            console.log("not logged")

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

    let [isModalOpen, setIsModalOpen] = useState(false)

    function closeModal() {
        setIsModalOpen(false)
    }

    function openModal() {
        setIsModalOpen(true)
    }

    return (
        <header className={styles.header}>
            <div className={"max-w-screen-xl w-full flex justify-between items-center p-2"}>
                <Link href={"/"}>
                    <Image className="cursor-pointer min-w-[60px] min-[320px]:max-[880px]:hidden"
                           src="/images/image 1.svg"
                           height={60}
                           width={60}
                           alt="logo"
                    />
                </Link>
                <div className='flex justify-between w-2/3 items-center min-[320px]:max-[880px]:w-3/4'>
                    <CategoriesDropdown/>
                    <div className={"flex items-center "} ref={searchContainerRef}>
                        <div className="flex flex-row relative">
                            <input
                                type="text"
                                placeholder="Search by product name"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="min-[320px]:max-[880px]:w-auto w-auto h-[30px] px-2 rounded border border-[#1075b2] active:border-current"/>
                            <button className={styles.searchButton}>
                                <svg width="25" height="25" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.0833 16.3333H17.15L16.8 15.9833C17.9667 14.7 18.6667 12.95 18.6667 11.0833C18.6667 6.88333 15.2833 3.5 11.0833 3.5C6.88333 3.5 3.5 6.88333 3.5 11.0833C3.5 15.2833 6.88333 18.6667 11.0833 18.6667C12.95 18.6667 14.7 17.9667 15.9833 16.8L16.3333 17.15V18.0833L22.1667 23.9167L23.9167 22.1667L18.0833 16.3333ZM11.0833 16.3333C8.16667 16.3333 5.83333 14 5.83333 11.0833C5.83333 8.16667 8.16667 5.83333 11.0833 5.83333C14 5.83333 16.3333 8.16667 16.3333 11.0833C16.3333 14 14 16.3333 11.0833 16.3333Z"
                                        fill="#F9F9F9"/>
                                </svg>
                            </button>
                        </div>
                        {isSearchVisible && searchTerm.trim() !== '' && (
                            <ul className="absolute max-h-[62vh] overflow-auto bg-white w-[438px] top-[59px] rounded shadow-lg border border-b-blue-200">
                                {searchResults.map((product) => (
                                    <Link rel="stylesheet" href={`/products/${product.name}`}>
                                        <li className="flex  flex-row border justify-between border-t-o border-l-0 border-r-0 py-2 px-2"
                                            key={product.id}>
                                            <div className="flex flex-row w-[55%]">
                                                <Image
                                                    width={80}
                                                    height={5}
                                                    alt={"pic"}
                                                    src={product.img_url}
                                                />
                                                <div className="ml-2">
                                                    <h3 className="text-[13px]">{truncateDescription(product.name, 20)}</h3>
                                                    <span>{parseInt(product.price)} ₸</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-xs w-[40%]">{truncateDescription(product.description, 105)}</p>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className={styles.cityDiv}>
                        <CityDropdownMenu
                            selectedCity={selectedCity}
                            onCityChange={handleCityChange}
                        />
                    </div>
                </div>


                <div className='min-[320px]:max-[880px]:flex hidden pr-2'>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <svg width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                 fill="#1075b2">

                                <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

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

                    {
                        !isLogged ?
                            <div
                                onClick={openModal}
                                className='w-[120px]'
                            >
                                <Image
                                    className="cursor-pointer min-w-[35px]"
                                    src={loginIconImg}
                                    height={35}
                                    width={35}
                                    alt="profile"
                                    onMouseOver={() => {
                                        isLogged ?
                                            setLoginIconImg(profileIconActive)
                                            :
                                            setLoginIconImg(loginIconActive)
                                    }}
                                    onMouseLeave={() => {
                                        isLogged ?
                                            setLoginIconImg(profileIconNonActive)
                                            :
                                            setLoginIconImg(loginIconNonActive)
                                    }}
                                />
                            </div>
                            :
                            <Link href={"/profile"}>
                                <Image
                                    className="cursor-pointer min-w-[35px]"
                                    src={profileImg}
                                    height={35}
                                    width={35}
                                    alt="profile"
                                    onMouseOver={() => setProfileImg(profileIconActive)}
                                    onMouseLeave={() => setProfileImg(profileIconNonActive)}
                                />
                            </Link>

                    }

                </div>
            </div>
            <ModalDialog isModalOpen={isModalOpen} setIsModelOpen={setIsModalOpen}/>
        </header>


    )
};

export default Header;
