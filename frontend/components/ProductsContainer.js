import React, { useState } from "react";
import ProductItem from "./ProductItem";
import Image from "next/image";
import emptyBox from "../public/images/emptyBox.svg";
import { Pagination } from 'antd';

const ProductsContainer = ({products}) => {

    const [currentPage, setCurrentPage] = useState(1); // Step 2: State for current page
    const [itemsPerPage, setItemsPerPage] = useState(24); // Items per page (you can adjust this)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (

        <div>
            <div className="flex w-[95%] flex-wrap">
                {
                    currentItems.length > 0 ?
                        currentItems.map((product) => (
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
            <Pagination className="mt-8"
                current={currentPage}
                onChange={handlePageChange}
                total={products.length}
                pageSize={itemsPerPage}
                showSizeChanger={false} // Remove this line if you want to allow changing items per page
            />
        </div>
    )
}
export default ProductsContainer;