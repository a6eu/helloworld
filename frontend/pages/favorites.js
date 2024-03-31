import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "@/slices/favSlice";
import Image from "next/image";
import emptyBox from "@/public/images/emptyBox.svg";
import { config } from "@/config";
import { useCookies } from "react-cookie";
import { getSession } from "@/login";
import MainContainer from "@/components/MainContainer";
import UserNavbar from "@/components/UserNavbar";
import ProductsContainer from "@/components/ProductsContainer";
import ModalDialog from "@/components/ModalDialog";

function Favorites() {
    const [filterResult, setFilterResult] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const [cookies] = useCookies(['session']);
    const [isSessionActive, setIsSessionActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            const session = await getSession(cookies);
            const isActive = !!session;
            setIsSessionActive(isActive);
            // Если сессия активна, загружаем данные
            if (isActive) {
                fetchData();
            } else {
                console.log("Session not found");
                setIsLoading(false);
            }
        };

        checkSession();
    }, [cookies]); // Перепроверяем сессию при изменении cookies

    const fetchData = async () => {
        try {
            const session = await getSession(cookies);
            const access = session?.user.accessToken;
            const response = await axios.get(`${config.baseUrl}/api/v1/favorites/products?page=1`, {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            });

            const productsArray = response.data.results.map(product => product.product);
            productsArray.forEach(product => dispatch(addProduct(product.id)));
            setFilterResult(productsArray);
        } catch (error) {
            console.error("Error fetching favorites:", error);
        }
        setIsLoading(false);
    };

    return (
        <MainContainer>
            { isSessionActive ?
            <div className="flex w-full">
                <UserNavbar />
                <div className="my-4 w-3/4 flex flex-col">
                    <h1 className="ProductSansLight font-medium ml-3 text-[#1075B2]">ИЗБРАННЫЕ</h1>
                    {isLoading ? (
                        <div className="animate-pulse">
                            <div className={"w-full mt-3 flex rounded-[10px] bg-white p-5 "}>
                                <div className={"h-[100px] flex align-center pb-6 border-b-1px"}></div>
                                <div className={"w-[50%] m-3"}>
                                    <div className={'h-[30px] rounded-[10px] bg-slate-200 mb-3'}></div>
                                    <div className={'h-[150px] rounded-[10px] bg-slate-200'}></div>
                                </div>
                            </div>
                        </div>
                    ) : filterResult.length > 0 ? (
                        <ProductsContainer products={filterResult} />
                    ) : (
                        <div className='w-full flex flex-col items-center h-[60vh]'>
                            <Image src={emptyBox} alt="empty cart" width={112} height={112} />
                            <div className="ProductSansLight text-lg">Товары не найдены</div>
                        </div>
                    )}
                </div>
            </div>
                :
                <ModalDialog setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
            }
        </MainContainer>
    );
}

export default Favorites;
