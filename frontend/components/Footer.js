import React from "react"
import Image from "next/image"
import logo from "../public/images/image 1.svg"
import mail from "../public/images/SVG.svg"
import phone from "../public/images/Vector (1).svg"
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={" w-full flex justify-center align-center mt-20 sm:items-center"}>
            <div className="max-w-screen-xl w-full p-2">
                <div className="flex justify-center">
                    <div className="h-44 bg-white flex justify-between min-[320px]:max-md:justify-around rounded-t-[10px] w-full  sm:w-full md:w-full">
                        <Image className="self-center ml-6 min-[320px]:max-md:hidden" src={logo} alt="logo"/>
                        <div className="ProductSansLight self-center mb-3">
                            <p className="pb-5 ProductSansThin ">ИНТЕРНЕТ МАГАЗИН</p>
                            <p className="pb-1.5"><Link href="#">О компании</Link></p>
                            <p className="pb-1.5"><Link href="/delivery">Доставка</Link></p>
                            <p className=""><Link href="#">Реквизиты</Link></p>
                        </div>
                        <div className="self-center">
                            <p className={"ProductSansThin pb-4"}>СВЯЗАТЬСЯ С НАМИ</p>
                            <div>
                                <div className="flex flex-col mr-6">
                                    <div className="flex pb-3">
                                        <Image className='mr-3 min-[320px]:max-md:hidden' src={mail} alt="Mail"/>
                                        <div>
                                            <p className="ProductSansLight">Email</p>
                                            <Link href={'#'} className="ProductSansThin text-[#1075b2]">contact@meagency.io</Link></div>
                                    </div>
                                    <div className="flex">
                                        <Image className='mr-3 min-[320px]:max-md:hidden' src={phone} alt="Phone"/>
                                        <div>
                                            <p className="ProductSansLight">Phone</p>
                                            <Link href={'#'} className="ProductSansThin text-[#1075b2]">+7 (771) 509-3214</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;