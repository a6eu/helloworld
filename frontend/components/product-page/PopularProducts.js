import styles from '../../styles/Products.module.css'
import React, {useEffect, useState} from 'react';
import {Rating} from '@smastrom/react-rating'
import axios from 'axios';
import '@smastrom/react-rating/style.css'
import ProductItem from "@/components/ProductItem";

function PopularProducts() {
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        setToken(accessToken);
    }, []);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://shop-01it-group.up.railway.app/api/v1/products/');
                const initialProducts = response.data.results.slice(0, 20);
                const shuffledProducts = shuffleArray(initialProducts);
                setProducts(shuffledProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };


        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        fetchProducts();
    }, []);


    return (
        <div className="w-full h-[340px] mt-10 mb-20 flex justify-center">
            <div className={styles.container}>
                {products.map((product) => (
                    <ProductItem key={product.id} signedIn={token} isFavorite={true}
                                 product={product}/>
                ))}
            </div>
        </div>
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


export default PopularProducts;

