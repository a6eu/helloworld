import styles from "../styles/Products.module.css";
import plus from "../public/images/plus.svg";
import minus from "../public/images/minus.svg";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import "@smastrom/react-rating/style.css";

const OneProduct = ({key, img_url, rating, is_favorite, name, price }) => {
    const floatValues = [0.29, 1.44, 2.31, 3.48, 4.52];

    return (
        <div className="w-1/4 h-[22rem] flex justify-center ">
            <div className={styles.container}>
              
                    <div className={styles.productCard}>
                   
                        <div className="w-[180px] h-[180px] mt-[10px] bg-gray-200 rounded-md overflow-hidden mb-2 transition ease-in-out duration-700  flex flex-col justify-center items-center">
                            <Image className="" src={img_url} alt={name} width={180} height={180} />
                        </div>
                        <div className="flex w-full ml-3 justify-between">
                            <Stars
                                starAvg={
                                    floatValues[Math.floor(Math.random() * 5)]
                                }
                            />
                            <Image
                                src={img_url} 
                                alt={name} 
                                height={16}
                                width={16}
                                className="mr-4"
                            />
                        </div>
                        <div>
                            <p className="text-xs w-10/12 ProductSansLight">
                                {name}
                            </p>
                            <p className="ProductSansMedium">
                                {price} ₸
                            </p>
                        </div>
                        <div className={styles.piecesAndToBucket}>
                            <div>
                                <button className="bg-[#e9e9e9] border-solid border-1px mr-customMargin rounded-sm w-5 flex justify-center h-6">
                                    <Image className="w-3" src={plus} alt="+" />
                                </button>
                                <button className="text-white bg-[#1075B2] mr-customMargin border-solid rounded-sm w-5 h-6">
                                    1
                                </button>
                                <button className="bg-[#e9e9e9] border-solid border-1px rounded-sm w-5 flex justify-center h-6">
                                    <Image
                                        className="w-3"
                                        src={minus}
                                        alt="-"
                                    />
                                </button>
                            </div>
                            <button>
                                В КОРЗИНУ
                            </button>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

function Stars(starAvg) {

    return (
        <div>
            <Rating
                style={{ maxWidth: 80 }}
                readOnly
                orientation="horizontal"
                value={starAvg.starAvg}
            />
        </div>
    )
}

export default OneProduct;
