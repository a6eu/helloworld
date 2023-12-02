import React from "react"
import Image from "next/image"
import logo from "../public/images/image 1.svg"
import mail from "../public/images/SVG.svg"
import phone from "../public/images/Vector (1).svg"

const Footer = () => {
    return (
        <div>
            <div className="w-full mt-[200px]">
                <div className="flex justify-center">
                    <div className="h-44 bg-white flex justify-between w-[75%]">
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
                                            <p className="ProductSansLight">Email</p>
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
        </div>
    )
}

export default Footer;