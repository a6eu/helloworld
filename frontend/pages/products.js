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
        <div className="h-auto w-full p-10 flex flex-col items-center">
            <div className="w- h-full flex jus">
                <Filter />
                <Catalog products={props.products} />
            </div>
            <Pagination/>
        </div>
    )
}

export default About;