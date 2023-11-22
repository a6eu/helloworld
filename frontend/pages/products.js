import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Filter from "@/components/Filter";
import Catalog from "@/components/Catalog";

const About = () =>(
    <div className="h-[700px] w-full bg-yellow-200 p-10 flex justify-center">
        <div className="w-4/5 bg-yellow-300 h-full flex">
            <Filter />
            <Catalog />
        </div>
       

        

    </div>
)

export default About;