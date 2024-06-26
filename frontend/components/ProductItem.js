import React, { useContext, useEffect, useState } from 'react';
import styles from "@/styles/Products.module.css";
import Link from "next/link";
import Image from "next/image";
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import { Rating } from "@smastrom/react-rating";
import Price from "@/components/Price";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import defaultImage from "@/public/images/picture.png";
import { AlertContext } from "@/components/AlertContext";
import {useRouter} from "next/router";
import {Rate} from "antd";
import {config} from "@/config";
import { useCookies } from 'react-cookie';
import { getSession } from '@/login';
import ModalDialog from "@/components/ModalDialog";

const ProductItem = ({ product, signedIn }) => {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const path = useSelector((state) => state.breadcrumb.path);
    const [productName, setProductName] = useState(product.name);
    const { showAlert } = useContext(AlertContext);
    const [favButtonClicked, setFavButtonClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alert, setAlert] = useState('');
    const [alertType, setAlertType] = useState('')
    const[cookies] = useCookies(['session'])

    const ids = useSelector((state) => state.favorite.productIds)
    const handleAddToBasket = () => {
        showAlert(alert, alertType);
    };

    const handleAddToFavorite = () =>  {
        showAlert(alert, alertType);
    }

    const formatName = (title) => {
        let words = title.split(" ");
        let formattedTitle = "";

        for (let i = 0; i < words.length && formattedTitle.length < 20; i++) {
            formattedTitle += words[i] + " ";
        }
        if (formattedTitle.length > 30) {
            formattedTitle += "...";
        }

        return formattedTitle;
    };
    useEffect(() => {
        if (ids.includes(product.id)){
            setFavButtonClicked(true)
        }
    }, []);

    const statementChecker = async () => {
        const session = await getSession(cookies);
        if (!session) {
            setIsModalOpen(true);
            return;
        }
        if (signedIn) {
            if (!favButtonClicked) {
                handleFavClick();
                setFavButtonClicked(true);
            } else {
                deleteFavClick();
                setFavButtonClicked(false);
            }
        }
    };

    const handleButtonClick = async (product_id, quantity) => {
        if (!signedIn) {
            setIsModalOpen(true);
            return;
        }
    
        const url = `${config.baseUrl}/api/v1/basket/products/`;
    
        try {
            const session = await getSession(cookies);
            if (!session) {
                console.log("session not found: NOW");
                // Consider handling this case as well, maybe showing the modal or a message
                return;
            }
            const access = session?.user.accessToken;
            const response = await axios.post(
                url,
                {
                    product_id: product.id,
                    quantity: quantity,
                },
                {
                    headers: {
                        Authorization: "Bearer " + access,
                    },
                }
            );
            console.log("After post method");
            if (response.status === 201) {
                console.log('Ваш товар успешно добавлен в корзину!');
                showAlert('Ваш товар успешно добавлен в корзину!', 'success');
            }
    
        } catch (error) {
            console.error(error);
            showAlert('Возможно у нас нет столько продуктов, сколько вы хотите добавить!', 'error');
        }
    };
    

    const deleteFavClick = async () => {
        const url = `${config.baseUrl}/api/v1/favorites/products/${product.id}`

        try{
            const session = await getSession(cookies);
            if (!session) {
                console.log("session not found")
            }
            const access = session?.user.accessToken
            const response = await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ` + access
                }
            })
            if(response.status === 204 && router.pathname ==="/favorites"){
                window.location.reload()
            }
        }catch (error) {
            console.log(error)
        }
    }

    const handleFavClick = async () => {
        const url = `${config.baseUrl}/api/v1/favorites/products/${product.id}`;

        try {
            const session = await getSession(cookies);
            if (!session) {
                console.log("session not found")
            }
            const access = session?.user.accessToken
            const bearerToken = access;
            const config = {
                headers: {
                    Authorization: `Bearer ${bearerToken}`,
                },
            };
            const response = await axios.post(
                url, {}, config
            );

            if (response.status === 201) {
                console.log(response.data);
                showAlert('Успешно добавлено в Избранные!', 'success');
            }
        } catch (error) {
            console.error(error);
            showAlert('Не смогли добавить в Избранное :(', 'error');
        }
    };

    const nameRefactor = () => {
        if (productName) {
            const name = productName.split('/')[0];
    
            if (name.length > 35) {
                return name.substring(0, 35) + '...';
            }
    
            return name;
        }
    
        return ''; 
    };
    
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className={styles.productCard}>
            <Link
                href={{ pathname: `/products/${encodeURIComponent(product.name)}` }}
                key={product.id}
                onClick={() => dispatch(setPath([...path, product.name]))}
            >
                <div className='w-full flex align-middle justify-center '>
                    {product.img_url ?
                        <Image className='w-full min-[485px]:h-32 max-[485px]:max-h-80 pt-4' src={product.img_url} alt={product.name} width={180}
                               height={180} /> :
                        <Image className='w-[90%] min-[485px]:h-32 pt-4' src={defaultImage} alt={product.name} width={180}
                               height={180} />}
                </div>
            </Link>
            <div className="flex w-full ml-3 justify-between mt-2">
                <Stars starAvg={product.rating_total} />
                <button onClick={statementChecker}>
                    <svg className={`mr-4 hover:fill-[#1075b2]`} width="16" height="16" viewBox="0 0 16 16"
                         xmlns="http://www.w3.org/2000/svg" fill={favButtonClicked ? "#1075b2" : "#ffffff"}>
                        <path
                            d="M11.7286 2.21464C12.4619 2.29998 12.9999 2.93264 12.9999 3.67131V14L7.99994 11.5L2.99994 14V3.67131C2.99994 2.93264 3.53727 2.29998 4.27127 2.21464C6.74873 1.92707 9.25115 1.92707 11.7286 2.21464Z"
                            stroke="#4CC3F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className='pl-[10px] h-[70px] flex-col justify-between self-start transition-[300ms]'>
                <p className="text-[14px] ProductSansLight mb-3 break-all">{nameRefactor()}</p>
                <Price price={product.price} fSizeOfDigit={16} fSizeOfCurrency={13}/>
                <div className='ProductSansLight text-sm text-gray-500'>В наличии: {product.quantity}</div>
            </div>
            <div className={styles.piecesAndToBucket}>
                <div className='flex justify-between w-16'>
                    <button
                        className="bg-[#e9e9e9] border-solid border-1px mr-customMargin rounded-sm w-5 flex justify-center items-center h-6"
                        onClick={increaseQuantity}>
                        <Image className="w-3" src={plus} alt="+"/>
                    </button>
                    <button
                        className="text-white bg-[#1075B2] mr-customMargin border-solid rounded-sm w-5 h-6">{quantity}
                    </button>
                    <button
                        className="bg-[#e9e9e9] border-solid border-1px rounded-sm w-5 flex justify-center items-center h-6"
                        onClick={decreaseQuantity}>
                        <Image className="w-3" src={minus} alt="-"/>
                    </button>
                </div>
                <button
                    className='ProductSansLight text-[11px] text-[#1075b2] border-1px border-[#1075b2] rounded-[3px] h-[22px] w-[90px] hover:transition-[300ms] hover:bg-[#1075b2] hover:text-white'
                    onClick={() => handleButtonClick(product.id, quantity)}>
                    В КОРЗИНУ
                </button>
            </div>
            <ModalDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    );
};

const Stars = ({ starAvg }) => {
    if (starAvg !== 1 || starAvg !== 2 || starAvg !== 3 || starAvg !== 4 || starAvg !== 5) {
        if (starAvg < 1) {
            starAvg = 0.29;
        } else if (starAvg > 1 && starAvg < 2) {
            starAvg = 1.44;
        } else if (starAvg > 2 && starAvg < 3) {
            starAvg = 2.31;
        } else if (starAvg > 3 && starAvg < 4) {
            starAvg = 3.48;
        } else if (starAvg > 4 && starAvg < 5) {
            starAvg = 4.52;
        }
    }

    return (
        <div>
            <Rate disabled defaultValue={starAvg}/>
        </div>
    );
};

export default ProductItem;
