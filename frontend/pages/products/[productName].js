import {useRouter} from 'next/router';
import MainContainer from "@/components/MainContainer";
import Image from "next/image"
import {useEffect, useState} from "react";
import {Rating} from "@smastrom/react-rating";
import Price from "@/components/Price";
import dell from "public/images/DELL.svg"
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import styles from "@/styles/Products.module.css";


function Stars(starAvg) {
    return (
        <div className="flex items-end text-[#9A9A9A] ProductSansLight">
            <Rating
                style={{maxWidth: 130}}
                readOnly
                orientation="horizontal"
                value={starAvg.starAvg}
            />
            <p className={"ml-2"}>35 отзывов</p>
        </div>
    )
}

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);

    const router = useRouter();
    const {productName} = router.query;

    useEffect(() => {
        console.log(router.query)
        console.log(router.query.url)
    }, [])

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <MainContainer>
            <div className="w-full flex mt-3 rounded-[10px] bg-white">
                <Image
                    src={router.query.url}
                    width={310}
                    height={310}
                />
                <div className={""}>
                    <h2 className={"text-[30px] ProductSansLight"}>
                        {productName}
                    </h2>
                    <Stars starAvg={4}/>
                    <Price price={1200000} fSizeOfCurrency={30} fSizeOfDigit={35}/>
                    <p className={"text-[#636363] text-[15px] ProductSansLight max-w-[70%]"}>Dr.Web Gateway Security
                        Suite обеспечивает антивирусную защиту для интернет-шлюзов Unix, Kerio, MIMEsweeper и Qbik
                        WinGate,MS ISA/Forefront TMG</p>
                    <div className={"flex justify-between items-center  "}>
                        <Image
                            className="mt-4"
                            src={dell}
                            alt="Company Logo"
                            width={53}
                            height={53}
                        />
                        <div className={"flex justify-around w-[35%]"}>
                            <div className={"flex"}>
                                <button
                                    onClick={() => increaseQuantity()}
                                    className="bg-[#E9E9E9] border-solid border-1px mr-customMargin rounded-[3px] w-5 flex justify-center items-center h-6">
                                    <Image className="w-3" src={plus} alt="+"/>
                                </button>
                                <div className="text-white bg-[#1075B2] mx-0.5 text-center mr-customMargin border-solid rounded-[3px] w-5 h-6">
                                    {quantity}
                                </div>
                                <button
                                    onClick={() => decreaseQuantity()}
                                    className="bg-[#E9E9E9] border-solid border-1px rounded-[3px] w-5 flex justify-center items-center h-6 ">
                                    <Image className="w-3" src={minus} alt="-"/>
                                </button>
                            </div>
                            <button className={"ProductSansMedium text-[10px] text-[#1075B2] w-[86px] border border-[#1075B2] rounded-[3px]"}>
                                В КОРЗИНУ
                            </button>
                            <button className={"ProductSansMedium text-[10px] text-white w-[146px] bg-[#1075B2] border border-[#1075B2] rounded-[3px] "}>
                                КУПИТЬ В ОДИН КЛИК
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
}
