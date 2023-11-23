import Dropdown from "./Dropdown";
import ProductItem from "./ProductItem";


const Catalog = () => (
    <div className="w-full p-3">
        <div className="flex justify-between align-middle">
            <div className="flex align-middle">
                <a className="text-blue-400 cursor-pointer hover:underline">АНТИВИРУСНАЯ БЕЗОПАСНОСТЬ</a>
                <h2 className="text-blue-400 text-2xl mr-3 ml-3 mt-[-5px]">{'>'}</h2>
                <a className="text-blue-400 cursor-pointer hover:underline">антивирусы для бизнеса</a>
                
            </div>
            <div>
                <Dropdown/>
            </div>
        </div>
        <div className="flex w-full justify-center flex-wrap">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>

        </div>
        

    </div>
)
export default Catalog;