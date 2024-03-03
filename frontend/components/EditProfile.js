import React, {useState} from "react";
import axios from 'axios'

const EditProfile = ({url, profile, onSaveClick}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState(profile.first_name);
    const [lastName, setLastName] = useState(profile.last_name);
    const [password, setPassword] = useState(profile.password);
    const [birthday, setBirthday] = useState(profile.birth_day);
    const [phone, setPhone] = useState(profile.phone_number);
    const [address, setAddress] = useState(profile.address);
    const [city, setCity] = useState(profile.city);
    const [gender, setGender] = useState(profile.gender)
    const [nameError, setNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [birthdayError, setBirthdayError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [cityError, setCityError] = useState("");

    const validateName = () => {
        if (!/^[a-zA-Zа-яА-Я]+$/.test(name)) {
            setNameError("Имя должно содержать только буквы");
            return false;
        }
        setNameError("");
        return true;
    };

    const validateLastName = () => {
        if (!/^[a-zA-Zа-яА-Я]+$/.test(lastName)) {
            setLastNameError("Фамилия должна содержать только буквы");
            return false;
        }

        setLastNameError("");
        return true;
    };

    const validatePhone = () => {
        if (phone.length !== 10 && !/^[1-10]+$/.test(phone)) {
            setPhoneError("Введите корректный номер телефона");
            return false;
        }

        setPhoneError("");
        return true;
    };

    const validatePassword = () => {
        const passString = String(password)
        if (passString.length < 8) {
            setPasswordError("Пароль должен содержать минимум 8 символов");
            return false;
        }

        setPasswordError("");
        return true;
    };

    const validateBirthday = () => {
        try {
            const enteredYear = parseInt(birthday.split("-")[0], 10);
            const currentYear = new Date().getFullYear();

            if (currentYear - enteredYear <= 16) {
                setBirthdayError("Вы должны быть старше 16 лет");
                return false;
            }
        } catch {
            console.log('не введено день рождение')
        }

        setBirthdayError("");
        return true;
    };

    const validateCity = () => {
        setCityError("");
        return true;
    };

    function validateForm() {
        const isNameValid = validateName();
        const isLastNameValid = validateLastName();
        const isPasswordValid = validatePassword();
        const isBirthdayValid = validateBirthday();
        const isPhoneValid = validatePhone();
        const isCityValid = validateCity();

        return !!(isNameValid &&
            isLastNameValid &&
            isPasswordValid &&
            isBirthdayValid &&
            isPhoneValid &&
            isCityValid);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm()

        if (isValid) {
            setIsLoading(true);


            const patchProfile = async () => {
                const bearerToken = localStorage.getItem("accessToken")
                console.log(bearerToken)
                const config = {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`,
                    },
                }


                const requestData = {
                    first_name: name,
                    last_name: lastName,
                    phone_number: phone,
                    birth_day: birthday
                }

                try {
                    const response = await axios.patch(url, requestData, config);

                    console.log(response);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error:', error);
                    setIsLoading(false);
                }
            }
            patchProfile().then(r => {
                console.log(r)

            })
            setTimeout(function () {
                onSaveClick()
            }, 1000);

        }
    };

    return (
        <div className="flex sm:w-3/4 w-full justify-around h-full bg-white p-5 rounded-lg">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Имя
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:shadow-lg transition duration-500"
                            id="grid-first-name"
                            type="text"
                            placeholder="Ваше имя"
                        />
                        {nameError && (
                            <p className="text-red-500 text-xs italic">{nameError}</p>
                        )}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Фамилия
                        </label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Ваша фамилия"
                        />
                        {lastNameError && (
                            <p className="text-red-500 text-xs italic">{lastNameError}</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-2/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Номер телефона
                        </label>
                        <div className="relative">
                            <span
                                className="absolute inset-y-0 left-0 pl-2 flex items-center w-9 rounded-tl rounded-bl bg-[#1075B2] text-white">+7</span>
                            <div>
                                <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="appearance-none block w-[90%] ml-9 bg-white text-gray-700 border border-[#1075B2] rounded-tr rounded-br py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                id="grid-phone" type="text" placeholder="(***) *** ** **"/></div>
                        </div>
                        {phoneError && <p className="text-red-500 text-xs italic">{phoneError}</p>}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Пол
                        </label>
                        <div className="relative">
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="block appearance-none w-full bg-white border border-[#1075B2] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                id="grid-gender">
                                <option>Мужской</option>
                                <option>Женский</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Пароль
                        </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                               className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                               id="grid-password" type="password" placeholder="******************"/>
                        {passwordError ? (
                            <p className="text-red-500 text-xs italic">{passwordError}</p>
                        ) : (
                            <p className="text-gray-600 text-xs italic">Чем сложнее, тем лучше</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            День рождения
                        </label>
                        <input
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                            id="grid-birthday" type="date"/>
                        {birthdayError && <p className="text-red-500 text-xs italic">{birthdayError}</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Город
                        </label>
                        <div className="relative">
                            <select value={city} onChange={(e) => setCity(e.target.value)}
                                    className="block appearance-none w-full bg-white border border-[#1075B2] text-gray-700 py-3 px-4 mb-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                    id="grid-state">
                                <option key="default" value="Не выбрано">Не выбрано</option>
                                <option key="astana" value="Астана">Астана</option>
                                <option key="almaty" value="Алматы">Алматы</option>
                                <option key="shymkent" value="Шымкент">Шымкент</option>
                                {cityError && <p className="text-red-500 text-xs italic">{cityError}</p>}
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex rounded-none items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                        {cityError && <p className="text-red-500 text-xs italic">{cityError}</p>}
                    </div>
                    <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Адрес
                        </label>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="appearance-none mb-6 block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                            id="grid-city" type="text" placeholder="Ваш адрес"/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-end">
                    <button
                        className="bg-white border text-[#1075B2] border-[#1075B2] rounded-lg p-2 px-5 mr-5 hover:shadow-lg transition duration-500"
                        type="button" value="Отмена">
                        Отмена
                    </button>
                    <input type="submit"
                           className="bg-[#1075B2] rounded-lg p-2 px-5 text-white hover:shadow-xl transition duration-500"
                           value="Сохранить"/>
                </div>
            </form>
        </div>
    )
}

export default EditProfile