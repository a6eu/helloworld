import styles from "../styles/Products.module.css"
import Image from "next/image"
import Link from "next/link";
import plus from "../public/images/plus.svg"
import minus from "../public/images/minus.svg"
import {Rating} from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import ProductItem from "@/components/ProductItem";

const floatValues = [0.29, 1.44, 2.31, 3.48, 4.52];

function Products({products, fetchingStatus}) {
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

