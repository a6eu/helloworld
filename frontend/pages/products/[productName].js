import MainContainer from "@/components/MainContainer";
import Image from "next/image"
import {useEffect, useState} from "react";
import {Rating} from "@smastrom/react-rating";
import Path from "@/components/product-page/Path"
import ProductInfo from "@/components/product-page/ProductInfo"
import ReviewsDescriptions from "@/components/product-page/ReviewsDescriptions"
import PopularProducts from "@/components/product-page/PopularProducts";




export default function ProductPage() {
   
    return (
        <MainContainer>
            <Path />
            <ProductInfo />
            <ReviewsDescriptions />
            <div className="w-full flex justify-center mt-5">
                <p className="text-justify text-blue-600 text-[18px] ProductSansLight max-w-[90%]">ВАМ МОЖЕТ ПОНРАВИТЬСЯ</p>
            </div>
            <PopularProducts type="popular"/>
            <div className="w-full flex justify-center mt-[-90px]">
                <p className="text-justify text-blue-600 text-[18px] ProductSansLight max-w-[90%]">ПЕРСОНАЛЬНЫЕ РЕКОМЕНДАЦИИ</p>
            </div>
            <PopularProducts type="popular"/>

            
        </MainContainer>
    );
}
