import CategoryButton from "./CategoryButton";

const BrandFilter = ({onBrandChange }) => (
    <div className="w-full h-auto  flex flex-wrap">
        {/* <CategoryButton buttonText="Symantec" onClick={() => console.log('Button clicked!')} />
        <CategoryButton buttonText="Avast" onClick={() => console.log('Button clicked!')} />
        <CategoryButton buttonText="Trend Micro" onClick={() => console.log('Button clicked!')} />
        <CategoryButton buttonText="McAfee" onClick={() => console.log('Button clicked!')} />
        <CategoryButton buttonText="Bitdefender" onClick={() => console.log('Button clicked!')} /> */}
        <CategoryButton buttonText="Symantec" brandId="1" onClick={onBrandChange} />
        <CategoryButton buttonText="Avast" brandId="2" onClick={onBrandChange} />
        <CategoryButton buttonText="Trend Micro" brandId="3" onClick={onBrandChange} />
        <CategoryButton buttonText="McAfee" brandId="4" onClick={onBrandChange} />
        <CategoryButton buttonText="Bitdefender" brandId="5" onClick={onBrandChange} />
    </div>   
)

export default BrandFilter;