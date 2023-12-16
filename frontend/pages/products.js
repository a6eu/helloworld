import Filter from "@/components/Filter";
import Catalog from "@/components/Catalog";
import Pagination from "@/components/Pagination";
import imported from "../db.json";
import MainContainer from "@/components/MainContainer";

export const getStaticProps = async () => {
    const res = await imported;
    const data = await res.products;

    return {
        props: { products: data }
    }
}


const About = (props) =>{
    return (
        <MainContainer>
            <div className="h-auto w-full pt-1 flex flex-col items-center">
                <div className="w- h-full flex jus">
                    <Filter />
                    <Catalog products={props.products} />
                </div>
                <Pagination/>
            </div>
        </MainContainer>
        
    )
}

export default About;