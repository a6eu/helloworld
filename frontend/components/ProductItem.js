import React, {useEffect, useState} from 'react';
import styles from "@/styles/Products.module.css";
import Link from "next/link";
import Image from "next/image";
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import {Rating} from "@smastrom/react-rating";
import Price from "@/components/Price";
import ModalDialog from "@/components/ModalDialog";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";

const floatValues = [0.29, 1.44, 2.31, 3.48, 4.52];
const ProductItem = ({product, signedIn}) => {
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch();
    const path = useSelector((state) => state.breadcrumb.path);

    const formatName = (title) => {
        let words = title.split(" ")
        let formattedTitle = "";

        for (let i = 0; i < words.length && formattedTitle.length < 20; i++) {
            formattedTitle += words[i] + " ";
        }
        if (formattedTitle.length > 30) {
            formattedTitle += "..."
        }

        return formattedTitle;
    }
    let [isModalOpen, setIsModalOpen] = useState(false)
    const statementChecker = () => {
        if (signedIn) {
            console.log("12321")
        } else {
            setIsModalOpen(true)
        }
    }
    const handleButtonClick = async (product_id, quantity) => {
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

            if (response.status === 201) {
                alert("Success");
                console.log(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };


    const increaseQuantity = () => {
            setQuantity(quantity + 1)
        }
    ;
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };
    return (
        <div className={styles.productCard}>
            <Link href={{pathname: `/products/${encodeURIComponent(product.name)}`}}
                  key={product.id}
                  onClick={() => dispatch(setPath([...path, product.name]))}
            >
                <div className='w-full h-44 bg-yellow- flex align-middle justify-center '>
                    <Image className='w-full h-40 pt-4' src={product.img_url} alt={product.name} width={180} height={180}/>

                </div>
            </Link>
            <div className="flex w-full ml-3 justify-between mt-2">
                <Stars starAvg={Math.random() * 4 + 1}/>
                <button onClick={statementChecker}>
                    <svg className={`mr-4 hover:fill-[#1075b2]`} width="16" height="16" viewBox="0 0 16 16"
                         fill="white"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.7286 2.21464C12.4619 2.29998 12.9999 2.93264 12.9999 3.67131V14L7.99994 11.5L2.99994 14V3.67131C2.99994 2.93264 3.53727 2.29998 4.27127 2.21464C6.74873 1.92707 9.25115 1.92707 11.7286 2.21464Z"
                            stroke="#4CC3F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className={styles.nameAndPrice}>
                <p className="text-[14px] pr-1 ProductSansLight mb-3">{product.name}</p>
                <Price price={product.price} fSizeOfDigit={16} fSizeOfCurrency={13}/>

            </div>
            <div className={styles.piecesAndToBucket}>
                <div className={styles.quantity}>
                    <button
                        className="bg-[#e9e9e9] border-solid border-1px mr-customMargin rounded-sm w-5 flex justify-center items-center h-6"
                        onClick={increaseQuantity}>
                        <Image className="w-3" src={plus} alt="+"/>
                    </button>
                    <button
                        className="text-white bg-[#1075B2] mr-customMargin border-solid rounded-sm w-5 h-6">{quantity}
                    </button>
                    <button
                        className="bg-[#e9e9e9] border-solid border-1px rounded-sm w-5 flex justify-center items-center h-6"
                        onClick={decreaseQuantity}>
                        <Image className="w-3" src={minus} alt="-"/>
                    </button>
                </div>
                <button className={styles.toBucket} onClick={() => handleButtonClick(product.id, quantity)}>
                    В КОРЗИНУ
                </button>
            </div>
            <ModalDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
    );
};

const Stars = (starAvg) => {
    if (starAvg !== 1 || starAvg !== 2 || starAvg !== 3 || starAvg !== 4 || starAvg !== 5) {
        if (starAvg < 1) {
            starAvg = 0.29;
        } else if (starAvg > 1 && starAvg < 2) {
            starAvg = 1.44;
        } else if (starAvg > 2 && starAvg < 3) {
            starAvg = 2.31;
        } else if (starAvg > 3 && starAvg < 4) {
            starAvg = 3.48;
        } else if (starAvg > 4 && starAvg < 5) {
            starAvg = 4.52;
        }
    }

    return (
        <div>
            <Rating
                style={{maxWidth: 80}}
                readOnly
                orientation="horizontal"
                value={starAvg.starAvg}
            />
        </div>
    )
}

export default ProductItem;