import Image from "next/image";
import {Rating} from "@smastrom/react-rating";
import Price from "@/components/Price";
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import {useContext, useState} from "react";
import defaultImage from "@/public/images/picture.png"
import axios from "axios";
import {AlertContext} from "@/components/AlertContext";
import {Rate} from "antd";
import {config} from "@/config";
import { getSession } from "@/login";
import { useCookies } from "react-cookie";

const ProductInfo = ({product, brandName}) => {
    const { showAlert } = useContext(AlertContext);
    const [quantity, setQuantity] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);
    const [alert, setAlert] = useState('');
    const [alertType, setAlertType] = useState('')
    const [cookies] = useCookies(['session'])
    const handleAddToBasket = () => {
        showAlert(alert, alertType);
    };

    const handleButtonClick = async (quantity) => {
        const url = `${config.baseUrl}/api/v1/basket/products/`;

        try {
            const session = await getSession(cookies);
            if (!session) {
                console.log("session not found")
            }
            const access = session.user.accessToken
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
            if (response.status === 201) {
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

    function Stars(starAvg) {
        return (
            <div className="flex items-end text-[#9A9A9A] ProductSansLight">
                <Rating
                    style={{maxWidth: 130}}
                    readOnly
                    orientation="horizontal"
                    value={starAvg.starAvg}
                />
                <p className={"ml-2"}>35 отзывов</p>
            </div>
        )
    }


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
                            <Image
                            src={"/images/share.svg"}
                            height={30}
                            width={30}
                            alt="share"
                            />
                        </div>
                        <div className={'w-[1.5rem]'}>
                            <Image
                                src={"/images/zametki.svg"}
                                height={28}
                                width={28}
                                alt="share"
                            />
                        </div>

                    </div>
                </div>

                <Rate />
                <div className="mb-5"></div>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <Price price={product.price} fSizeOfCurrency={30} fSizeOfDigit={35}/>
                    <div className='ProductSansLight text-sm text-gray-500'>Артикул: {product.article}</div>
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
                </div>
            </div>
        </div>
    );
};


export default ProductInfo;