import React,{ useState } from 'react'
import { Dialog } from '@headlessui/react'

function MyDialog({isOpen, onClose}) {
    const [isSignUp, setSignUp] = useState(false)
    function handleSignUpClick() {
        setSignUp(true)
    }
    return (

            <Dialog as="div" className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50" open={isOpen} onClose={onClose}>
                {isSignUp ? (
                    <Dialog.Panel className="fixed flex-wrap justify-center bg-white w-[500px] top-[20%] left-[33%] rounded pt-5 ">
                        <Dialog.Title className="flex justify-center w-full text-[#1075B2] text-xl mb-6">Зарегистрируйтесь, чтобы быть круче
                        </Dialog.Title>

                        <div className="flex flex-col py-5 h-min bg-white px-8 rounded-lg">
                            <form className="w-full justify-center max-w-lg px-12 flex flex-wrap mb-6">
                                <div className="flex flex-wrap mb-3">
                                    <div className="w-[300px]">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                                            htmlFor="grid-password"
                                        >
                                            Номер телефона или e-mail
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 text-s px-2.5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-3">
                                    <div className="w-[300px]">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                                            htmlFor="grid-password"

                                        >
                                            Пароль
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="************"
                                            className=" appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 px-2.5  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                        />
                                   
                                    </div>

                                </div>
                                <div className="flex flex-wrap mb-3">
                                    <div className="w-[300px]">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-[10px] font-bold mb-1"
                                            htmlFor="grid-password"

                                        >
                                            Подтвердите пароль
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="************"
                                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 px-2.5  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                        />
                                    </div>

                                </div>
                                <input
                                    className="flex flex-wrap w-[50%] h-8 bg-[#1075B2] justify-center text-white rounded"
                                    type="submit" value="Войти"/>

                            </form>
                            <p className="flex justify-center mt-7 text-[14px]">
                                У вас есть аккаунт?
                                <span
                                    className="text-[#1075B2] ml-2 cursor-pointer underline"
                                    onClick={handleSignUpClick}
                                >
                                Войти
                            </span>
                            </p>
                        </div>

                    </Dialog.Panel>
                ) : (
                    <Dialog.Panel
                        className="fixed flex-wrap justify-center bg-white w-[500px] top-[20%] left-[33%] rounded pt-5">
                        <Dialog.Title className="flex justify-center text-[#1075B2] text-xl mb-6">ДОБРО ПОЖАЛОВАТЬ!
                        </Dialog.Title>

                        <div className="flex flex-col py-5 h-min bg-white px-8 rounded-lg">
                            <form className="w-full justify-center max-w-lg px-12 flex flex-wrap mb-6">
                            <div className="flex flex-wrap mb-6">
                                    <div className="w-[300px]">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Номер телефона или e-mail
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 px-2.5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-6">
                                    <div className="w-[300px]">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"

                                        >
                                            Пароль
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="************"
                                            className="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-1 px-2.5  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500"
                                        />
                                    </div>
                                </div>
                                <input className="flex flex-wrap w-[50%] h-8 bg-[#1075B2] justify-center text-white rounded"
                                       type="submit" value="Войти"/>

                            </form>
                            <p className="flex justify-center mt-7 text-[14px]">
                                У вас нет аккаунта?
                                <span
                                    className="text-[#1075B2] ml-2 cursor-pointer underline"
                                    onClick={handleSignUpClick}
                                >
                                Зарегестрироваться
                            </span>
                            </p>
                        </div>

                    </Dialog.Panel>
                )}
            </Dialog>

    )
}

export default MyDialog



