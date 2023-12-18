import ProductItem from "./ProductItem";
import Image from "next/image";
import emptyBox from "../public/images/emptyBox.svg";
import React from "react";

const ProductsContainer = ({products}) => {

    return (
        <div className="flex w-[95%] flex-wrap">
            {
                products.length > 0 ?
                products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                ))
                    :
                <div className={'w-full flex flex-col items-center h-[60vh]'}>
                    <div className="flex justify-center mt-20">
                        <Image className="w-28 h-28" src={emptyBox} alt="empty cart"></Image>
                    </div>
                    <div className="flex justify-center ProductSansLight text-lg">Товары не найдены</div>
                </div>
            }
        </div>
    )
}
export default ProductsContainer;