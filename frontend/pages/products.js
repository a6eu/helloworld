import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Filter from "@/components/Filter";
import Catalog from "@/components/Catalog";
import Pagination from "@/components/Pagination";
import imported from "../db.json";

export const getStaticProps = async () => {
    const res = await imported;
    const data = await res.products;

    // console.log('data >>> ', data)

    return {
        props: { products: data }
    }
}

const About = (props) =>{
    // console.log("props >>> ", props)

    return (
        <div className="h-auto w-full  p-10 flex flex-col items-center">
            <div className="w-4/5  h-full flex">
                <Filter />
                <Catalog products={props.products} />
            </div>
            <Pagination/>
        </div>
    )
}

export default About;