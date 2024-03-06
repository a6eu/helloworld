import MainContainer from "@/components/MainContainer";
import UserNavbar from "@/components/UserNavbar";
import ProductsContainer from "@/components/ProductsContainer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "@/slices/favSlice";

function Favorites() {
    const [filterResult, setFilterResult] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://shop-01it-group.up.railway.app/api/v1/favorites/products?page=1', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
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
        console.log(localStorage.getItem("accessToken"));
    }, []); 

    return (
        <MainContainer>
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
                            <div> No favorites found. </div>
                        )
                    }
                </div>
            </div>
        </MainContainer>
    );
}

export default Favorites;
