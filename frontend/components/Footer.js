import React from "react"
import Image from "next/image"
import logo from "../public/images/image 1.svg"
import mail from "../public/images/SVG.svg"
import phone from "../public/images/Vector (1).svg"
//width: 1110px;
//height: 219px;
//background-color: white;
//bottom: 0;
//left: 0;
//right: 0;
//position: fixed;
//margin: 0 auto;

const Footer = () => {
    return (
        <div>
            <div className="w-full justify-center flex bottom-0 mt-10">
                <div className="h-44 bg-white w-5/6 flex justify-around">
                    <Image className="self-center ml-6" src={logo} alt="logo"/>
                    <div className="ProductSansLight self-center mb-3">
                        <p className="pb-5 ProductSansThin">ИНТЕРНЕТ МАГАЗИН</p>
                        <p className="pb-1.5"><a href="">О компании</a></p>
                        <p className="pb-1.5"><a href="">Доставка</a></p>
                        <p className="pb-1.5"><a href="">Реквизиты</a></p>
                    </div>
                    <div className="mr-6 self-center">
                        <p className={"ProductSansThin pb-4"}>СВЯЗАТЬСЯ С НАМИ</p>
                        <div>
                            <div className="flex flex-col">
                                <div className="flex pb-3">
                                    <Image src={mail} alt="Mail"/>
                                    <div className="pl-3 pr-5">
                                        <p className="ProductSansLight" >Email</p>
                                        <a className="ProductSansThin text-blue-500">contact@meagency.io</a></div>
                                </div>
                                <div className="flex">
                                    <Image src={phone} alt="Phone"/>
                                    <div className="pl-3 pr-5">
                                        <p className="ProductSansLight">Phone</p>
                                        <a className="ProductSansThin text-blue-500">+7 (771) 509-3214</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;