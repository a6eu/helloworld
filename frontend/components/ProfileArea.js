import React, { useState } from "react";
import Image from "next/image";


const ProfileArea = () => {
    return (
        <div className="flex w-4/5 justify-between flex-row h-min bg-white p-5  rounded-lg" >
            <Image className="" 
                src="./images/person.svg"
                height={136}
                width={136}
            />
            <div className="w-[400px] flex flex-col justify-around">
                <div className="flex flex-row justify-between">
                    <h3 className="text-[30px]">Temirlan Abeu</h3>
                    <Image
                        src="./images/edit.svg"
                        width={28}
                        height={28}
                    />
                </div>
                <div className="flex flex-row justify-between">
                    <h5 className="text-[#1075B2]">телефон</h5><h5>+7 706 429 55 29</h5>
                </div>
                <div className="flex flex-row justify-between">
                    <h5 className="text-[#1075B2]">эл. почта</h5><h5>temabeu@icloud.com</h5>
                </div>
                <div className="flex flex-row justify-between">
                    <h5 className="text-[#1075B2]">день рождения</h5><h5>13/02/2003</h5>
                </div> 
                <div className="flex flex-row justify-between">
                    <h5 className="text-[#1075B2]" >пол</h5><h5>мужской</h5>
                </div>
            </div>
        </div>
    );
}


export default ProfileArea;