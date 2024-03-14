import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import SignUpForm from '@/components/SignUpForm';
import LogInForm from '@/components/LogInForm';
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

function ModalDialog({ isModalOpen, setIsModalOpen }) {
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
                                    <Dialog.Title className="text-[#1075B2] text-xl mb-6 text-center">
                                        Зарегистрируйтесь, чтобы быть круче
                                    </Dialog.Title>
                                    <SignUpForm onLogInClick={openLoginForm} />
                                </>
                            ),
                            'login': (
                                <>
                                    <Dialog.Title className="text-[#1075B2] text-xl mb-6 text-center">
                                        Добро пожаловать!
                                    </Dialog.Title>
                                    <LogInForm onSignUpClick={openSignUpForm} onForgotClick={openForgotPasswordForm}
                                               setIsModalOpen={setIsModalOpen} />
                                </>
                            ),
                            'forgot': (
                                <>
                                    <Dialog.Title className="text-[#1075B2] text-xl mb-6 text-center">
                                        Восстановить пароль
                                    </Dialog.Title>
                                    <ForgotPasswordForm onLogInClick={openLoginForm} />
                                </>
                            )
                        }[formType]
                    }
                </div>
            </Dialog.Panel>
        </Dialog>
    );
}

export default ModalDialog;
