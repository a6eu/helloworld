import FilteredProducts from "@/components/FilteredProducts";
import React, { useState } from 'react';

function CategoryChooser() {
    const [type, setType] = useState("new");
    const [newDesign, setNewDesign] = useState("bg-[#1075B2] text-white");
    const [popularDesign, setPopularDesign] = useState("text-[#1075B2]");
    const [recommendedDesign, setRecommendedDesign] = useState("text-[#1075B2]");

    function typeSet(typeProd) {
        setType(typeProd);
        if (typeProd === "new") {
            setNewDesign("bg-[#1075B2] text-white");
            setRecommendedDesign("text-[#1075B2]");
            setPopularDesign("text-[#1075B2]");
        } else if (typeProd === "popular") {
            setNewDesign("text-[#1075B2]");
            setRecommendedDesign("text-[#1075B2]");
            setPopularDesign("bg-[#1075B2] text-white");
        } else {
            setNewDesign("text-[#1075B2]");
            setRecommendedDesign("bg-[#1075B2] text-white");
            setPopularDesign("text-[#1075B2]");
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center mt-20">
            <div className="flex justify-center">
                <button
                    className={`h-10 rounded-lg border-2 border-[#1075B2] text-xs transition ease-out px-4 ${newDesign} mr-2`}
                    onClick={() => typeSet("new")}
                >
                    <p className='text-[9px] sm:text-xs'>НОВИНКИ</p>
                </button>
                <button
                    className={`h-10 rounded-lg border-2 border-[#1075B2] text-xs transition ease-out px-4 ${popularDesign} mx-2`}
                    onClick={() => typeSet("popular")}
                >
                    <p className='text-[9px] sm:text-xs'>ПОПУЛЯРНЫЕ</p>
                </button>
                <button
                    className={`h-10 rounded-lg border-2 border-[#1075B2] text-xs transition ease-out px-4 ${recommendedDesign} ml-2`}
                    onClick={() => typeSet("recommended")}
                >
                    <p className='text-[9px] sm:text-xs'>МЫ РЕКОМЕНДУЕМ</p>
                </button>
            </div>
            <FilteredProducts type={type}/>
        </div>
    );
}

export default CategoryChooser;
