import React, {useEffect, useState} from 'react';
import UserNavbar from "@/components/UserNavbar"
import ProfileArea from "@/components/ProfileArea"
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Products.module.css"

function Profile() {
    return (
        <div className="h-auto flex px-[192px] justify-between">
            <UserNavbar/>
            <ProfileArea/>
        </div>
    )
}

export default Profile