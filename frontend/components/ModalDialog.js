import React,{ useState } from 'react'
import { Dialog } from '@headlessui/react'
import SignUpForm from '@/components/SignUpForm';
import LogInForm  from '@/components/LogInForm';


function MyDialog({isModalOpen, onClose}) {
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

            <Dialog as="div" className="select-none fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50" open={isModalOpen} onClose={onClose}>
                {isSignUp ? (
                    <Dialog.Panel className="fixed flex-wrap justify-center bg-white w-1/3 top-[20%] left-[33%] rounded-lg pt-5 ">
                        <Dialog.Title className="flex justify-center w-full text-[#1075B2] text-xl mb-6">
                            Зарегистрируйтесь, чтобы быть круче
                        </Dialog.Title>
                        <SignUpForm onLogInClick={handleLogInClick}/>
                    </Dialog.Panel>
                ) : isLogIn ? (
                    <Dialog.Panel
                        className="fixed flex-wrap justify-center bg-white w-1/3 top-[20%] left-[33%] rounded-lg pt-5">
                        <Dialog.Title className="flex justify-center text-[#1075B2] text-xl mb-6">Добро пожаловать!
                        </Dialog.Title>
                         <LogInForm onSignUpClick={handleSignUpClick}/>
                    </Dialog.Panel>
                ) : (
                    <Dialog.Panel
                        className="fixed flex-wrap justify-center bg-white w-1/3 top-[20%] left-[33%] rounded-lg pt-5">
                        <Dialog.Title className="flex justify-center text-[#1075B2] text-xl mb-6">ДОБРО ПОЖАЛОВАТЬ!
                        </Dialog.Title>
                        <LogInForm onSignUpClick={handleSignUpClick}/>
                    </Dialog.Panel>
                )}
            </Dialog>

    )
}

export default MyDialog



