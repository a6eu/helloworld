import News from "@/components/News";
import AboutCompany from "@/components/AboutCompany";
import Companies from "@/components/Companies";
import React, { useEffect, useState } from "react";
import ModalWindow from "@/components/ModalWindow";
import MainContainer from "@/components/MainContainer";
import CategoryChooser from "@/components/CategoryChooser";
import Demand from "@/components/Demand";

const Home = ({ products}) => {
    const [showModal, setShowModal] = useState(false);
    console.log(products)
    const closeModal = () => {
        setShowModal(false);
        localStorage.setItem("selected", "false");
    };

    useEffect(() => {
        const visited = localStorage.getItem("selected");
        if (!visited) {
            setShowModal(true);
        }
    }, []);

    return (

            <MainContainer>
                <head>
                    <title>Astana IT group, ваш любимый интернет-магазин</title>
                </head>
                {showModal && <ModalWindow closeModal={closeModal} />}
                <News />
                <Companies />
                <CategoryChooser />
                <Demand />
                <AboutCompany />
            </MainContainer>
    );
};

export default Home;
