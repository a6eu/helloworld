import MainContainer from "@/components/MainContainer";
import Image from "next/image"
import {useEffect, useState} from "react";
import {Rating} from "@smastrom/react-rating";
import Path from "@/components/product-page/Path"
import ProductInfo from "@/components/product-page/ProductInfo"
import PopularProducts from "@/components/product-page/PopularProducts";
import DescriptionChooser from "@/components/product-page/DescriptionChooser";



export default function ProductPage() {
   
    return (
        <MainContainer>
            <Path path={["БЕзопасность", "антивирусы",  "Adobe Flashn mnb nmnbnm"]}/>
            <ProductInfo />
            <div className="flex mt-5">
                <DescriptionChooser />
                {/* <Reviews /> */}
                {/* <CompanyInfo /> */}
            </div>
            <div className="w-full flex justify-center mt-5">
                <p className="text-justify text-[#1075B2] text-[18px] ProductSansLight max-w-[90%]">ВАМ МОЖЕТ ПОНРАВИТЬСЯ</p>
            </div>
            <PopularProducts type="popular"/>
            <div className="w-full flex justify-center mt-[-90px]">
                <p className="text-justify text-[#1075B2] text-[18px] ProductSansLight max-w-[90%]">ПЕРСОНАЛЬНЫЕ РЕКОМЕНДАЦИИ</p>
            </div>
            <PopularProducts type="popular"/>

            
        </MainContainer>
    );
}
