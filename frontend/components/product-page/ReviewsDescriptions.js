import Image from "next/image"
import dell from "public/images/DELL.svg"
import DescriptionChooser from "@/components/product-page/DescriptionChooser";



const ReviewsDescriptions = () => {
    return (
        <div className="flex mt-5">
                <div className="flex flex-col w-7/12  p-3 mr-4">
                    <DescriptionChooser />
                    <ul className="bg-white p-3 shadow-md mt-5" >
                        <li className="flex h-12 items-center pl-10 bg-white">
                            <div>Microsoft_UX_Design</div>
                            <div className="ml-[20%]">Microsoft_UX_Design</div>
                        </li>
                        <li className="flex h-12 items-center pl-10 bg-gray-100">
                            <div>Microsoft_UX_Design</div>
                            <div className="ml-[20%]">Microsoft_UX_Design</div>
                        </li>
                        <li className="flex h-12 items-center pl-10 bg-white">
                            <div>Microsoft_UX_Design</div>
                            <div className="ml-[20%]">Microsoft_UX_Design</div>
                        </li>
                        <li className="flex h-12 items-center pl-10 bg-gray-100">
                            <div>Microsoft_UX_Design</div>
                            <div className="ml-[20%]">Microsoft_UX_Design</div>
                        </li>
                        <li className="flex h-12 items-center pl-10 bg-white">
                            <div>Microsoft_UX_Design</div>
                            <div className="ml-[20%]">Microsoft_UX_Design</div>
                        </li>
                        <li className="flex h-12 items-center pl-10 bg-gray-100">
                            <div>Microsoft_UX_Design</div>
                            <div className="ml-[20%]">Microsoft_UX_Design</div>
                        </li>
                        <li className="flex h-12 items-center pl-10 bg-white">
                            <div>Microsoft_UX_Design</div>
                            <div className="ml-[20%]">Microsoft_UX_Design</div>
                        </li>
                        <li className="flex h-12 items-center pl-10 bg-gray-100">
                            <div>Microsoft_UX_Design</div>
                            <div className="ml-[20%]">Microsoft_UX_Design</div>
                        </li>
                        <li className="flex h-12 items-center pl-10 bg-white">
                            <div>Microsoft_UX_Design</div>
                            <div className="ml-[20%]">Microsoft_UX_Design</div>
                        </li>
                        <li className="flex h-12 items-center pl-10 bg-gray-100">
                            <div>Microsoft_UX_Design</div>
                            <div className="ml-[20%]">Microsoft_UX_Design</div>
                        </li>
                    </ul>
                </div>
                <div className="w-5/12  h-auto ">
                    <div className="h-[4.5rem]"> </div>
                    <div className="flex flex-col items-center bg-white p-5 shadow-md">
                        <Image
                            className="mb-4"
                            src={dell}
                            alt="Company Logo"
                            width={140}
                            height={140}
                        />
                        <p className="text-justify text-black text-[15px] ProductSansLight max-w-[90%]" >&nbsp;&nbsp;Корпорация Dell обеспечивает весь мир технологиями, которые позволяют воплощать мечты в жизнь. Клиенты доверяют нашим технологическим решениям, которые позволяют им работать более эффективно, где бы они ни находились: дома, в офисе, в школе и т. д. Узнайте больше о нашей истории, целях и людях, которые воплощают в жизнь нашу стратегию, ориентированную на клиентов.</p>
                        <div className="flex flex-col text-center mt-5 text-blue-500 underline cursor-pointer text-[15px] ProductSansLight">
                            <a>Все товары категории</a>
                            <a>Все товары бренда DELL</a>
                        </div>
                    </div>
                    
                </div>
            </div>
    )

}

export default ReviewsDescriptions ;