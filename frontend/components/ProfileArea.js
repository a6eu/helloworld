import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router"; 
import { logout } from "@/login";

const ProfileArea = ({ profile, onEditClick }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['session']);

    const Logout = () => {
        removeCookie('session', { path: '/' });
        const router = useRouter();
        router.back()
    }
    function formatPhoneNumber(phoneNumber) {
        if (!phoneNumber || phoneNumber.length !== 10) {
            return 'Invalid phone number';
        }

        const areaCode = phoneNumber.substring(0, 3);
        const firstPart = phoneNumber.substring(3, 6);
        const secondPart = phoneNumber.substring(6);

        return `+7 ${areaCode} ${firstPart} ${secondPart}`;
    }

    return (
        <>
            <div className="flex w-full justify-around flex-col md:flex-row h-min bg-white p-5  rounded-lg">
                <div className={`flex justify-center`}>
                    <Image className="flex justify-center"
                           src="./images/person.svg"
                           height={136}
                           width={136}
                           alt="person"
                    />
                </div>
                <div className={`flex justify-center md:justify-around`}>
                    <div className="w-[400px] flex flex-col justify-around">
                        <div className="flex flex-row justify-between">
                            <h3 className="text-[30px]">{profile.first_name + " " + profile.last_name}</h3>
                            <button onClick={onEditClick}>
                                <Image
                                    src="./images/edit.svg"
                                    width={28}
                                    height={28}
                                    alt={"Profile image"}
                                />
                            </button>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h5 className="text-[#1075B2]">телефон</h5>
                            <h5>{formatPhoneNumber(profile.phone_number)}</h5>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h5 className="text-[#1075B2]">эл. почта</h5><h5>{profile.email}</h5>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h5 className="text-[#1075B2]">день рождения</h5>
                            <h5>{profile.birth_day ? profile.birth_day : 'не указан'}</h5>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h5 className="text-[#1075B2]">пол</h5><h5>{profile.gender ?
                            <profile className="gender"></profile> : 'не указан'}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex w-4/5 justify-center mt-5"}>
                <Link href={"/"}
                      className={"rounded-[5px] hover:bg-red-100 border-red-400 text-red-400 border-2 px-3 py-1 transition duration-150"}
                      onClick={Logout}>
                    Выйти
                </Link>
            </div>
        </>
    )
}


export default ProfileArea;