import MainContainer from "@/components/MainContainer";
import Path from "@/components/product-page/Path"
import ProductInfo from "@/components/product-page/ProductInfo"
import PopularProducts from "@/components/product-page/PopularProducts";
import DescriptionChooser from "@/components/product-page/DescriptionChooser";


export default function ProductPage() {
   
    return (
        <MainContainer>
            <Path path={["Безопасность", "антивирусы",  "Adobe Flash you"]}/>
            <ProductInfo />
            <div className="flex mt-5">
                <DescriptionChooser />
            </div>
            <div className="w-full flex justify-center mt-5">
                <p className="text-justify text-[#1075B2] text-[18px] ProductSansLight max-w-[90%]">ВАМ МОЖЕТ ПОНРАВИТЬСЯ</p>
            </div>
            <PopularProducts type="popular"/>
            <div className="w-full flex justify-center mt-[-50px]">
                <p className="text-justify text-[#1075B2] text-[18px] ProductSansLight max-w-[90%]">ПЕРСОНАЛЬНЫЕ РЕКОМЕНДАЦИИ</p>
            </div>
            <PopularProducts type="popular"/>

            
        </MainContainer>
    );
}
