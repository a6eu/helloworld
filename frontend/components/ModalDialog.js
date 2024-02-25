import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import SignUpForm from '@/components/SignUpForm';
import LogInForm  from '@/components/LogInForm';

function ModalDialog({isModalOpen, setIsModalOpen}) {
    const [isSignUp, setSignUp] = useState(false)
    const [isLogIn, setLogIn] = useState(false)

    function handleSignUpClick() {
        setSignUp(true)
    }

    function handleLogInClick() {
        setSignUp(false)
        setLogIn(true)
    }

    return (
        <Dialog
            as="div"
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50"
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        >
            <Dialog.Panel
                className="fixed flex justify-center items-center inset-0 overflow-auto"
            >
                <div className="bg-white rounded-lg p-5 w-full max-w-md">
                    {isSignUp ? (
                        <>
                            <Dialog.Title className="text-[#1075B2] text-xl mb-6 text-center">
                                Зарегистрируйтесь, чтобы быть круче
                            </Dialog.Title>
                            <SignUpForm onLogInClick={handleLogInClick}/>
                        </>
                    ) : isLogIn ? (
                        <>
                            <Dialog.Title className="text-[#1075B2] text-xl mb-6 text-center">
                                Добро пожаловать!
                            </Dialog.Title>
                            <LogInForm onSignUpClick={handleSignUpClick} setIsModalOpen={setIsModalOpen}/>
                        </>
                    ) : (
                        <>
                            <Dialog.Title className="text-[#1075B2] text-xl mb-6 text-center">
                                ДОБРО ПОЖАЛОВАТЬ!
                            </Dialog.Title>
                            <LogInForm onSignUpClick={handleSignUpClick} setIsModalOpen={setIsModalOpen}/>
                        </>
                    )}
                </div>
            </Dialog.Panel>
        </Dialog>
    )
}

export default ModalDialog
