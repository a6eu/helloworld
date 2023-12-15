import FilterDropdown from "./FilterDropdown";
import ProductItem from "./ProductItem";

const Catalog = ({products}) => {

    return (
        <div className="w-full p-3">
            <div className="flex justify-between align-middle">
                <div className="flex align-middle">
                    <a className="text-blue-400 cursor-pointer hover:underline">АНТИВИРУСНАЯ БЕЗОПАСНОСТЬ</a>
                    <h2 className="text-blue-400 text-2xl mr-3 ml-3 mt-[-5px]">{'>'}</h2>
                    <a className="text-blue-400 cursor-pointer hover:underline">антивирусы для бизнеса</a>

                </div>
                <div>
                    <FilterDropdown/>
                </div>
            </div>
            <div className="flex w-full justify-center flex-wrap">
                {
                    products.map((product) => (
                        <ProductItem
                        key={product.id}
                        img_url={product.img_url}
                        rating={product.rating}
                        name={product.name}
                        price={product.price}
                        is_favorite={product.is_favorite}
                        />
                    ))
                }
            </div>


        </div>
    ) 
}
export default Catalog;