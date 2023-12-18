import Link from "next/link";

const Path = ({ path }) => {
    return (
        <div className="flex align-middle mt-4">

            {
                path.map((element, index) => {
                    return (
                        <div key={index} className={"flex"}>
                            <Link  href={""} className="text-[#1075B2] cursor-pointer hover:underline">{element}</Link>
                            {(path.length - 1) != index ? <h2 className="text-[#1075B2] text-2xl mr-3 ml-3 mt-[-5px]">{'>'}</h2> : <></>}
                        </div>
                    );
                } )
            }
        </div>
    )
}

export default Path;