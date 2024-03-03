import Image from "next/image"
import dell from "public/images/DELL.svg"
import Link from "next/link";
import defaultImage from "@/public/images/picture.png";

const CompanyInfo = ({brandInfo}) => {
    return (
        <div className="md:w-2/5 w-full h-auto md:mt-24">
            <div className="flex flex-col sm:flex-row md:flex-col gap-5 md:gap-0 lg:flex-col items-center bg-white p-5 shadow-md">
                {brandInfo.logo_url ? <Image
                        className="mb-4"
                        src={brandInfo.logo_url}
                        alt="Company Logo"
                        width={140}
                        height={140}
                    /> :
                    <Image className='mb-4' src={defaultImage} alt={'brand'} width={140}
                           height={140}/>}


                <div>
                    <p className="text-justify text-black text-[15px] ProductSansLight px-7">
                        &nbsp;&nbsp;{brandInfo.description}
                    </p>
                    <div
                        className="flex flex-col text-center mt-5 text-[#1075B2] underline cursor-pointer text-[15px] ProductSansLight">
                        <Link href={`/brands/${brandInfo.name}`}>Все товары бренда {brandInfo.name}</Link>
                    </div>

                </div>

            </div>
        </div>
    );
};


export default CompanyInfo;