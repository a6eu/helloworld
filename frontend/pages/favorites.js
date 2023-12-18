import MainContainer from "@/components/MainContainer";
import UserNavbar from "@/components/UserNavbar";
import Products from "@/components/Products";
import {useEffect, useState} from "react";
import axios from "axios";

function Favorites() {

    return (
        <MainContainer>
            <UserNavbar>
                <Products/>
            </UserNavbar>
        </MainContainer>
    )
}

export default Favorites;