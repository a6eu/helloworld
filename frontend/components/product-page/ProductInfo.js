import Image from "next/image";
import {Rating} from "@smastrom/react-rating";
import Price from "@/components/Price";
import dell from "public/images/DELL.svg"
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import styles from "@/styles/Products.module.css";
import {useEffect, useState} from "react";
import {useRouter} from 'next/router';



const ProductInfo = () => {
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
    

    return (
        <div className="w-full flex mt-3 rounded-[10px] bg-white pl-5">
            <Image src={"/images/Rectangle 36.svg"} width={310} height={310} />
            <div className={"m-8"}>
                <h2
                    className={
                        "text-[30px] ProductSansLight flex w-full justify-between pr-3"
                    }
                >
                    {productName}
                    <div className="flex align-middle">
                        <a>
                            <Image
                                src={"/images/share.svg"}
                                height={20}
                                width={20}
                                alt="share"
                            />
                        </a>
                        <a className="ml-2">
                            <Image
                                src={"/images/zametki.svg"}
                                height={18}
                                width={18}
                                alt="share"
                            />
                        </a>
                    </div>
                </h2>
                <Stars starAvg={4} />
                <div className="mb-5"></div>
                <Price price={1200000} fSizeOfCurrency={30} fSizeOfDigit={35} />
                <p
                    className={
                        "text-[#636363] text-[15px] ProductSansLight max-w-[70%]"
                    }
                >
                    Dr.Web Gateway Security Suite обеспечивает антивирусную
                    защиту для интернет-шлюзов Unix, Kerio, MIMEsweeper и Qbik
                    WinGate,MS ISA/Forefront TMG
                </p>
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
                                className="bg-[#E9E9E9] border-solid border-1px mr-customMargin rounded-[3px] w-5 flex justify-center items-center h-6"
                            >
                                <Image className="w-3" src={plus} alt="+" />
                            </button>
                            <div className="text-white bg-[#1075B2] mx-0.5 text-center mr-customMargin border-solid rounded-[3px] w-5 h-6">
                                {quantity}
                            </div>
                            <button
                                onClick={() => decreaseQuantity()}
                                className="bg-[#E9E9E9] border-solid border-1px rounded-[3px] w-5 flex justify-center items-center h-6 "
                            >
                                <Image className="w-3" src={minus} alt="-" />
                            </button>
                        </div>
                        <button
                            className={
                                "ProductSansMedium text-[10px] text-[#1075B2] w-[86px] border border-[#1075B2] rounded-[3px] ml-2"
                            }
                        >
                            В КОРЗИНУ
                        </button>
                        <button
                            className={
                                "ProductSansMedium text-[10px] text-white w-[146px] bg-[#1075B2] border border-[#1075B2] rounded-[3px] ml-2"
                            }
                        >
                            КУПИТЬ В ОДИН КЛИК
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductInfo;