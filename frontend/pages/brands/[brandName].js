import React, {useEffect, useState} from 'react'
import Products from "@/components/Products"
import MainContainer from "@/components/MainContainer"
import axios from "axios"
import {useRouter} from "next/router"
import Image from "next/image"

function BrandName() {
    const router = useRouter()
    const {brandName} = router.query
    const [prods, setProds] = useState([])
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        if (brandName) {
            axios.get(`https://helloworlddjangotestdeploy-production.up.railway.app/api/v1/brands/${brandName}`).then(
                (response) => {
                    setData(response.data);

                }
            ).catch(
                (error) => {
                    console.log("Error", error)
                }
            )

            getExact(brandName)
        }

        async function getExact(brandName) {
            try {
                setIsLoading(true)
                console.log(brandName)
                let response= await axios.get(`https://helloworlddjangotestdeploy-production.up.railway.app/api/v1/products/?brand__name__iexact=${brandName}`)
                setIsLoading(false)
                console.log(response.data)
                setProds(response.data.results);
            } catch (error) {
                console.error(error);
            }
            return prods
        }
    }, [brandName, router])




    return (
        <MainContainer>
            <div
                className="flex justify-start gap-3.5 self-start max-md:max-w-full max-md:flex-wrap max-md:justify-center mt-[2%]">
                <div
                    className="justify-center text-sky-700 text-xs font-medium tracking-wide uppercase self-center whitespace-nowrap my-auto">
                    Бренды
                </div>
                <svg width="9" height="14" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9.5 8" stroke="#1075B2" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M1 15L9.5 8" stroke="#1075B2" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div
                    className="justify-center text-sky-700 text-xs font-medium tracking-wide uppercase self-center whitespace-nowrap my-auto">
                    {data.name}
                </div>
            </div>
            <div className="bg-white p-6 mx-auto h-[50vh] my-8 rounded-lg shadow-md ProductSansLight">
                <div className="flex">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
                        <p className="text-gray-700 mb-4 font-normal h-3/5">{data.description}</p>
                        <div className="flex gap-4 mt-[6%] w-auto">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1.74194C9.48101 1.74194 9.87097 1.35199 9.87097 0.870968C9.87097 0.38995 9.48101 0 9 0V1.74194ZM18 9C18 8.51899 17.61 8.12903 17.129 8.12903C16.648 8.12903 16.2581 8.51899 16.2581 9H18ZM17.129 1.74194C17.61 1.74194 18 1.35199 18 0.870968C18 0.38995 17.61 0 17.129 0V1.74194ZM12.3817 0C11.9007 0 11.5107 0.38995 11.5107 0.870968C11.5107 1.35199 11.9007 1.74194 12.3817 1.74194V0ZM18 0.870968C18 0.38995 17.61 0 17.129 0C16.648 0 16.2581 0.38995 16.2581 0.870968H18ZM16.2581 5.67987C16.2581 6.16088 16.648 6.55084 17.129 6.55084C17.61 6.55084 18 6.16088 18 5.67987H16.2581ZM17.7449 1.48684C18.085 1.1467 18.085 0.595231 17.7449 0.2551C17.4047 -0.0850299 16.8533 -0.0850299 16.5132 0.2551L17.7449 1.48684ZM8.38417 8.38417C8.04403 8.72431 8.04403 9.27569 8.38417 9.61583C8.72431 9.95597 9.27569 9.95597 9.61583 9.61583L8.38417 8.38417ZM9 0H5.51613V1.74194H9V0ZM5.51613 0C2.46966 0 0 2.46966 0 5.51613H1.74194C1.74194 3.43169 3.43169 1.74194 5.51613 1.74194V0ZM0 5.51613V12.4839H1.74194V5.51613H0ZM0 12.4839C0 15.5304 2.46966 18 5.51613 18V16.2581C3.43169 16.2581 1.74194 14.5683 1.74194 12.4839H0ZM5.51613 18H12.4839V16.2581H5.51613V18ZM12.4839 18C15.5304 18 18 15.5304 18 12.4839H16.2581C16.2581 14.5683 14.5683 16.2581 12.4839 16.2581V18ZM18 12.4839V9H16.2581V12.4839H18ZM17.129 0H12.3817V1.74194H17.129V0ZM16.2581 0.870968V5.67987H18V0.870968H16.2581ZM16.5132 0.2551L8.38417 8.38417L9.61583 9.61583L17.7449 1.48684L16.5132 0.2551Z"
                                    fill="#303030"/>
                            </svg>
                            <a href="" className="text-sky-700 hover:text-blue-800">
                                Весь список брендов
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                        <Image
                            height={200}
                            width={200}
                            src={data.logo_url}
                            alt={''}
                            className="my-20"
                        />
                    </div>
                </div>
            </div>
            <div className="mb-[5%] mt-[4%]">
                <h1 className="text-center text-2xl text-sky-600 font-thin ProductSansLight">
                    ТОВАРЫ БРЕНДА
                </h1>
                {
                    isLoading ?
                        <div className="flex justify-center" role="status">
                            <svg aria-hidden="true"
                                 className="flex mt-20 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"/>
                            </svg>

                        </div>
                        :
                        <Products products={prods} fetchingStatus={true}/>
                }
            </div>
        </MainContainer>
    );
}

export default BrandName;
