import React, {useState} from 'react';
import axios from 'axios';

const ForgotPasswordForm = ({onLogInClick}) => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isEmail, setIsEmail] = useState(false); // State to track if the input is an email

    // Email and phone validation
    const validateInput = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/; // Adjust regex according to your phone number format
        return emailRegex.test(input) || phoneRegex.test(input);
    };

    const handleSendClick = async (e) => {
        e.preventDefault();

        if (!validateInput(emailOrPhone)) {
            setError('Введите действительный номер телефона или адрес электронной почты.');
            return;
        }

        setError('');
        setIsSubmitting(true);

        try {
            await axios.post('https://shop-01it-group.up.railway.app/auth/password-reset-request/', {
                email: emailOrPhone,
            });
        } catch (error) {
            setError('Ошибка при отправке запроса. Пожалуйста, попробуйте снова.');
        }

        setIsSubmitting(false);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setEmailOrPhone(value);

        // Determine if the input is an email
        setIsEmail(/[a-zA-Z]/.test(value));
    };

    return (<form onSubmit={handleSendClick} className="w-full max-w-md mx-auto space-y-3">
            <div>
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Номер телефона или e-mail
                </label>
                <div className="relative">
                    {!isEmail && (<span
                            id={"plus7"}
                            className={`${isEmail && 'hidden'} absolute inset-y-0 left-0 pl-2 flex items-center w-9 rounded-tl rounded-bl bg-[#1075B2] text-white`}>+7</span>

                    )}
                    <input
                        id="emailOrPhone"
                        type="text"
                        value={emailOrPhone}
                        onChange={handleInputChange}
                        className={`appearance-none pl-10 ${isEmail && 'pl-2'} block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500`}
                        placeholder={isEmail ? "example@mail.com" : "1234567890"}
                        required
                    />
                </div>
                {error && <p className="text-xs text-red-500">{error}</p>}
            </div>
            <div className={`flex flex-row`}>
                <button
                    type="submit"
                    className="cursor-pointer hover:shadow-xl flex flex-wrap w-[50%] h-8 bg-[#1075B2] justify-center text-white rounded items-center"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить код'}
                </button>
                <div className={`w-1/2 flex justify-center`}>
                    <span
                        className="text-[#1075B2] ml-2 cursor-pointer underline items-center mt-1 "
                        onClick={onLogInClick}
                    >
                         Вернуться назад
                    </span>
                </div>
            </div>
        </form>);
};

export default ForgotPasswordForm;
