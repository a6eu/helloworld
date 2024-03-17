import React, {useEffect, useState} from 'react';
import UserNavbar from "@/components/UserNavbar"
import ProfileArea from "@/components/ProfileArea"
import EditProfile from '@/components/EditProfile';
import MainContainer from '@/components/MainContainer';
import axios from "axios";
import {config} from "@/config";


function Profile() {
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({})
    let url = `${config.baseUrl}/api/v1/auth/users/profile/`

    useEffect(() => {
        const getProfile = async () => {
            const bearerToken = localStorage.getItem("accessToken");
            const config = {
                headers: {
                    Authorization: `Bearer ${bearerToken}`,
                },
            }

            try {
                setIsLoading(true);
                const response = await axios.get(url, config)
                setIsLoading(false)
                setProfile(response.data)
            } catch (error) {
                console.log("Error")
                console.log(error)
            }
        }

        getProfile().then(r => {
            console.log(r)
        })
    }, [])

    const handleSaveClick = () => {
        setIsEditing(false)
        window.location.reload()
    }

    const handleEditClick = () => {
        setIsEditing(true)
    }

    return (
        <MainContainer>
            <div className="flex w-full justify-center ">
                <div className="flex justify-between w-full">
                    <UserNavbar/>
                    <div className="md:w-3/4 w-full">
                        <h3 className="text-[#1075B2] text-[15px] mt-4">Мой профиль</h3>
                        {
                            !isLoading ?
                                <div className="mt-[20px] w-[100%] justify-start">
                                    {isEditing ? (
                                        <EditProfile url={url} profile={profile} onSaveClick={handleSaveClick}/>
                                    ) : (
                                        <ProfileArea profile={profile} onEditClick={handleEditClick}/>
                                    )}
                                </div>
                                :
                                <div className="shadow rounded-md p-4 w-full">
                                    <div className="animate-pulse flex space-x-4">
                                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                        <div className="flex-1 space-y-6 py-1">
                                            <div className="h-2 bg-slate-700 rounded"></div>
                                            <div className="space-y-3">
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                                </div>
                                                <div className="h-2 bg-slate-700 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default Profile