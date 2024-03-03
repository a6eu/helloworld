import Image from "next/image";
import {Rating} from "@smastrom/react-rating";
import Price from "@/components/Price";
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import {useState} from "react";
import {useRouter} from 'next/router';
import axios from "axios";


const ProductInfo = ({product, category, brandName}) => {
    const [quantity, setQuantity] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = async (quantity) => {
        const url = "https://shop-01it-group.up.railway.app/api/v1/basket/products/";

        try {
            const response = await axios.post(
                url,
                {
                    product_id: product.id,
                    quantity: quantity,
                },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("accessToken"),
                    },
                }
            );
        } catch (error) {
            console.error(error);
        }
    };

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
        <div className="w-full flex mt-3 md:flex-row flex-col rounded-[10px] bg-white md:pl-5">
            <div className="w-1/3 h-full self-center flex justify-center">
                <Image className="object-cover min-w-[250px]" alt={product.name} src={product.img_url} width={310} height={310}/>
            </div>
            <div className={"m-8 md:w-2/3 w-9/10"}>
                <h2
                    className={
                        "text-[30px] ProductSansLight flex w-full justify-between pr-3"
                    }
                >
                    {product.name}
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
                <Stars starAvg={4}/>
                <div className="mb-5"></div>
                <Price price={product.price} fSizeOfCurrency={30} fSizeOfDigit={35}/>
                <div className={`relative max-w-[70%] ${!isExpanded ? 'max-h-24 overflow-hidden' : ''}`}>
                    <p className="text-[#9A9a9a] text-[15px] ProductSansLight">
                        {product.description}
                    </p>
                    {!isExpanded && (
                        <div
                            className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-white">

                        </div>
                    )}
                </div>
                <button onClick={() => setIsExpanded(!isExpanded)} className="text-[#1075B2] mt-2">
                    {isExpanded ? 'Показать меньше' : 'Показать больше'}
                </button>

                <div className={"flex justify-between items-center  "}>
                    <Image
                        className="mt-4"
                        src={brandName.logo_url}
                        alt="Logo"
                        width={53}
                        height={53}
                    />
                    <div className={"flex justify-around w-[35%]"}>
                        <div className={"flex"}>
                            <button
                                onClick={() => increaseQuantity()}
                                className="bg-[#E9E9E9] border-solid border-1px mr-customMargin rounded-[3px] w-5 flex justify-center items-center h-6"
                            >
                                <Image className="w-3" src={plus} alt="+"/>
                            </button>
                            <div
                                className="text-white bg-[#1075B2] mx-0.5 text-center mr-customMargin border-solid rounded-[3px] w-5 h-6">
                                {quantity}
                            </div>
                            <button
                                onClick={() => decreaseQuantity()}
                                className="bg-[#E9E9E9] border-solid border-1px rounded-[3px] w-5 flex justify-center items-center h-6 "
                            >
                                <Image className="w-3" src={minus} alt="-"/>
                            </button>
                        </div>
                        <button
                            className={
                                "ProductSansMedium text-[10px] mx-16  text-[#1075B2] min-w-[86px] border border-[#1075B2] rounded-[3px] ml-2"}
                            onClick={() => handleButtonClick(quantity)}
                        >
                            В КОРЗИНУ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductInfo;