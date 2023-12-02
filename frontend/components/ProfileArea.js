import React, { useState } from "react";
import Image from "next/image";


const ProfileArea = () => {
    return (
        <div className="inline-block w-[814px] h-min bg-white p-5">
            <Image class=""
                src="./images/person.svg"
                height={136}
                width={136}
            />
        </div>
    );
}


export default ProfileArea;