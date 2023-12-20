import Image from "next/image";
import {Rating} from "@smastrom/react-rating";
import Price from "@/components/Price";
import dell from "public/images/DELL.svg"
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import axios from "axios";


const ProductInfo = ({product, category, brandName}) => {
    const [quantity, setQuantity] = useState(1);
    const [brandLogo, setBrandLogo] = useState("")
    const router = useRouter();
    const {productName} = router.query;

    console.log(brandName)

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(`https://helloworlddjangotestdeploy-production.up.railway.app/api/v1/brands/${brandName}`)
                setBrandLogo(response.data.results[0].logo_url)
                console.log(response.data.results[0])
            } catch (error) {
                console.error('Error fetching data:', error)
            }

        }
        fetchData()
    }, [brandName])




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
            <div className="w-1/3">
                <Image className="object-cover" alt={product.img_url} src={product.img_url} width={310} height={310} />
            </div>
            <div className={"m-8 w-2/3"}>
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
                <Stars starAvg={4} />
                <div className="mb-5"></div>
                <Price price={product.price} fSizeOfCurrency={30} fSizeOfDigit={35} />
                <p
                    className={
                        "text-[#636363] text-[15px] ProductSansLight max-w-[70%]"
                    }
                >
                    {product.description}
                </p>
                <div className={"flex justify-between items-center  "}>
                    <Image
                        className="mt-4"
                        src={brandLogo}
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