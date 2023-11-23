import CategoryButton from "./CategoryButton";

const BrandFilter = () => (
    <div className="w-full h-auto  flex flex-wrap">
        <CategoryButton buttonText="Symantec" onClick={() => console.log('Button clicked!')} />
        <CategoryButton buttonText="Avast" onClick={() => console.log('Button clicked!')} />
        <CategoryButton buttonText="Trend Micro" onClick={() => console.log('Button clicked!')} />
        <CategoryButton buttonText="McAfee" onClick={() => console.log('Button clicked!')} />
        <CategoryButton buttonText="Bitdefender" onClick={() => console.log('Button clicked!')} />
        {/* <button className="bg-gray-200 hover:bg-blue-400 hover:text-white h-[25px] p-2 flex items-center rounded-md m-1">Symantec</button>
        <button className="bg-gray-200 hover:bg-blue-400 hover:text-white h-[25px] p-2 flex items-center rounded-md m-1">Avast</button>
        <button className="bg-gray-200 hover:bg-blue-400 hover:text-white h-[25px] p-2 flex items-center m-1 rounded-md ">Trend Micro</button>
        <button className="bg-gray-200 hover:bg-blue-400 hover:text-white h-[25px] p-2 flex items-center rounded-md m-1">McAfee</button>
        <button className="bg-gray-200 hover:bg-blue-400 hover:text-white h-[25px] p-2 flex items-center rounded-md m-1">Bitdefender</button> */}
    </div>

        
    
)

export default BrandFilter;