import React, {useEffect, useState} from "react";
import ProductItem from "./ProductItem";
import Image from "next/image";
import emptyBox from "../public/images/emptyBox.svg";
import {Pagination} from 'antd';
import {useCookies} from "react-cookie";
import {getSession} from "@/login";

const ProductsContainer = ({products, setCurrent, current, count}) => {
    console.log(count)
    const [token, setToken] = useState('');
    const[cookies] = useCookies(['session'])
    useEffect(() => {
        const fetchData = async () => {
            
                const session = await getSession(cookies);
            if (!session) {
                console.log("session not found")
            }
            const access = session?.user.accessToken
            setToken(access)

                
        };

        fetchData();
    }, []); 

    const [currentPage, setCurrentPage] = useState(current);
    const [itemsPerPage, setItemsPerPage] = useState(24); 


    const handlePageChange = (page) => {
        setCurrentPage(page);
        setCurrent(page);
    };

    return (
        <div className={'flex flex-col items-center'}>
            <div className="flex flex-wrap w-[100%] justify-center ">
                {
                    products.length > 0 ?
                        products.map((product) => (
                            <ProductItem key={product.id} signedIn={token} isFavorite={true}
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
                current={current}
                onChange={handlePageChange}
                total={Math.ceil(count)}
                pageSize={itemsPerPage}
                showSizeChanger={false} 
            />
        </div>
    )
}
export default ProductsContainer;