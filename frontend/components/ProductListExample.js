// In components/ProductList.js
import ProductItem from "@/components/ProductItem";
import { useRouter } from "next/router";
import { disconnect } from "process";

const ProductListExample = ({ products, count, next, previous }) => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center">

            <div className="flex">
                {products.map((product) => (
                    <ProductItem product={product} />
                ))}
            </div>

            
        </div>
    );
};

export default ProductListExample;
