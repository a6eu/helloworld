import styles from "../styles/Products.module.css";

const RenderingProduct = () => {
    return (
      
        <div className={styles.productCard}>
            <div className="w-full flex align-middle justify-center ">
                <div className="w-full h-36 bg-gray-200 rounded-md animate-pulse"></div>
            </div>

            <div className="flex w-full ml-2 justify-between mt-1">
                <div className="w-24 h-3 mt-2 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
            <div className="h-[70px] flex-col justify-between self-start">
                <p className="mb-3 w-40 h-4 bg-gray-200 mt-1 rounded-md animate-pulse"></p>

                <div className="bg-gray-200 h-4 w-full rounded-md animate-pulse"></div>
            </div>
      
        </div>
    )
};

export default RenderingProduct;
