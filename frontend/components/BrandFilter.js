import CategoryButton from "./CategoryButton";

const BrandFilter = ({onBrandChange, brands, clearBrands}) => (
    <div className="w-full h-auto  flex flex-wrap">
        {[...brands].map((brandName, index) => (
            <CategoryButton key={index} buttonText={brandName} onClick={onBrandChange} clearBrands={clearBrands}/>
        ))}
    </div>
)

export default BrandFilter;