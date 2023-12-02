import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Filter from "@/components/Filter";
import Catalog from "@/components/Catalog";
import Pagination from "@/components/Pagination"


const About = () => (
    <div className="h-auto w-full  p-10 flex flex-col items-center">
        <div className="w-4/5  h-full flex">
            <Filter/>
            <Catalog/>
        </div>
        <Pagination/>


    </div>
)

export default About;