import { useEffect } from 'react';

const useJivoWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//code.jivo.ru/widget/mKU7w8ebNV";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
};

export default useJivoWidget;
