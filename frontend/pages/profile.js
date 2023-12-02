import React, {useEffect, useState} from 'react';
import UserNavbar from "@/components/UserNavbar"
import ProfileArea from "@/components/ProfileArea"

function Profile() {
    return (
        <div className="h-full flex w-full justify-center">
            <div className="flex w-[75%]">
                <UserNavbar/>
                <div className="ml-14">
                    <h3 className="text-[#1075B2] text-[15px] mt-4">Мой профиль</h3>
                    <div className="mt-[20px]">
                        <ProfileArea/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile