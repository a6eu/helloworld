import MainContainer from "@/components/MainContainer";
import UserNavbar from "@/components/UserNavbar";
import ProductsContainer from "@/components/ProductsContainer";
import React, {useState, useEffect} from "react";
import imported from "@/db.json"
import axios from "axios";

function Favorites() {
    const [filterResult, setFilterResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://helloworlddjangotestdeploy-production.up.railway.app/api/v1/favorites/products?page=1', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    }
                });

                console.log(response.data);
                setFilterResult(response.data.results);
            } catch (error) {
            }
        };

        fetchData();
        console.log(localStorage.getItem("accessToken"));
        console.log(filterResult + "asd");

    }, []);

    return (
        <MainContainer>
            <div className="flex w-full">
                <UserNavbar/>
                <div className="my-4 w-3/4 flex flex-col ">
                    <div className={"w-full flex start"}>
                        <h1 className="ProductSansLight font-medium ml-3 text-[#1075B2]">ИЗБРАННЫЕ</h1>
                    </div>
                    {
                        filterResult ? <div> </div> : <ProductsContainer products={filterResult}/>
                    }
                </div>
            </div>
        </MainContainer>
    )
}

export default Favorites;