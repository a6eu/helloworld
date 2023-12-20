import React, {useEffect, useState} from 'react';



const Price = ({price, fSizeOfDigit, fSizeOfCurrency}) => {
    const [fontSizeOfDigit, setFontSizeOfDigit] = useState(20)
    const [fontSizeOfCurrency, setFontSizeOfCurrency] = useState(16)

    function formatNumberWithSpaces(number) {
        if (typeof number === "string")
            return number.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    useEffect(() => {
        if (fSizeOfDigit !== undefined) setFontSizeOfDigit(fSizeOfDigit);
        if (fSizeOfCurrency !== undefined) setFontSizeOfCurrency(fSizeOfCurrency);
    }, [])

    return (
        <p className={`text-[${fontSizeOfCurrency}px] ProductSansThin`}>
            <span className={`text-[${fontSizeOfDigit}px] ProductSansLight`}>{formatNumberWithSpaces(price)}</span> <strong>₸</strong>
        </p>
    )
};

export default Price;