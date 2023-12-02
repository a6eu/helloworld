import React, {useEffect, useState} from 'react';
import UserNavbar from "@/components/UserNavbar"
import ProfileArea from "@/components/ProfileArea"

function Profile() {
    return (
        <div className="h-full flex px-[192px] justify-between">
            <UserNavbar/>
            <div>
                <h3 className="text-[#1075B2] text-[15px] mt-4">Мой профиль</h3>
                <div className="mt-[20px]">
                    <ProfileArea/>
                </div>
            </div>
        </div>
    )
}

export default Profile