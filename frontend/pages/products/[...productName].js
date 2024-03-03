import MainContainer from "@/components/MainContainer";
import Path from "@/components/product-page/Path"
import ProductInfo from "@/components/product-page/ProductInfo"
import PopularProducts from "@/components/product-page/PopularProducts";
import DescriptionChooser from "@/components/product-page/DescriptionChooser";
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";


export default function ProductPage() {
    const router = useRouter();
    const [product, setProduct] = useState("");
    const {productName} = router.query;
    const [isLoading, setIsLoading] = useState(false);
    const [brandName, setBrandName] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let response;
            try {
                setIsLoading(true);
                response = await axios.get(`https://shop-01it-group.up.railway.app/api/v1/products/?search=${productName}`);
                await getBrand(response.data.results[0].brand.name);
                setIsLoading(false);
                setProduct(response.data.results[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        async function getBrand(brandName) {
            let response;
            try {
                response = await axios.get(`https://shop-01it-group.up.railway.app/api/v1/brands/${brandName}`);
                const brandLogo = response.data.results;
                setBrandName(response.data);
                return brandLogo;
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

    }, [productName, router]);

    console.log("product info", productName)
    console.log(product.id)

    return (
        <MainContainer>
            {
                !isLoading ?
                    <>
                        <Path/>
                        <ProductInfo product={product} brandName={brandName}/>
                        <div className="flex w-full mt-5">
                            <DescriptionChooser product={product} brand={brandName}/>
                        </div>
                        <div className="w-full flex justify-center mt-5">
                            <p className="text-justify text-[#1075B2] text-[18px] ProductSansLight max-w-[90%]">ВАМ
                                МОЖЕТ ПОНРАВИТЬСЯ</p>
                        </div>
                        <PopularProducts type="popular"/>
                        <div className="w-full flex justify-center mt-[-50px]">
                            <p className="text-justify text-[#1075B2] text-[18px] ProductSansLight max-w-[90%]">ПЕРСОНАЛЬНЫЕ
                                РЕКОМЕНДАЦИИ</p>
                        </div>
                        <PopularProducts type="popular"/>
                    </> :  
                    <div>
                        <div className="animate-pulse ">
                            <div className={"w-full mt-3 flex  rounded-[10px] bg-white p-5 "}>
                                <div className={"w-1/3 h-[400px] rounded-[10px] bg-slate-200 m-3"}></div>
                                <div className={"w-[50%] m-3"}>
                                    <div className={'h-[30px] rounded-[10px] bg-slate-200 mb-3'}></div>
                                    <div className={'h-[150px] rounded-[10px] bg-slate-200'}></div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </MainContainer>
    );
}
