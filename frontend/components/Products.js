import styles from "../styles/Products.module.css"
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Image from "next/image"
import Link from "next/link";
import plus from "../public/images/plus.svg"
import minus from "../public/images/minus.svg"
import {Rating} from 'flowbite-react';

function Products() {

    const [products, setProducts] = useState([
        {
            "id": 1,
            "name": "Kaspersky Symphony",
            "price": "313 200",
            "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
            "category_id": "5",
            "brand_id": "4",
            "img_url": "{url}",
            "quantity": 6,
            "in_basket": false,
            "is_favorite": false,
            "tags": [
                {
                    "id": 1,
                    "tag_name": "popular"
                }
            ],
            "rating": 4.5
        },
        {
            "id": 2,
            "name": "Kaspersky Symphony",
            "price": "313 200",
            "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
            "category_id": "5",
            "brand_id": "4",
            "img_url": "{url}",
            "quantity": 5,
            "in_basket": false,
            "is_favorite": false,
            "tags": [
                {
                    "id": 1,
                    "tag_name": "popular"
                }
            ],
            "rating": 4.5
        }
    ]);

    const [fetchingStatus, setFetchingStatus] = useState(true)
    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //         .then(res => {
    //             const fetchedProducts = res.data;
    //             setProducts(fetchedProducts);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //             setFetchingStatus(false)
    //         });
    // }, []);

    const increaseQuantity = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity += 1;
        setProducts(updatedProducts);
    }

    const decreaseQuantity = (index) => {
        if (products[index].quantity !== 0) {
            const updatedProducts = [...products];
            updatedProducts[index].quantity -= 1;
            setProducts(updatedProducts);
        }
    }

    const toCart = (index) => {
        products[index].in_basket = true;
        console.log(products[index].in_basket)
    }

    return (
        <>
            {(fetchingStatus) ?
                <>
                    <div className="w-full h-96 mb-20 flex justify-center">
                        <div className={styles.container}>
                            {products.map((product, index) => (
                                <Link href="" key={index}>
                                    {/*to={`/products/${product.id}`}*/}
                                    <div className={styles.productCard}>
                                        <div className={styles.imageCard}>
                                            {/*<Image src=/>*/}
                                        </div>
                                        <div className="flex w-full ml-3 justify-between">
                                            {Component()}
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
                                            <p className="ProductSansMedium">{product.price} ₸</p>
                                        </div>
                                        <div className={styles.piecesAndToBucket}>
                                            <div className={styles.quantity}>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        increaseQuantity(index)
                                                    }}
                                                    className="bg-[#e9e9e9] border-solid border-1px mr-customMargin rounded-sm w-5 flex justify-center h-6">
                                                    <Image className="w-3" src={plus} alt="+"/>
                                                </button>
                                                <button
                                                    className="text-white bg-[#1075B2] mr-customMargin border-solid rounded-sm w-5 h-6">{product.quantity}
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        decreaseQuantity(index)
                                                    }}
                                                    className="bg-[#e9e9e9] border-solid border-1px rounded-sm w-5 flex justify-center h-6">
                                                    <Image className="w-3" src={minus} alt="-"/>
                                                </button>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    toCart(index)}}
                                                className={styles.toBucket}>
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

function Component() {
    return (
        <Rating>
            <Rating.Star/>
            <Rating.Star/>
            <Rating.Star/>
            <Rating.Star/>
            <Rating.Star filled={false}/>
        </Rating>
    );
}

export default Products;

