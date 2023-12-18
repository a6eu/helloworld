import React, {useEffect, useState} from 'react';

const CategoryButton = ({buttonText, onClick, clearBrands}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        onClick(buttonText);
    };

    useEffect(() => {
        setIsClicked(false);
    }, [clearBrands])

    return (
        <div>
            {isClicked ? (
                <button
                    className="bg-[#4CC3F2] text-white h-[25px] ProductSansLight p-2 flex items-center rounded-md m-1 transition-colors duration-300"
                    onClick={handleClick}
                >
                    {buttonText}
                </button>
            ) : (
                <button
                    className="bg-[#E9E9E9] hover:border-[#4CC3F2] ProductSansLight hover:border-2 hover:ml-[1px] h-[25px] p-2 flex items-center rounded-md m-1 text-[#3C3C3C] transition-colors duration-300"
                    onClick={handleClick}
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default CategoryButton;
