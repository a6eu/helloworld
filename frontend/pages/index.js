import News from "@/components/News";
import AboutCompany from "@/components/AboutCompany";
import Companies from "@/components/Companies";
import React, { useEffect, useState } from "react";
import ModalWindow from "@/components/ModalWindow";
import MainContainer from "@/components/MainContainer";
import CategoryChooser from "@/components/CategoryChooser";
import Link from 'next/link';

// DELETE ME LATER
import ProductListExample from "@/components/ProductListExample";
// DELETE ME LATER

// TESTING PAGINATION LOWER DELETE LATER

export async function getServerSideProps(context) {
    const { page = 1 } = context.query; // Default to page 1 if no query param is provided
    const res = await fetch(
        `https://shop-01it-group.up.railway.app/api/v1/products/?page=${page}`
    );
    const data = await res.json();

    return {
        props: {
            products: data.results,
            page: parseInt(page, 10),
            count: data.count,
            next: data.next,
            previous: data.previous,
        },
    };
}

// TESTING PAGINATION ABOVE DELETE ME

const Home = ({ products, page, count, next, previous }) => {
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
            {showModal && <ModalWindow closeModal={closeModal} />}
            <News />
            <Companies />
            <CategoryChooser />

            {/* PAGINATION BELOW */}
            <ProductListExample products={products} next={next} previous={previous} totalPages={count} />
            
            <div className="flex divide-x-4 mt-6">
                {page > 1 && (
                    <Link href={`/?page=${page - 1}`}>
                        <button className="border-2 solid bg-yellow-200 rounded-md p-2">Previous</button>
                    </Link>
                )}
                {page * products.length < count && (
                    <Link  href={`/?page=${page + 1}`}>
                        <button className="border-2 solid bg-yellow-200 rounded-md p-2">Next</button>
                    </Link>
                )}
            </div>
            {/* PAGINATION ABOVE */}
            <AboutCompany />
        </MainContainer>
    );
};

export default Home;
