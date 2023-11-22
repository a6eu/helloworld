import Dropdown from "./Dropdown";

const Catalog = () => (
    <div className="w-full p-3">
        <div className="flex justify-between align-middle">
            <div className="flex align-middle">
                <a className="">АНТИВИРУСНАЯ БЕЗОПАСНОСТЬ</a>
                <h2 className="mr-3 ml-3">{'>'}</h2>
                <a className=" ">антивирусы для бизнеса</a>
                
            </div>
            <div>
                <Dropdown/>
            </div>
        </div>

    </div>
)
export default Catalog;