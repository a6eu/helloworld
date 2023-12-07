import React, {useEffect, useState} from 'react';
import UserNavbar from "@/components/UserNavbar"
import ProfileArea from "@/components/ProfileArea"
import EditProfile from '@/components/EditProfile';

function Profile() {
    const [isEditing, setIsEditing] = useState(false);

    const handleSaveClick = () => {
        setIsEditing(false)
    }

    const handleEditClick = () => {
        setIsEditing(true)
    }

    return (
        <div className="h-auto flex w-full justify-center ">
            <div className="flex justify-between w-[74.5%]">
                <UserNavbar/>
                <div className="w-3/4">
                    <h3 className="text-[#1075B2] text-[15px] mt-4">Мой профиль</h3>
                    <div className="mt-[20px] w-[100%] justify-start">
                        {isEditing ? (
                            <EditProfile onSaveClick={handleSaveClick}/>
                        ):(
                            <ProfileArea onEditClick={handleEditClick}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile