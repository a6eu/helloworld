import MainContainer from "@/components/MainContainer";
import UserNavbar from "@/components/UserNavbar";
import ProductsContainer from "@/components/ProductsContainer";
import React, {useState} from "react";
import imported from "@/db.json"

function Favorites() {
    const [filterResult, setFilterResult] = useState(imported.products);
    return (
        <MainContainer>
            <div className="flex w-full">
                <UserNavbar/>
                <div className="my-4 w-3/4 flex flex-col ">
                    <div className={"w-full flex start"}>
                        <h1 className="ProductSansLight font-medium ml-3 text-[#1075B2]">ИЗБРАННЫЕ</h1>
                    </div>
                    <ProductsContainer products={filterResult}/>
                </div>
            </div>


        </MainContainer>
    )
}

export default Favorites;