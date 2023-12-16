import styles from "../styles/Products.module.css"
import React, {useEffect, useState} from 'react';
import Image from "next/image"
import Link from "next/link";
import plus from "../public/images/plus.svg"
import minus from "../public/images/minus.svg"
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

function FilteredProducts(props) {
    console.log(props.type);
    const [products, setProducts] = useState([]);

    const new_products = [
        {
            "id": 1,
            "name": "Kaspersky Symphony",
            "price": "313 200",
            "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
            "category_id": "5",
            "brand_id": "4",
            "img_url": "https://example.com/kaspersky_symphony.jpg",
            "quantity": 5,
            "in_basket": true,
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
            "name": "Zhanik",
            "price": "313 200",
            "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
            "category_id": "5",
            "brand_id": "4",
            "img_url": "https://example.com/kaspersky_symphony.jpg",
            "quantity": 5,
            "in_basket": true,
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
            "id": 3,
            "name": "Product 3",
            "price": "175 000",
            "description": "Description for Product 20",
            "category_id": "4",
            "brand_id": "3",
            "img_url": "https://example.com/product20.jpg",
            "quantity": 15,
            "in_basket": true,
            "is_favorite": false,
            "tags": [
                {
                    "id": 20,
                    "tag_name": "featured"
                }
            ],
            "rating": 4.9
        },
        {
            "id": 4,
            "name": "Product 4",
            "price": "175 000",
            "description": "Description for Product 20",
            "category_id": "4",
            "brand_id": "3",
            "img_url": "https://example.com/product20.jpg",
            "quantity": 15,
            "in_basket": true,
            "is_favorite": false,
            "tags": [
                {
                    "id": 20,
                    "tag_name": "featured"
                }
            ],
            "rating": 4.9
        },
        {
            "id": 5,
            "name": "Product 5",
            "price": "175 000",
            "description": "Description for Product 20",
            "category_id": "4",
            "brand_id": "3",
            "img_url": "https://example.com/product20.jpg",
            "quantity": 15,
            "in_basket": true,
            "is_favorite": false,
            "tags": [
                {
                    "id": 20,
                    "tag_name": "featured"
                }
            ],
            "rating": 4.9
        },
        {
            "id": 6,
            "name": "Product 6",
            "price": "175 000",
            "description": "Description for Product 20",
            "category_id": "4",
            "brand_id": "3",
            "img_url": "https://example.com/product20.jpg",
            "quantity": 15,
            "in_basket": true,
            "is_favorite": false,
            "tags": [
                {
                    "id": 20,
                    "tag_name": "featured"
                }
            ],
            "rating": 4.9
        },
        {
            "id": 7,
            "name": "Product 7",
            "price": "175 000",
            "description": "Description for Product 20",
            "category_id": "4",
            "brand_id": "3",
            "img_url": "https://example.com/product20.jpg",
            "quantity": 15,
            "in_basket": true,
            "is_favorite": false,
            "tags": [
                {
                    "id": 20,
                    "tag_name": "featured"
                }
            ],
            "rating": 4.9
        },
        {
            "id": 8,
            "name": "Product 8",
            "price": "175 000",
            "description": "Description for Product 20",
            "category_id": "4",
            "brand_id": "3",
            "img_url": "https://example.com/product20.jpg",
            "quantity": 15,
            "in_basket": true,
            "is_favorite": false,
            "tags": [
                {
                    "id": 20,
                    "tag_name": "featured"
                }
            ],
            "rating": 4.9
        },
        {
            "id": 9,
            "name": "Product 9",
            "price": "175 000",
            "description": "Description for Product 20",
            "category_id": "4",
            "brand_id": "3",
            "img_url": "https://example.com/product20.jpg",
            "quantity": 15,
            "in_basket": true,
            "is_favorite": false,
            "tags": [
                {
                    "id": 20,
                    "tag_name": "featured"
                }
            ],
            "rating": 4.9
        }
    ]

    const popular = [
        {
            "id": 3,
            "name": "Erbo",
            "price": "313 200",
            "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
            "category_id": "5",
            "brand_id": "4",
            "img_url": "https://example.com/kaspersky_symphony.jpg",
            "quantity": 5,
            "in_basket": true,
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
            "id": 4,
            "name": "Zhanbo",
            "price": "313 200",
            "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
            "category_id": "5",
            "brand_id": "4",
            "img_url": "https://example.com/kaspersky_symphony.jpg",
            "quantity": 5,
            "in_basket": true,
            "is_favorite": false,
            "tags": [
                {
                    "id": 1,
                    "tag_name": "popular"
                }
            ],
            "rating": 4.5
        }
    ]

    const recomended = [
        {
            "id": 5,
            "name": "Syr",
            "price": "313 200",
            "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
            "category_id": "5",
            "brand_id": "4",
            "img_url": "https://example.com/kaspersky_symphony.jpg",
            "quantity": 5,
            "in_basket": true,
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
            "id": 6,
            "name": "Adil",
            "price": "313 200",
            "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
            "category_id": "5",
            "brand_id": "4",
            "img_url": "https://example.com/kaspersky_symphony.jpg",
            "quantity": 5,
            "in_basket": true,
            "is_favorite": false,
            "tags": [
                {
                    "id": 1,
                    "tag_name": "popular"
                }
            ],
            "rating": 4.5
        }
    ]

    useEffect(() => {
        if (props.type === "new") {
            setProducts(new_products);
        } else if (props.type === "popular") {
            setProducts(popular);
        } else {
            setProducts(recomended);
        }
    }, [props.type]);
    // if(props.type === "new") {
    //     setProducts(new_products);
    // }else if(props.type === "popular") {
    //     setProducts(popular);
    // }else {
    //     setProducts(recomended);
    // }


    const floatValues = [0.29, 1.44, 2.31, 3.48, 4.52];

    console.log(products);

    return (
                    <div className="w-full h-96 mb-20 flex justify-center">
                        <div className={styles.container}>
                            {products.map(product => (
                                <Link href="" to={`/products/${product.id}`} key={product.id}>
                                    <div className={styles.productCard}>
                                        <div className={styles.imageCard}>
                                        </div>
                                        <div className="flex w-full ml-3 justify-between">
                                            <Stars starAvg={floatValues[Math.floor(Math.random()*5)]} />
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
    );
}

function Stars(starAvg) {
    return (
        <div>
            <Rating
                style={{ maxWidth: 80 }}
                readOnly
                orientation="horizontal"
                value={starAvg.starAvg}
            />
        </div>
    )
}


export default FilteredProducts;

