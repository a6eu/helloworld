import React, {useContext, useState} from "react";
import {AlertContext} from "@/components/AlertContext";
import axios from "axios";

const Demand = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [field, setField] = useState('');
    const [fieldError, setFieldError] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
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

    const validateEmailOrPhone = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Введите корректную почту');
            return false;
        }
        setEmailError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNameValid = validateName();
        const isPhoneValid = validatePhone();
        const isFieldFilled = validateField();
        const isEmailValid = validateEmailOrPhone();

        if (isNameValid && isPhoneValid && isFieldFilled && isEmailValid) {
            const data = {
                full_name: name,
                phone_number: phone,
                email: email,
                description: field,
            }
            const url = 'https://shop-01it-group.up.railway.app/api/v1/demands/'
            try {
                axios.post(url, data).then(r => showAlert('Ваша заявка успешно оформлена!', 'success'))
            } catch (error) {
                console.error(error);
            }
        }

    }

    return (
        <div
            className={'w-3/5 mb-8 bg-white justify-center flex flex-col rounded-lg py-10 drop-shadow-md min-h-[400px]'}>
            <h1 className={'flex justify-center text-gray-700 font-bold'}>Не нашли то, что искали?</h1>
            <h2 className={'flex justify-center text-gray-700 mb-4'}>- Напишите заявку на персональный заказ!</h2>
            <div className="flex flex-wrap -mx-3 mb-6 justify-center">
                <div className="w-full md:w-2/3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Номер телефона
                    </label>
                    <div className="relative">
                            <span
                                className="absolute inset-y-0 left-0 pl-2 flex items-center w-9 rounded-tl rounded-bl bg-[#1075B2] text-white">+7</span>
                        <div>
                            <input
                                className="appearance-none block w-[90%] ml-9 bg-white text-gray-700 border border-[#1075B2] rounded-tr rounded-br py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                id="grid-phone" type="text" placeholder="(***) *** ** **"
                                onChange={(e) => setPhone(e.target.value)}
                            />

                        </div>

                    </div>
                    {phoneError && <p className="text-red-500 text-xs italic">{phoneError}</p>}
                    <div className="w-full pr-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Имя
                        </label>
                        <input
                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 mb-3 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {nameError && <p className="text-red-500 text-xs italic">{nameError}</p>}
                    <div className="w-full pr-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            e-mail
                        </label>
                        <input
                            onChange={(e => setEmail(e.target.value))}
                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                            type="text"/>
                    </div>
                    {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                    <div className="w-full pr-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Наименование товара
                        </label>
                        <textarea
                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                            type="text"
                            onChange={(e => setField(e.target.value))}
                        />
                    </div>
                    {fieldError && <p className="text-red-500 text-xs italic">{fieldError}</p>}
                    <button
                        className="flex w-full  bg-[#1075B2] rounded-md py-2 text-white justify-center"
                        onClick={handleSubmit}
                    >
                        ПОДТВЕРДИТЬ ЗАКАЗ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Demand;

