import MainContainer from "@/components/MainContainer";
import Image from "next/image"
import {useEffect, useState} from "react";
import {Rating} from "@smastrom/react-rating";
import Path from "@/components/product-page/Path"
import ProductInfo from "@/components/product-page/ProductInfo"




export default function ProductPage() {
   
    return (
        <MainContainer>
            <Path />
            <ProductInfo />
        </MainContainer>
    );
}
