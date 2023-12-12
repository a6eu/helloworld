import News from '@/components/News';
import AboutCompany from "@/components/AboutCompany";
import Companies from '@/components/Companies';
import Products from '@/components/Products';
import React, { useState, useEffect } from 'react';
import ModalWindow from '@/components/ModalWindow';
import MainContainer from "@/components/MainContainer";
import CategotyChooser from "@/components/CategotyChooser";


const Home = () => {
        const [showModal, setShowModal] = useState(false);

        const closeModal = () => {
                setShowModal(false);
                localStorage.setItem('selected', 'false');
        };

        useEffect(() => {
                const visited = localStorage.getItem('selected');
                if (!visited) {
                        setShowModal(true);
                }
        }, []);

        return (
            <MainContainer>
                    {showModal && <ModalWindow closeModal={closeModal} />}
                    <News />
                    <Companies />
                    <CategotyChooser />
                    <AboutCompany />
            </MainContainer>
        );
};

export default Home;