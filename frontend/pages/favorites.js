import MainContainer from "@/components/MainContainer";
import UserNavbar from "@/components/UserNavbar";
import ProductsContainer from "@/components/ProductsContainer";
import React, {useState} from "react";
import imported from "@/db.json"

function Favorites() {
    const [filterResult, setFilterResult] = useState(imported.products);
    return (
        <MainContainer>
            <div className="flex">
                <UserNavbar/>
                <div className="my-4">
                    <h1 className="ProductSansLight font-medium ml-3 text-blue-700">ИЗБРАННЫЕ</h1>
                    <ProductsContainer products={filterResult}/>
                </div>
            </div>


        </MainContainer>
    )
}

export default Favorites;