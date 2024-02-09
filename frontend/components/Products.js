import styles from "../styles/Products.module.css"

import '@smastrom/react-rating/style.css'
import ProductItem from "@/components/ProductItem";
import {useEffect, useState} from "react";

const floatValues = [0.29, 1.44, 2.31, 3.48, 4.52];




function Products({products, fetchingStatus}) {
    const [token, setToken] = useState('');
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        setToken(accessToken);
    }, []);
    return (
        <>
            {(fetchingStatus) ?
                <>
                    <div className="w-full h-[340px] mt-6 flex justify-center">
                        <div className={styles.container}>
                            {products.map((product, signedIn) => {
                                return (
                                    signedIn ?
                                        <ProductItem key={product.id} signedIn={signedIn} isFavorite={true}
                                                     product={product}/>
                                        :
                                        <ProductItem key={product.id} signedIn={signedIn} isFavorite={false}
                                                     product={product}/>
                                );
                            })}
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

