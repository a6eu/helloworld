import Products from '@/components/Products';
import React from "react";

export default function Cart() {
    return (
        <div className="">
            <h3 className="flex justify-center text-m text-blue-500">ПЕРСОНАЛЬНЫЕ РЕКОМЕНДАЦИИ</h3>
            <Products/>
        </div>
    )
}