import React, {useState, Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import SignUpForm from '@/components/SignUpForm';
import LogInForm from '@/components/LogInForm';
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

function ModalDialog({isModalOpen, setIsModalOpen}) {
    const [formType, setFormType] = useState('login');

    function openSignUpForm() {
        setFormType('signup');
    }

    function openLoginForm() {
        setFormType('login');
    }

    function openForgotPasswordForm() {
        console.log('Opening forgot password form');
        setFormType('forgot');
    }


    return (
        <Transition
            show={isModalOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-95 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            as={Fragment}>
            <Dialog
                as="div"
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50"
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <Dialog.Panel className="fixed flex justify-center items-center inset-0 overflow-auto">
                    <div className="bg-white rounded-lg p-5 w-full max-w-md">
                        {
                            {
                                'signup': (
                                    <>
                                        <div className='flex items-center justify-between mb-6'>
                                            <Dialog.Title className="text-[#1075B2] text-xl text-center pl-5">
                                                Зарегистрируйтесь, чтобы быть круче
                                            </Dialog.Title>
                                            <button onClick={() => setIsModalOpen(false)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20"
                                                     height="20" viewBox="0 0 50 50">
                                                    <path
                                                        d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <SignUpForm onLogInClick={openLoginForm}/>
                                    </>
                                ),
                                'login': (
                                    <>
                                        <div className='flex items-center justify-between'>
                                            <Dialog.Title className="w-full text-[#1075B2] text-xl text-center">
                                                Добро пожаловать!
                                            </Dialog.Title>
                                            <button onClick={() => setIsModalOpen(false)}>
                                                <button onClick={() => setIsModalOpen(false)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20"
                                                         height="20" viewBox="0 0 50 50">
                                                        <path
                                                            d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z"></path>
                                                    </svg>
                                                </button>
                                            </button>
                                        </div>
                                        <LogInForm onSignUpClick={openSignUpForm} onForgotClick={openForgotPasswordForm}
                                                   setIsModalOpen={setIsModalOpen}/>
                                    </>
                                ),
                                'forgot': (
                                    <>
                                        <Dialog.Title className="text-[#1075B2] text-xl mb-6 text-center">
                                            Восстановить пароль
                                        </Dialog.Title>
                                        <ForgotPasswordForm onLogInClick={openLoginForm}/>
                                    </>
                                )
                            }[formType]
                        }
                    </div>
                </Dialog.Panel>
            </Dialog>
        </Transition>
    );
}

export default ModalDialog;
