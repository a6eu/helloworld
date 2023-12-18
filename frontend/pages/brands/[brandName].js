import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import MainContainer from "@/components/MainContainer";
function Brands() {

    return (
        <MainContainer>
            <div className="flex justify-start gap-3.5 self-start max-md:max-w-full max-md:flex-wrap max-md:justify-center mt-[2%]">
                <div className="justify-center text-sky-700 text-xs font-medium tracking-wide uppercase self-center whitespace-nowrap my-auto">
                    Бренды
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/90686ff203df2b0e4961fd187c9750feb8e61d4e71f08e663e4d0714a8365d90?"
                    className="aspect-[0.69] object-contain object-center w-[11px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
                <div className="justify-center text-sky-700 text-xs font-medium tracking-wide uppercase self-center whitespace-nowrap my-auto">
                    DELL
                </div>
            </div>
            <div className="bg-gray-100 p-6 mx-auto my-8 rounded-lg shadow-md ProductSansLight">
                <div className="flex">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">DELL</h2>
                        <p className="text-gray-700 mb-4 font-normal">
                            Корпорация Dell обеспечивает вас теми технологиями, которые позволяют воплощать мечты в жизнь.
                            Клиенты доверяют нам технологические решения, которые помогают им работать более эффективно, достигать новых успехов и расти, и мы стремимся предложить более цветные истории, цветы и лого, которые воплощают в жизнь нашу страсть, ориентированную на клиента.
                        </p>
                        <div className="flex gap-4 mt-[6%] w-auto">
                            <img src=".\images\linkIcon.png" alt=""/>
                            <a href="#" className="text-sky-700 hover:text-blue-800">Весь список брендов</a>
                        </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                        <img src=".\images/dellLogo.png" alt="DELL logo with blue circle and the word DELL in capital letters inside" className="rounded-full border border-gray-300 p-2 " />
                    </div>
                </div>
            </div>
            <div className="mb-[5%] mt-[4%]">
                <h1 className="text-center text-2xl text-sky-600 font-thin ProductSansLight">ТОВАРЫ БРЕНДА</h1>
                <Products/>
            </div>
        </MainContainer>
    );
}

export default Brands;