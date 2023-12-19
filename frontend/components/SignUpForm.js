import React, {useState} from "react";
import axios from "axios";

const SignUpForm = ({onLogInClick}) => {
    const [firstName, setFirstName] =  useState("");
    const [secondName, setSecondName] =  useState("");
    const [phoneNumber, setPhoneNumber] =  useState("");
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("");
    const [repeatPasswd, setRepeatPasswd] =  useState("");
    const [response, setResponse] = useState({});
    const [isPassword, setIsPassword] = useState(true);
    const [validationError, setValidationError] = useState("");

    function handleShowClick() {
        setIsPassword(false);
    }

    function handleHideClick() {
        setIsPassword(true);
    }

    const registration = async (e) => {
        e.preventDefault();
        const url = 'https://helloworlddjangotestdeploy-production.up.railway.app/auth/users/';

        if (password === repeatPasswd) {
            const requestBody = {
                "first_name": firstName,
                "last_name": secondName,
                "phone_number": phoneNumber,
                "email": email,
                "password": password
            }

            try {
               await axios.post(url, requestBody).then((res) => {
                   setResponse(res);
                   console.log(res);
               })
                onLogInClick();
            } catch (e) {
                console.log("ERROR")
                console.error(e);
                setValidationError(e.response.data.error);
            }
        } else {
            setValidationError("Пароли не совпадают :(   ");
        }
    }

    return (<form className="w-full max-w-lg px-[90px] flex flex-wrap mb-6">
        <div className="flex w-full justify-between flex-wrap mb-3">
            <div className="w-[47%]">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                    htmlFor="grid-password"
                >
                    Имя
                </label>
                <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                    onChange={(e) => {setFirstName(e.target.value)}}
                />
            </div>
            <div className="w-[47%]">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                    htmlFor="grid-password"
                >
                    Фамилия
                </label>
                <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                    onChange={(e) => {setSecondName(e.target.value)}}
                />
            </div>
        </div>
        <div className="flex w-full flex-wrap mb-3">
            <div className="w-full">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                    htmlFor="grid-password"
                >
                    Номер телефона
                </label>
                <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                    onChange={(e) => {setPhoneNumber(e.target.value)}}

                />
            </div>
        </div>
        <div className="flex w-full flex-wrap mb-3">
            <div className="w-full">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                    htmlFor="grid-password"
                >
                    E-mail
                </label>
                <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                    onChange={(e) => {setEmail(e.target.value)}}

                />
            </div>
        </div>
        <div className="flex w-full flex-wrap mb-3">
            <div className="w-full">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                    htmlFor="grid-password"
                >
                    Пароль
                </label>
                <div className="relative">
                    <input
                        type={isPassword ? ("password") : !isPassword ? ("text") : ("password")}
                        placeholder="••••••••••••••••"
                        className=" appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <div
                        className="cursor-pointer absolute inset-y-0 right-0 flex rounded-none items-center px-2 text-gray-700">
                        {isPassword ? (<svg
                            onClick={handleShowClick}
                            width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M9.99998 5.00004C7.30599 5.00004 4.96635 6.92553 3.50398 9.82962C3.48005 9.87721 3.46234 9.91237 3.44739 9.94304C3.43422 9.97004 3.42604 9.98779 3.42069 10C3.42604 10.0123 3.43422 10.03 3.44739 10.057C3.46234 10.0877 3.48005 10.1229 3.50398 10.1705C4.96635 13.0745 7.30599 15 9.99998 15C12.694 15 15.0336 13.0745 16.496 10.1705C16.5199 10.1229 16.5376 10.0877 16.5526 10.057C16.5657 10.03 16.574 10.0123 16.5793 10C16.574 9.98779 16.5657 9.97004 16.5526 9.94304C16.5376 9.91237 16.5199 9.87721 16.496 9.82962C15.0336 6.92553 12.694 5.00004 9.99998 5.00004ZM2.01539 9.08004C3.63179 5.87007 6.43314 3.33337 9.99998 3.33337C13.5668 3.33337 16.3682 5.87007 17.9846 9.08004C17.9905 9.09171 17.9965 9.10354 18.0026 9.11579C18.0787 9.26587 18.177 9.45962 18.221 9.69846C18.2559 9.88846 18.2559 10.1116 18.221 10.3016C18.177 10.5405 18.0787 10.7343 18.0026 10.8843C17.9965 10.8965 17.9905 10.9084 17.9846 10.92C16.3682 14.13 13.5668 16.6667 9.99998 16.6667C6.43314 16.6667 3.63179 14.13 2.01539 10.92C2.00954 10.9084 2.00351 10.8965 1.99733 10.8843C1.92123 10.7342 1.82297 10.5405 1.77902 10.3016C1.74407 10.1116 1.74407 9.88846 1.77902 9.69846C1.82297 9.45962 1.92123 9.26587 1.99733 9.11579C2.00351 9.10354 2.00954 9.09171 2.01539 9.08004ZM9.99998 8.33337C9.07948 8.33337 8.33331 9.07954 8.33331 10C8.33331 10.9205 9.07948 11.6667 9.99998 11.6667C10.9205 11.6667 11.6666 10.9205 11.6666 10C11.6666 9.07954 10.9205 8.33337 9.99998 8.33337ZM6.66666 10C6.66666 8.15909 8.15904 6.66671 9.99998 6.66671C11.841 6.66671 13.3333 8.15909 13.3333 10C13.3333 11.841 11.841 13.3334 9.99998 13.3334C8.15904 13.3334 6.66666 11.841 6.66666 10Z"
                                  fill="#1075B2"/>
                        </svg>) : !isPassword ? (<svg
                            onClick={handleHideClick}
                            width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.01162 3.50883C2.64833 3.22627 2.12476 3.29172 1.8422 3.655C1.55964 4.0183 1.62509 4.54186 1.98839 4.82442L3.88651 6.30075C3.15359 7.12106 2.5255 8.067 2.01541 9.07997L1.99734 9.11572C1.92124 9.26572 1.82299 9.45947 1.77904 9.69839C1.74409 9.88839 1.74409 10.1116 1.77904 10.3015C1.82299 10.5404 1.92124 10.7341 1.99734 10.8842L2.01541 10.92C3.63182 14.13 6.43317 16.6666 10 16.6666C11.8594 16.6666 13.5107 15.9773 14.8946 14.8626L16.9884 16.4911C17.3517 16.7736 17.8752 16.7082 18.1578 16.3449C18.4404 15.9816 18.3749 15.4581 18.0116 15.1755L3.01162 3.50883ZM13.5342 13.8045L12.0361 12.6393C11.473 13.0745 10.7667 13.3333 10 13.3333C8.15906 13.3333 6.66668 11.8409 6.66668 9.99997C6.66668 9.52939 6.76418 9.08164 6.94008 8.67572L5.20385 7.32534C4.55545 8.03306 3.98272 8.87889 3.504 9.82955C3.48008 9.87705 3.46235 9.9123 3.44741 9.94297C3.43424 9.96997 3.42606 9.98772 3.42072 9.99997C3.42606 10.0122 3.43424 10.03 3.44741 10.057C3.46235 10.0876 3.48008 10.1228 3.504 10.1704C4.96638 13.0745 7.30601 15 10 15C11.2761 15 12.4727 14.5679 13.5342 13.8045ZM8.34888 9.77147C8.33863 9.84614 8.33338 9.92247 8.33338 9.99997C8.33338 10.9205 9.07954 11.6666 10 11.6666C10.2222 11.6666 10.4343 11.6231 10.6281 11.5442L8.34888 9.77147Z"
                                  fill="#1075B2"/>
                            <path
                                d="M9.12549 6.78253L13.3329 10.0551C13.3332 10.0367 13.3334 10.0183 13.3334 9.99997C13.3334 8.15901 11.841 6.66663 10.0001 6.66663C9.69741 6.66663 9.40415 6.70695 9.12549 6.78253Z"
                                fill="#1075B2"/>
                            <path
                                d="M16.4961 10.1705C16.2078 10.7428 15.8855 11.2772 15.5331 11.7663L16.8479 12.789C17.274 12.2047 17.6541 11.5765 17.9847 10.9201L18.0028 10.8843C18.0788 10.7342 18.1771 10.5405 18.221 10.3016C18.256 10.1116 18.256 9.88847 18.221 9.69847C18.1771 9.45956 18.0788 9.26581 18.0028 9.11581L17.9847 9.08006C16.3683 5.87007 13.5669 3.33337 10.0001 3.33337C8.57067 3.33337 7.26429 3.74073 6.10779 4.43553L7.54879 5.55632C8.31858 5.19569 9.14134 5.00004 10.0001 5.00004C12.6941 5.00004 15.0337 6.92554 16.4961 9.82964C16.52 9.87714 16.5378 9.91239 16.5527 9.94306C16.5658 9.97006 16.574 9.98781 16.5793 10.0001C16.574 10.0123 16.5658 10.0301 16.5527 10.0571C16.5378 10.0877 16.52 10.1229 16.4961 10.1705Z"
                                fill="#1075B2"/>
                        </svg>) : (<svg
                            onClick={handleShowClick}
                            width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M9.99998 5.00004C7.30599 5.00004 4.96635 6.92553 3.50398 9.82962C3.48005 9.87721 3.46234 9.91237 3.44739 9.94304C3.43422 9.97004 3.42604 9.98779 3.42069 10C3.42604 10.0123 3.43422 10.03 3.44739 10.057C3.46234 10.0877 3.48005 10.1229 3.50398 10.1705C4.96635 13.0745 7.30599 15 9.99998 15C12.694 15 15.0336 13.0745 16.496 10.1705C16.5199 10.1229 16.5376 10.0877 16.5526 10.057C16.5657 10.03 16.574 10.0123 16.5793 10C16.574 9.98779 16.5657 9.97004 16.5526 9.94304C16.5376 9.91237 16.5199 9.87721 16.496 9.82962C15.0336 6.92553 12.694 5.00004 9.99998 5.00004ZM2.01539 9.08004C3.63179 5.87007 6.43314 3.33337 9.99998 3.33337C13.5668 3.33337 16.3682 5.87007 17.9846 9.08004C17.9905 9.09171 17.9965 9.10354 18.0026 9.11579C18.0787 9.26587 18.177 9.45962 18.221 9.69846C18.2559 9.88846 18.2559 10.1116 18.221 10.3016C18.177 10.5405 18.0787 10.7343 18.0026 10.8843C17.9965 10.8965 17.9905 10.9084 17.9846 10.92C16.3682 14.13 13.5668 16.6667 9.99998 16.6667C6.43314 16.6667 3.63179 14.13 2.01539 10.92C2.00954 10.9084 2.00351 10.8965 1.99733 10.8843C1.92123 10.7342 1.82297 10.5405 1.77902 10.3016C1.74407 10.1116 1.74407 9.88846 1.77902 9.69846C1.82297 9.45962 1.92123 9.26587 1.99733 9.11579C2.00351 9.10354 2.00954 9.09171 2.01539 9.08004ZM9.99998 8.33337C9.07948 8.33337 8.33331 9.07954 8.33331 10C8.33331 10.9205 9.07948 11.6667 9.99998 11.6667C10.9205 11.6667 11.6666 10.9205 11.6666 10C11.6666 9.07954 10.9205 8.33337 9.99998 8.33337ZM6.66666 10C6.66666 8.15909 8.15904 6.66671 9.99998 6.66671C11.841 6.66671 13.3333 8.15909 13.3333 10C13.3333 11.841 11.841 13.3334 9.99998 13.3334C8.15904 13.3334 6.66666 11.841 6.66666 10Z"
                                  fill="#1075B2"/>
                        </svg>)}
                    </div>
                </div>
            </div>

        </div>
        <div className="flex w-full flex-wrap mb-3">
            <div className="w-full">
                <label
                    className="select-none block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                    htmlFor="grid-password"
                >
                    Подтвердите пароль
                </label>

                <input
                    type={"password"}
                    placeholder="••••••••••••••••"
                    className=" appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 px-2.5  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                    onChange={(e) => {setRepeatPasswd(e.target.value)}}
                />
            </div>

        </div>
        {
            validationError ?
                <div className="flex flex-wrap w-full justify-center">
                    <p className="flex justify-center mt-3 text-[14px] text-red-400">
                        {validationError}
                    </p>
                </div> : <></>
        }
        <div className="flex flex-wrap justify-center w-full mt-6">
            <input
                className="flex flex-wrap w-3/4  h-8 bg-[#1075B2] justify-center text-white rounded"
                type="submit" value="Зарегистрироваться"
                onClick={(e) => {registration(e)}}
            />
        </div>

        <div className="flex flex-wrap w-full justify-center">
            <p className="flex justify-center mt-7 text-[14px]">
                У вас есть аккаунт
                <span className="text-[#1075B2] ml-2 cursor-pointer underline" onClick={onLogInClick}>
                    Войти
                </span>
            </p>
        </div>
    </form>)
}

export default SignUpForm