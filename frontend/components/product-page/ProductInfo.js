import Image from "next/image";
import Price from "@/components/Price";
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import {useContext, useState} from "react";
import defaultImage from "@/public/images/picture.png"
import axios from "axios";
import {AlertContext} from "@/components/AlertContext";
import {Rate} from "antd";
import {config} from "@/config";
import {getSession} from "@/login";
import {useCookies} from "react-cookie";
import ModalDialog from "../ModalDialog";
import {useRouter} from "next/router";

const ProductInfo = ({product, brandName}) => {
    const [favButtonClicked, setFavButtonClicked] = useState(false);
    const { showAlert } = useContext(AlertContext);
    const [quantity, setQuantity] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);
    const [alert, setAlert] = useState('');
    const [alertType, setAlertType] = useState('')
    const [cookies] = useCookies(['session'])
    const [signedIn, setSignedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddToBasket = () => {
        showAlert(alert, alertType);
    };
    const deleteFavClick = async () => {
        const url = `${config.baseUrl}/api/v1/favorites/products/${product.id}`

        try {
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
            if (response.status === 204 && router.pathname === "/favorites") {
                window.location.reload()
                showAlert('Больше не в избранных!', 'success');
            }
        } catch (error) {
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
            const bearerToken = session?.user.accessToken;
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

    const statementChecker = async () => {
        const session = await getSession(cookies);
        if (!session) {
            setIsModalOpen(true);
            return;
        }
        if (session) {
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
        const session = await getSession(cookies);
        if (!session) {
            setIsModalOpen(true);
            return;
        }
    
        const url = `${config.baseUrl}/api/v1/basket/products/`;
    
        try {
            const session = await getSession(cookies);
            if (!session) {
                console.log("session not found: NOW");
                return;
            }
            const access = session?.user.accessToken;
            const response = await axios.post(
                url,
                {
                    product_id: product_id,
                    quantity: quantity,
                },
                {
                    headers: {
                        Authorization: `Bearer ${access}`,
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
    

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const router = useRouter();
    const {asPath} = router;
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(config.domain + asPath)
            showAlert('Link copied to clipboard!');
        } catch (error) {
            console.error('Error copying to clipboard:', error);
            showAlert('Failed to copy link to clipboard.');
        }
    };

    return (
        <div className="w-full flex mt-3 md:flex-row flex-col rounded-[10px] bg-white md:pl-5">
            <div className="w-1/3 h-full self-center flex justify-center">
                {product.img_url ?
                    <Image className="object-cover min-w-[250px]" alt={product.name} src={product.img_url} width={300}
                           height={300}/>
                    :
                    <Image className='object-cover min-w-[250px]' src={defaultImage} alt={product.name} width={300}
                           height={300}/>}
            </div>
            <div className={"m-8 md:w-2/3 w-9/10 "}>
                <div className={'w-full flex flex-row'}>
                    <h1
                        className={
                            "w-6/10 text-[24px] ProductSansLight flex justify-between pr-3"
                        }
                    >
                        {product.name}
                    </h1>
                    <div className="w-4/10 flex gap-3 align-middle ">
                        <div className={'align-middle mt-0.5 w-[1.5rem]'}>
                            <svg onClick={copyToClipboard} className={`cursor-pointer`} width="26" height="26" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1.74194C9.48101 1.74194 9.87097 1.35199 9.87097 0.870968C9.87097 0.38995 9.48101 0 9 0V1.74194ZM18 9C18 8.51899 17.61 8.12903 17.129 8.12903C16.648 8.12903 16.2581 8.51899 16.2581 9H18ZM17.129 1.74194C17.61 1.74194 18 1.35199 18 0.870968C18 0.38995 17.61 0 17.129 0V1.74194ZM12.3817 0C11.9007 0 11.5107 0.38995 11.5107 0.870968C11.5107 1.35199 11.9007 1.74194 12.3817 1.74194V0ZM18 0.870968C18 0.38995 17.61 0 17.129 0C16.648 0 16.2581 0.38995 16.2581 0.870968H18ZM16.2581 5.67987C16.2581 6.16088 16.648 6.55084 17.129 6.55084C17.61 6.55084 18 6.16088 18 5.67987H16.2581ZM17.7449 1.48684C18.085 1.1467 18.085 0.595231 17.7449 0.2551C17.4047 -0.0850299 16.8533 -0.0850299 16.5132 0.2551L17.7449 1.48684ZM8.38417 8.38417C8.04403 8.72431 8.04403 9.27569 8.38417 9.61583C8.72431 9.95597 9.27569 9.95597 9.61583 9.61583L8.38417 8.38417ZM9 0H5.51613V1.74194H9V0ZM5.51613 0C2.46966 0 0 2.46966 0 5.51613H1.74194C1.74194 3.43169 3.43169 1.74194 5.51613 1.74194V0ZM0 5.51613V12.4839H1.74194V5.51613H0ZM0 12.4839C0 15.5304 2.46966 18 5.51613 18V16.2581C3.43169 16.2581 1.74194 14.5683 1.74194 12.4839H0ZM5.51613 18H12.4839V16.2581H5.51613V18ZM12.4839 18C15.5304 18 18 15.5304 18 12.4839H16.2581C16.2581 14.5683 14.5683 16.2581 12.4839 16.2581V18ZM18 12.4839V9H16.2581V12.4839H18ZM17.129 0H12.3817V1.74194H17.129V0ZM16.2581 0.870968V5.67987H18V0.870968H16.2581ZM16.5132 0.2551L8.38417 8.38417L9.61583 9.61583L17.7449 1.48684L16.5132 0.2551Z"
                                    fill="#303030"/>
                            </svg>

                        </div>
                        <div className={'w-[1.5rem]'}>
                            <svg onClick={statementChecker} className={`cursor-pointer`} width="28" height="28" viewBox="0 0 17 20" fill={favButtonClicked ? '#1075b2' : 'none'}
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.093 1.3235C15.193 1.45149 16 2.4004 16 3.50831V19L8.5 15.2503L1 19V3.50831C1 2.4004 1.806 1.45149 2.907 1.3235C6.62319 0.892168 10.3768 0.892168 14.093 1.3235Z"
                                    stroke={favButtonClicked ? "#1075b2" : "black"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>

                    </div>
                </div>

                <Rate disabled defaultValue={product.rating_total}/>
                <div className="mb-5"></div>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <Price price={product.price} fSizeOfCurrency={30} fSizeOfDigit={35}/>
                    <div className='ProductSansLight text-sm text-gray-500'>Артикул: {product.article}</div>
                    <div className='ProductSansLight text-center text-sm text-gray-500'>В наличии: {product.quantity}</div>

                </div>
                <div className={`relative max-w-[70%] ${!isExpanded ? 'max-h-24 overflow-hidden' : ''}`}>
                    <p className="text-[#9A9a9a] text-[15px] ProductSansLight">
                        {product.description}
                    </p>
                    {!isExpanded && (
                        <div
                            className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-white">
                        </div>
                    )}
                </div>
                <button onClick={() => setIsExpanded(!isExpanded)} className="text-[#1075B2] mt-2">
                    {isExpanded ? 'Показать меньше' : 'Показать больше'}
                </button>

                <div className={"flex justify-between items-center"}>
                    {brandName.logo_url ? <Image
                            className="mt-4"
                            src={brandName.logo_url}
                            alt="Logo"
                            width={53}
                            height={53}
                        /> :
                        <Image className='mt-4' src={defaultImage} alt={product.name} width={53}
                               height={53}/>}

                    <div className={"flex gap-2 mt-4"}>
                        <div className={"flex"}>
                            <button
                                onClick={() => increaseQuantity()}
                                className="bg-[#E9E9E9] border-solid border-1px mr-customMargin rounded-[3px] w-5 flex justify-center items-center h-6"
                            >
                                <Image className="w-3" src={plus} alt="+"/>
                            </button>
                            <div
                                className="text-white bg-[#1075B2] mx-0.5 text-center mr-customMargin border-solid rounded-[3px] w-5 h-6">
                                {quantity}
                            </div>
                            <button
                                onClick={() => decreaseQuantity()}
                                className="bg-[#E9E9E9] border-solid border-1px rounded-[3px] w-5 flex justify-center items-center h-6 "
                            >
                                <Image className="w-3" src={minus} alt="-"/>
                            </button>
                        </div>
                        <button
                            className={
                                'ProductSansLight text-[11px] text-[#1075b2] border-1px border-[#1075b2] rounded-[3px] h-[25px] w-[100px] hover:transition-[300ms] hover:bg-[#1075b2] hover:text-white'}
                            onClick={() => handleButtonClick(quantity)}
                        >
                            В КОРЗИНУ
                        </button>
                    </div>
                    <ModalDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                </div>
            </div>
        </div>
    );
};


export default ProductInfo;