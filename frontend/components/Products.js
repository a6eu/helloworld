import styles from "../styles/Products.module.css"

import '@smastrom/react-rating/style.css'
import ProductItem from "@/components/ProductItem";

const floatValues = [0.29, 1.44, 2.31, 3.48, 4.52];

function Products({products, fetchingStatus}) {
    return (
        <>
            {(fetchingStatus) ?
                <>
                    <div className="w-full h-[340px] mt-6 flex justify-center">
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

