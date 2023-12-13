import styles from "../styles/Products.module.css"
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Image from "next/image"
import Link from "next/link";
import plus from "../public/images/plus.svg"
import minus from "../public/images/minus.svg"
import {Rating} from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

function Products() {
    const [products, setProducts] = useState([]);
    const [fetchingStatus, setFetchingStatus] = useState(true)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const fetchedProducts = res.data;

                setProducts(fetchedProducts);
                console.log(res.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setFetchingStatus(false)
            });
    }, []);

    const floatValues = [0.29, 1.44, 2.31, 3.48, 4.52];



    return (
        <>
            {(fetchingStatus) ?
                <>
                    <div className="w-full h-96 mt-6 flex justify-center">
                        <div className={styles.container}>
                            {products.map(product => (
                                <Link href={{
                                    pathname: `/products/${encodeURIComponent(product.name)}`
                                }} key={product.id}>
                                    <div className={styles.productCard}>
                                        <div className={styles.imageCard}>
                                        </div>
                                        <div className="flex w-full ml-3 justify-between">
                                            <Stars starAvg={floatValues[Math.floor(Math.random() * 5)]}/>
                                            <Image
                                                src="./images/bookmark.svg"
                                                height={16}
                                                width={16}
                                                alt="favourites"
                                                className="mr-4"
                                            />
                                        </div>
                                        <div className={styles.nameAndPrice}>
                                            <p className="text-xs w-10/12 ProductSansLight">{product.name}</p>
                                            <p className="ProductSansMedium">{product.username} ₸</p>
                                        </div>
                                        <div className={styles.piecesAndToBucket}>
                                            <div className={styles.quantity}>
                                                <button
                                                    className="bg-[#e9e9e9] border-solid border-1px mr-customMargin rounded-sm w-5 flex justify-center h-6">
                                                    <Image className="w-3" src={plus} alt="+"/>
                                                </button>
                                                <button
                                                    className="text-white bg-[#1075B2] mr-customMargin border-solid rounded-sm w-5 h-6">1
                                                </button>
                                                <button
                                                    className="bg-[#e9e9e9] border-solid border-1px rounded-sm w-5 flex justify-center h-6">
                                                    <Image className="w-3" src={minus} alt="-"/>
                                                </button>
                                            </div>
                                            <button className={styles.toBucket}>
                                                В КОРЗИНУ
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </> :
                <div>
                </div>
            }
        </>
    );
}

function Stars(starAvg) {

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


export default Products;

