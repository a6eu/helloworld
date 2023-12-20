import Image from "next/image"
import dell from "public/images/DELL.svg"
import Link from "next/link";

const CompanyInfo = ({brandInfo}) => {
    return (
        <div className="w-5/12  h-auto mt-[-40px] ">
            <div className="h-[4.5rem]"> </div>
            <div className="flex flex-col items-center bg-white p-5 shadow-md">
                <Image
                    className="mb-4"
                    src={brandInfo.logo_url}
                    alt="Company Logo"
                    width={140}
                    height={140}
                />
                <p className="text-justify text-black text-[15px] ProductSansLight max-w-[90%]">
                    &nbsp;&nbsp;{brandInfo.description}
                </p>
                <div className="flex flex-col text-center mt-5 text-[#1075B2] underline cursor-pointer text-[15px] ProductSansLight">
                    {/* <a>Все товары категории</a> */}
                    <Link href={`/brands/${brandInfo.name}`}>Все товары бренда {brandInfo.name}</Link>
                </div>
            </div>
        </div>
    );
};


export default CompanyInfo;