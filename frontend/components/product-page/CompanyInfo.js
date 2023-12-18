import Image from "next/image"
import dell from "public/images/DELL.svg"

const CompanyInfo = () => {
    return (
        <div className="w-5/12  h-auto mt-[-40px] ">
            <div className="h-[4.5rem]"> </div>
            <div className="flex flex-col items-center bg-white p-5 shadow-md">
                <Image
                    className="mb-4"
                    src={dell}
                    alt="Company Logo"
                    width={140}
                    height={140}
                />
                <p className="text-justify text-black text-[15px] ProductSansLight max-w-[90%]">
                    &nbsp;&nbsp;Корпорация Dell обеспечивает весь мир
                    технологиями, которые позволяют воплощать мечты в жизнь.
                    Клиенты доверяют нашим технологическим решениям, которые
                    позволяют им работать более эффективно, где бы они ни
                    находились: дома, в офисе, в школе и т. д. Узнайте больше о
                    нашей истории, целях и людях, которые воплощают в жизнь нашу
                    стратегию, ориентированную на клиентов.
                </p>
                <div className="flex flex-col text-center mt-5 text-[#1075B2] underline cursor-pointer text-[15px] ProductSansLight">
                    {/* <a>Все товары категории</a> */}
                    <a>Все товары бренда DELL</a>
                </div>
            </div>
        </div>
    );
};


export default CompanyInfo;