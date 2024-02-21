import FilteredProducts from "@/components/FilteredProducts";
import React, {useState} from 'react';

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
        <div className="w-full flex justify-center mt-20 flex-col items-center">
            <div className="min-[320px]:max-sm:h-8 h-10 p-1 flex rounded-lg justify-center border-2 border-[#1075B2]">
                <button className={`border-solid ${newDesign} rounded-md w-1/3 text-xs transition ease-out px-5 min-[320px]:max-sm:break-words`}
                        onClick={() => typeSet("new")}>
                    <p className='min-[320px]:max-[420px]:text-[9px]'>НОВИНКИ</p>
                </button>
                <button className={`border-solid ${popularDesign} rounded-md w-1/3 text-xs transition ease-out px-5 min-[320px]:max-sm:break-words`}
                        onClick={() => typeSet("popular")}>
                    <p className='min-[320px]:max-[420px]:text-[9px]'>ПОПУЛЯРНЫЕ</p>
                </button>
                <button className={`border-solid ${recommendedDesign} rounded-md w-2/3 text-xs transition ease-out px-5 min-[320px]:max-sm:break-words`}
                        onClick={() => typeSet("recommended")}>
                    <p className='min-[320px]:max-[420px]:text-[9px]'>МЫ РЕКОМЕНДУЕМ</p>
                </button>
            </div>
            <FilteredProducts type={type}/>
        </div>
    );
}

export default CategoryChooser;