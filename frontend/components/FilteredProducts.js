import styles from "../styles/Products.module.css";
import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import RenderingProduct from "./RenderingProduct";

import "@smastrom/react-rating/style.css";
import ProductItem from "@/components/ProductItem";

function FilteredProducts(type) {
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        setToken(accessToken);
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "https://shop-01it-group.up.railway.app/api/v1/products/"
                );
                console.log("Products: ", response.data)
                const initialProducts = response.data.results.slice(0, 20);
                const shuffledProducts = shuffleArray(initialProducts);
                setProducts(shuffledProducts);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
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
    }, [type]);

    return (
        <div className="w-full h-[350px] mt-10 mb-20 flex justify-center">
            <div className={styles.container}>
                {!isLoading ? (
                    <>
                        {products.map((product) => (
                            <ProductItem
                                key={product.id}
                                signedIn={token}
                                isFavorite={true}
                                product={product}
                                isLoading={isLoading}
                            />
                        ))}
                    </>
                ) : 
                    <div className="flex">
                        <RenderingProduct />
                        <RenderingProduct />
                        <RenderingProduct />
                        <RenderingProduct />
                        <RenderingProduct />
                        <RenderingProduct />
                    </div>
                }
            </div>
        </div>
    );
}

const Stars = (starAvg) => {
    if (
        starAvg !== 1 ||
        starAvg !== 2 ||
        starAvg !== 3 ||
        starAvg !== 4 ||
        starAvg !== 5
    ) {
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
                style={{ maxWidth: 80 }}
                readOnly
                orientation="horizontal"
                value={starAvg.starAvg}
            />
        </div>
    );
};

export default FilteredProducts;
