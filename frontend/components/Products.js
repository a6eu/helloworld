import styles from "../styles/Products.module.css"
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Image from "next/image"
import Link from "next/link";
import plus from "../public/images/plus.svg"
import minus from "../public/images/minus.svg"
import {Rating} from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import ProductItem from "@/components/ProductItem";

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

    return (
        <>
            {(fetchingStatus) ?
                <>
                    <div className="w-full h-96 mt-6 flex justify-center">
                        <div className={styles.container}>
                            {products.map(product => (
                                <ProductItem key={product.id} product={product} />
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


export default Products;

