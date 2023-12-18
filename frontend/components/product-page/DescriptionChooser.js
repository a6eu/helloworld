
import React, {useState} from 'react';
import Descriptions from "./Descriptions";
import Reviews from './Reviews';
import CompanyInfo from './CompanyInfo';

function DescriptionChooser() {
    const [type, setType] = useState("Descriptions");
    const [newDesign, setNewDesign] = useState("bg-[#1075B2] text-white");
    const [popularDesign, setPopularDesign] = useState("text-[#1075B2]");
    const [recommendedDesign, setRecommendedDesign] = useState("text-[#1075B2]");


    function typeSet(typeProd) {
        setType(typeProd);
        if (typeProd === "Descriptions") {
            setNewDesign("bg-[#1075B2] text-white");
            setRecommendedDesign("text-[#1075B2]");
            setPopularDesign("text-[#1075B2]");
        } else if (typeProd === "Reviews") {
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
        <div className="w-full flex justify-center flex-col items-center">
            <div className="h-10 p-1 flex rounded-lg justify-center border-2 border-[#1075B2] ml-[-550px] mt-4">
                <button className={`border-solid ${newDesign} rounded-md w-32 text-xs transition ease-out`}
                        onClick={() => typeSet("Descriptions")}>
                    ОПИСАНИЕ
                </button>
                <button className={`border-solid ${popularDesign} rounded-md w-32 text-xs transition ease-out`}
                        onClick={() => typeSet("Reviews")}>
                    ОТЗЫВЫ
                </button>
                {/* <button className={`border-solid ${recommendedDesign} rounded-md w-32 text-xs transition ease-out`}
                        onClick={() => typeSet("recommended")}>
                    ДОСТАВКА
                </button> */}
            </div>
            {/* <FilteredProducts type={type}/> */}
            {/* Условный рендеринг */}
            <div className='flex'>
                {type === 'Descriptions' && <Descriptions />}
                {type === 'Reviews' && <Reviews />}
                <CompanyInfo />
            </div>
            
        </div>
    );
}

export default DescriptionChooser;