import Image from "next/image";

const ProductItem = () => (

    <div className="w-[220px] h-[320px] bg-white m-2 flex flex-col items-center rounded-md">
        <div className="w-[200px] h-[200px] bg-gray-200 mt-2 rounded-md">
            <Image src="images/product.svg" width={200} height={200}/>
        </div>
    
        <div className="flex justify-between w-full p-2">
            <div className="flex">
                <Image src="/images/starfilled.svg" width={20} height={20} ></Image>
                <Image src="/images/starfilled.svg" width={20} height={20} ></Image>
                <Image src="/images/starfilled.svg" width={20} height={20} ></Image>
                <Image src="/images/starunfilled.svg" width={20} height={20} ></Image>
                <Image src="/images/starunfilled.svg" width={20} height={20} ></Image>

            </div>
 
            <div>
                <Image src="/images/bookmark.svg" width={20} height={20} />
            </div>
        </div>

        <div className="p-3 pt-0 pb-2">Microsoft Office Для дома и бизнеса 2021</div>       
        <h1 className="text-xl self-start pl-3 pb-2">148 470 ₸</h1>
    </div>

)

export default ProductItem;