import React from "react"
import Image from "next/image"
import logo from "../public/images/image 1.svg"
//width: 1110px;
//height: 219px;
//background-color: white;
//bottom: 0;
//left: 0;
//right: 0;
//position: fixed;
//margin: 0 auto;

const Footer = () => {
    return(
        <div>
            <div className="w-full justify-center flex absolute bottom-0">
                <div className="h-40 bg-white w-5/6 flex justify-between">
                    <Image className="self-center" src={logo} alt="logo"/>
                    <div className="ProductSansThin">
                        <p>ИНТЕРНЕТ МАГАЗИН</p>
                        <br/>
                        <p className="pb-1.5">О компании</p>
                        <p className="pb-1.5">Доставка</p>
                        <p className="pb-1.5">Реквизиты</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;