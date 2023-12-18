import React from 'react';
import styles from "@/styles/Products.module.css";
import Link from "next/link";
import Image from "next/image";
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import {Rating} from "@smastrom/react-rating";
import Price from "@/components/Price";

const floatValues = [0.29, 1.44, 2.31, 3.48, 4.52];

const ProductItem = ({ product }) => {

    const formatName = (title) => {
        let words = title.split(" ")
        let formattedTitle = "";

        for (let i = 0; i < words.length && formattedTitle.length < 30; i++) {
            formattedTitle += words[i] + " ";
        }
        if (formattedTitle.length > 30) {
            formattedTitle += "..."
        }

        return formattedTitle;
    }


    return (
        <Link href={{
            pathname: `/products/${encodeURIComponent(product.name)}`
        }} key={product.id}>
            <div className={styles.productCard}>
                <div className={styles.imageCard}>
                </div>
                <div className="flex w-full ml-3 justify-between">
                    <Stars starAvg={Math.random() * 4+1}/>
                    <Image
                        src="./images/bookmark.svg"
                        height={16}
                        width={16}
                        alt="favourites"
                        className="mr-4"
                    />
                </div>
                <div className={styles.nameAndPrice}>
                    <p className="text-[14px] pr-1 ProductSansLight mb-3">{formatName(product.name)}</p>
                    <Price price={product.price} fSizeOfDigit={16} fSizeOfCurrency={13} />

                </div>
                <div className={styles.piecesAndToBucket}>
                    <div className={styles.quantity}>
                        <button
                            className="bg-[#e9e9e9] border-solid border-1px mr-customMargin rounded-sm w-5 flex justify-center items-center h-6">
                            <Image className="w-3" src={plus} alt="+"/>
                        </button>
                        <button
                            className="text-white bg-[#1075B2] mr-customMargin border-solid rounded-sm w-5 h-6">1
                        </button>
                        <button
                            className="bg-[#e9e9e9] border-solid border-1px rounded-sm w-5 flex justify-center items-center h-6">
                            <Image className="w-3" src={minus} alt="-"/>
                        </button>
                    </div>
                    <button className={styles.toBucket}>
                        В КОРЗИНУ
                    </button>
                </div>
            </div>
        </Link>
    );
};

const Stars = (starAvg) => {
    if(starAvg !== 1 || starAvg!==2 || starAvg !== 3 || starAvg!==4 ||starAvg !== 5) {
        if(starAvg < 1) {
            starAvg = 0.29;
        }else if(starAvg > 1 && starAvg < 2) {
            starAvg = 1.44;
        }else if(starAvg > 2 && starAvg < 3) {
            starAvg = 2.31;
        }else if(starAvg > 3 && starAvg < 4) {
            starAvg = 3.48;
        }else if(starAvg > 4 && starAvg < 5) {
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