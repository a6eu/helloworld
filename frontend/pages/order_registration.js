import MainContainer from "@/components/MainContainer";
import React, {useContext, useEffect, useState} from "react";
import Image from "next/image";
import axios from "axios";
import defaultImage from "@/public/images/picture.png"
import Link from "next/link";
import PhoneNumberFormatter from "@/components/PhoneNumberFormatter";
import {AlertContext} from "@/components/AlertContext";
import {config} from '@/config';
import {getSession} from "@/login";
import {useCookies} from "react-cookie";

let baseUrl = config.baseUrl;
export default function OrderRegistration() {
    const [profile, setProfile] = useState({});
    const [basket, setBasket] = useState([]);
    const [cookies] = useCookies(['session'])

    useEffect(() => {
        const getProfile = async () => {
            const session = await getSession(cookies);
            if (!session) {
                console.log("session not found")

            }
            const access = session?.user.accessToken
            const url = `${baseUrl}/api/v1/auth/users/profile/`;
            const config = {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            };

            try {
                const response = await axios.get(url, config);
                setProfile(response.data);
                console.log(response);
            } catch (error) {
                console.log("Error");
                console.log(error);
            }
        }

        console.log("reload")
        getProfile().then(r => {
            console.log(r);
        })
    }, [])

    useEffect(() => {
        const getBasket = async () => {
            try {
                const session = await getSession(cookies);
                if (!session) {
                    console.log("session not found")
                }
                const access = session?.user.accessToken
                const response = await axios.get(`${baseUrl}/api/v1/basket/`, {
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                });
                setBasket(response.data.products)
                console.log(response.data.products)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getBasket()
    }, []);

    let totalCost = 0;
    const [name, setName] = useState('');      // recepient's name
    const [floor, setFloor] = useState('');     // этаж
    const [flat, setFlat] = useState('');       // квартира
    const [comment, setComment] = useState('');  // комент курьеру
    const [phone, setPhone] = useState('');    //phone of recepient
    const [field, setField] = useState('');   //адресс
    const [fieldError, setFieldError] = useState('')
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');    // метод оплаты
    const [paymentMethodError, setPaymentMethodError] = useState('');
    const [loading, setLoading] = useState(false);
    const {showAlert} = useContext(AlertContext);


    const validateField = () => {
        setFieldError('')
        if (field.length === 0) {
            setFieldError('Обязательно заполните каждое поле адреса')
            return false
        }
        setFieldError('')
        return true
    }

    const validatePhone = () => {
        if (phone.length !== 10 && !/^[1-10]+$/.test(phone)) {
            setPhoneError('Введите корректный номер телефона');
            return false;
        }

        setPhoneError('');
        return true;
    }

    const validateName = () => {
        if (!/^[a-zA-Zа-яА-Я]+$/.test(name)) {
            setNameError('Имя должно содержать только буквы');
            return false;
        }
        setNameError('');
        return true;
    };

    function calcTotal() {
        for (let i = 0; i < basket.length; i++) {
            totalCost += basket[i].total_price

        }
        return totalCost
    }

    const validatePaymentMethod = () => {
        if (!selectedPaymentMethod) {
            setPaymentMethodError('Выберите способ оплаты');
            return false;
        }
        setPaymentMethodError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isNameValid = validateName();
        const isPhoneValid = validatePhone();
        const isFieldFilled = validateField();
        const isPaymentMethodValid = validatePaymentMethod();

        if (isNameValid && isPhoneValid && isFieldFilled && isPaymentMethodValid) {
            const orderItems = basket.map(item => ({
                product_id: item.product.id,
                quantity: item.quantity,
            }));
            basket.map((item) => {
                console.log(item.id);
                console.log(item.quantity);
            })
            const data = {
                order_items: orderItems,
                address: field,
                floor: parseInt(floor, 10),
                flat: parseInt(flat, 10),
                comment_for_address: comment,
                recipient_name: name,
                recipient_phone: phone,
            };
            try {
                const session = await getSession(cookies);
                if (!session) {
                    console.log("session not found")
                }
                const access = session?.user.accessToken
                setLoading(true);
                await axios.post(`${config.baseUrl}/api/v1/orders/`, data, {
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                }).then((response) => {
                    console.log('Order submitted successfully:', response.data);
                    showAlert("Заказ успешно оформлен!", 'success');
                    window.location.reload();
                }).catch((error) => {
                    showAlert("Извините что то пошло не так", 'error')
                    if (error.response.data && error.response.data.order_items) {
                        const errorMessage = error.response.data.order_items[0].non_field_errors[0];
                        showAlert(errorMessage, 'error');
                        console.log(error.response.data.order_items[0].non_field_errors[0]);
                    }
                    console.log('ERROR', error)
                });
                setLoading(false);
            } catch (error) {
                console.error('Error submitting order:', error);
                showAlert("Извините что то пошло не так", 'error')
            }

        }

    }

    return (<MainContainer>
        <head><title>Оформление заказа</title></head>
        <div className="flex w-full">
            <div className="flex flex-col w-full">
                <h3 className="text-[#1075B2] text-[15px] mt-4 uppercase">ОФОРМЛЕНИЕ ЗАКАЗА</h3>
                <div className="flex w-full justify-between md:flex-row flex-col">
                    <div className="bg-white md:w-3/5 w-full flex flex-col py-7 shadow-md rounded-lg mt-3">
                        <div className="flex justify-between border-t border-b py-5 px-8">
                            <div className="">
                                <h1 className="text-xl">1. Покупатель</h1>
                                <div className="mt-5 px-3 flex flex-col gap-1">
                                    <h2 className=""><PhoneNumberFormatter phoneNumber={'7' + profile.phone_number}/>
                                    </h2>
                                    <h3 className="font-sans"> {profile.first_name} {profile.last_name}</h3>
                                    <h3 className="font-sans"> {profile.email}</h3>
                                </div>
                            </div>
                            <span className="text-[#1075B2] underline cursor-pointer">Изменить</span>
                        </div>
                        <div className="flex flex-col justify-between border-t border-b py-5 px-8">
                            <div className="w-full">
                                <h1 className="text-xl">2. Доставка</h1>
                                <div className="mt-5 flex flex-col">
                                    <form className="w-full px-3 flex flex-wrap mb-6">
                                        <div className="flex w-full flex-col mb-3 ">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                                                htmlFor="address"
                                            >
                                                Адрес доставки
                                                <span
                                                    className="absolute text-[#1075B2] text-lg leading-3">*</span>
                                            </label>
                                            <div className="relative">

                                                <input
                                                    id="address"
                                                    className="pl-6 appearance-none w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                                    placeholder="Например: ул. Макатаева 14/2"
                                                    value={field}
                                                    onChange={(e) => setField(e.target.value)}

                                                />

                                                <svg className="absolute inset top-0.5 " width="25" height="24"
                                                     viewBox="0 0 25 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M12.7967 18.9935C12.6632 19.0875 12.5389 19.1728 12.4252 19.2493C12.304 19.1721 12.1695 19.0833 12.0236 18.9832C11.336 18.5109 10.4443 17.8176 9.56602 16.9529C7.7646 15.1792 6.25 12.9151 6.25 10.5C6.25 7.18629 9.04822 4.5 12.5 4.5C15.9518 4.5 18.75 7.18629 18.75 10.5C18.75 12.8892 17.1686 15.1468 15.3014 16.9393C14.3954 17.8091 13.4837 18.5099 12.7967 18.9935ZM20.3125 10.5C20.3125 16.5 12.5 21 12.5 21C12.1094 21 4.6875 16.5 4.6875 10.5C4.6875 6.35786 8.18527 3 12.5 3C16.8147 3 20.3125 6.35786 20.3125 10.5ZM14.0625 10.5C14.0625 11.3284 13.3629 12 12.5 12C11.6371 12 10.9375 11.3284 10.9375 10.5C10.9375 9.67157 11.6371 9 12.5 9C13.3629 9 14.0625 9.67157 14.0625 10.5ZM15.625 10.5C15.625 12.1569 14.2259 13.5 12.5 13.5C10.7741 13.5 9.375 12.1569 9.375 10.5C9.375 8.84315 10.7741 7.5 12.5 7.5C14.2259 7.5 15.625 8.84315 15.625 10.5Z"
                                                          fill="#1075B2"/>
                                                </svg>

                                            </div>
                                        </div>
                                        <div className="flex w-full justify-between flex-wrap mb-3">
                                            <div className="w-[49.5%]">
                                                <input
                                                    id="floor"
                                                    className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                                    placeholder="Этаж"
                                                    value={floor}
                                                    onChange={(e) => setFloor(e.target.value)}
                                                />
                                            </div>
                                            <div className="w-[49.5%]">
                                                <input
                                                    id="flat"
                                                    className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                                    placeholder="Квартира"
                                                    value={flat}
                                                    onChange={(e) => setFlat(e.target.value)}


                                                />
                                                {fieldError &&
                                                    <p className="text-red-500 text-xs italic">{fieldError}</p>}
                                            </div>
                                        </div>
                                        <div className="flex w-full flex-wrap mb-3">
                                            <div className="w-full">
                                                <label
                                                    className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                                                    htmlFor="grid-password"
                                                >
                                                    Комментарии для курьера
                                                </label>
                                                <textarea
                                                    className="font-sans appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex w-full flex-wrap mb-3">

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="w-full">
                                <h1 className="text-xl ml-5">Получатель</h1>
                                <div className="flex w-full justify-between flex-wrap px-3 mt-3 mb-3">
                                    <div className="w-[49.5%]">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                                            htmlFor="grid-password"
                                        >
                                            Имя
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        {nameError && <p className="text-red-500 text-xs italic">{nameError}</p>}
                                    </div>
                                    <div className="w-[49.5%] ">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                                            htmlFor="grid-password"
                                        >
                                            Номер телефона
                                        </label>
                                        <div className="relative">
                            <span
                                className="absolute inset-y-0 left-0 pl-2 flex items-center w-9 rounded-tl rounded-bl bg-[#1075B2] text-white">+7</span>
                                            <div>
                                                <input
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="appearance-none block w-[90%] ml-9 bg-white text-gray-700 border border-[#1075B2] rounded-tr rounded-br py-1 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                                    id="grid-phone" type="text" placeholder="(***) *** ** **"/></div>
                                        </div>
                                        {phoneError && <p className="text-red-500 text-xs italic">{phoneError}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex w-full justify-between border-t border-b py-5 px-8">
                                <div className="w-full space-y-1">
                                    <h1 className="text-xl">3. Способ оплаты</h1>
                                    <div className={'pl-3 w-full space-y-1'}>
                                        <div>
                                            <input
                                                className={'align-middle mr-1'}
                                                type="radio" name={'payment'} id={'kaspi'}
                                                onChange={() => setSelectedPaymentMethod('kaspi')}/>
                                            <label htmlFor="kaspi">Kaspi QR</label>
                                            <p className={'text-sm text-[#9a9a9a]'}>Выставить счет через Kaspi и
                                                оплатить сумму вашего заказа.</p>
                                        </div>
                                        <div>
                                            <input
                                                className={'align-middle mr-1'} type="radio" name={'payment'}
                                                id={'debit'}
                                                onChange={() => setSelectedPaymentMethod('debit')}/>
                                            <label htmlFor="debit">Оплата картой</label>
                                            <p className={'text-sm text-[#9a9a9a]'}>Оплата с помощью Казахстанской
                                                банковской карты.</p>
                                        </div>
                                        {paymentMethodError &&
                                            <p className="text-red-500 text-xs italic">{paymentMethodError}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-between flex-col border-t border-b-0 py-5 px-8">
                                <div className="flex w-full">
                                    <div className="flex justify-between w-full">
                                        <h1 className="text-xl font-sans">Сумма к оплате:</h1>
                                        <span className="text-xl">{calcTotal()} ₸</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex font-sans border-dashed border-l-0 border-r-none w-full justify-between border-t-2 border-b-2 py-5 px-8">
                                <div className="flex flex-col">
                                    <div>{basket.length} товара на сумму</div>
                                </div>
                                <div className="flex flex-col">
                                    <div>{totalCost} ₸</div>
                                </div>
                            </div>
                            <div
                                className="flex flex-col border-dashed border-l-0 border-r-none w-full justify-between border-t-0 border-b-2 py-2 px-8">
                                <div className="flex font-sans text-sm justify-center my-3">Оформляя заказ, вы
                                    подтверждаете свое согласие с&nbsp;<span
                                        className="text-[#1075B2] underline cursor-pointer">нашими условиями покупки</span>&nbsp;в
                                    интернет-магазине
                                </div>
                                <button
                                    className="bg-[#1075B2] rounded-md py-2 text-white justify-center"
                                    onClick={handleSubmit}
                                >
                                    {
                                        loading ?
                                            'СОЗДАНИЕ ЗАКАЗА' : 'ПОДТВЕРДИТЬ ЗАКАЗ'
                                    }
                                </button>
                                {fieldError && <p className="text-red-500 text-xs italic">{fieldError}</p>}
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex py-3 md:w-[38%] w-full h-min bg-white mt-3 sticky top-[87px] shadow-md rounded-lg">
                        <div className="w-full ">
                            <div className="hidden"></div>
                            <div className="px-5">
                                <div className="flex flex-row justify-between">
                                    <h1 className="text-[#1075b2] text-lg font-sans">Сумма к оплате: </h1>
                                    <div className="text-xl font-sans">{totalCost} ₸</div>
                                </div>
                                <div className="flex flex-row justify-between">
                                </div>
                                <div className="mt-2">Товаров: {basket.length}</div>
                            </div>
                            {basket.map((item => (
                                <Link href={{pathname: `/products/${encodeURIComponent(item.product.name)}`}}
                                      className="border-dashed flex px-5 py-2 justify-around flex-row border-t-2 w-full"
                                      key={item}>
                                    <div className={'flex w-1/4'}>
                                        {item.product.img_url ?
                                            <Image width={90} height={80} className={"flex object-contain items-center"}
                                                   src={item.product.img_url}
                                                   alt="Product Photo"/> :
                                            <Image width={90} height={80} className={"flex object-contain items-center"}
                                                   src={defaultImage}
                                                   alt="Product Photo"/>}
                                    </div>
                                    <div className="flex py-2 px-2 w-1/2 flex-col">
                                        <h1 className="font-sans text-xs">{item.product.name}</h1>

                                        <div>{item.total_price} ₸</div>
                                    </div>
                                    <div className="flex flex-row w-1/4 mt-4"><span
                                        className="text-[#1075b2] flex justify-center">x</span>&nbsp;{item.quantity}шт.
                                    </div>
                                </Link>)))}
                            <div className="flex justify-center text-xs mt-4">Поддержка с 8:00-00:00 по номеру
                                1717
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainContainer>)
}