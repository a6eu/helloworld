import MainContainer from "@/components/MainContainer";
import UserNavbar from "@/components/UserNavbar";
import ProductsContainer from "@/components/ProductsContainer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "@/slices/favSlice";
import Image from "next/image";
import emptyBox from "@/public/images/emptyBox.svg";
import {config} from "@/config";
import { useCookies } from "react-cookie";
import { getSession } from "@/login";
function Favorites() {
    const [filterResult, setFilterResult] = useState([]);
    const dispatch = useDispatch()
    const [cookies] = useCookies(['session']);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const session = await getSession(cookies);
            if (!session) {
                console.log("session not found")
            }
            const access = session?.user.accessToken
                const response = await axios.get(`${config.baseUrl}/api/v1/favorites/products?page=1`, {
                    headers: {
                        Authorization: `Bearer ${access}`,
                    }
                });

                console.log(response.data.results);
                const productsArray = response.data.results.map(product => product.product);
                productsArray.forEach(product => dispatch(addProduct(product.id)));

                setFilterResult(productsArray);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <MainContainer>
            <head><title>Избранные товары</title></head>
            <div className="flex w-full">
                <UserNavbar />
                <div className="my-4 w-3/4 flex flex-col ">
                    <div className={"w-full flex start"}>
                        <h1 className="ProductSansLight font-medium ml-3 text-[#1075B2]">ИЗБРАННЫЕ</h1>
                    </div>
                    {
                        Array.isArray(filterResult) && filterResult.length > 0 ? (
                            <ProductsContainer products={filterResult} />
                        ) : (
                            <div className={'w-full flex flex-col items-center h-[60vh]'}>
                                <div className="flex justify-center mt-20">
                                    <Image className="w-28 h-28" src={emptyBox} alt="empty cart"></Image>
                                </div>
                                <div className="flex justify-center ProductSansLight text-lg">Товары не найдены
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </MainContainer>
    );
}

export default Favorites;
