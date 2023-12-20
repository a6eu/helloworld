import MainContainer from "@/components/MainContainer";
import Path from "@/components/product-page/Path"
import ProductInfo from "@/components/product-page/ProductInfo"
import PopularProducts from "@/components/product-page/PopularProducts";
import DescriptionChooser from "@/components/product-page/DescriptionChooser";
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";


export default function ProductPage() {
    const router = useRouter()
    const [product, setProduct] = useState("")
    const {productName} = router.query
    const [category, setCategory] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [brandName, setBrandName] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let response
            console.log("HFHFHF", router)
            try {
                setIsLoading(true)
                response = await axios.get(`https://helloworlddjangotestdeploy-production.up.railway.app/api/v1/products/?search=${productName}`);
                setProduct(response.data.results[0]);
                console.log(response.data.results[0].brand);
                await getBrand(response.data.results[0].brand.name)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            try {
                 setCategory(response.data.results[0].category)
            } catch (error) {
                console.error('Error fetching data:', error

                );
            }
        };
        async function getBrand(brandName) {
            let response
            try {
                console.log("br", brandName)
                response= await axios.get(`https://helloworlddjangotestdeploy-production.up.railway.app/api/v1/brands/${brandName}`)

                const brandLogo = response.data.results
                setBrandName(response.data)
                console.log("BRAND LOGO", response.data)
                return brandLogo
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

    }, [productName, router]);



    return (
        <MainContainer>
            {
                !isLoading ?
                    <>
                        <Path path={["Безопасность", `${category.name}`, `${product.name}`]}/>
                        <ProductInfo product={product} brandName={brandName}/>
                        <div className="flex mt-5">
                            <DescriptionChooser product={product} brand={brandName}/>
                        </div>
                        <div className="w-full flex justify-center mt-5">
                            <p className="text-justify text-[#1075B2] text-[18px] ProductSansLight max-w-[90%]">ВАМ МОЖЕТ ПОНРАВИТЬСЯ</p>
                        </div>
                        <PopularProducts type="popular"/>
                        <div className="w-full flex justify-center mt-[-50px]">
                            <p className="text-justify text-[#1075B2] text-[18px] ProductSansLight max-w-[90%]">ПЕРСОНАЛЬНЫЕ РЕКОМЕНДАЦИИ</p>
                        </div>
                        <PopularProducts type="popular"/>
                    </> :
                    <div>Loading</div>
            }


            
        </MainContainer>
    );
}
