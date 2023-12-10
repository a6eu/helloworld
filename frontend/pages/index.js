'use client'
import News from '@/components/News';
import AboutCompany from "@/components/AboutCompany";
import Companies from '@/components/Companies';
import CategotyChooser from '@/components/CategotyChooser';
import Products from '@/components/Products';
import React, { useState, useEffect } from 'react';
import ModalWindow from '@/components/ModalWindow';

  
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
    return(<>
        {showModal && <ModalWindow closeModal={closeModal} />}

        <News/>
        <Companies/>
        <CategotyChooser/>
        <Products/>
        <AboutCompany/>
    </>
    );
    };

export default Home;