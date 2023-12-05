import News from '@/components/News';
import AboutCompany from "@/components/AboutCompany";
import Companies from '@/components/Companies';
import CategotyChooser from '@/components/CategotyChooser';
import Products from '@/components/Products';

const Home = () => (
    <div className={"w-full flex justify-center"}>
        <div className={"max-w-screen-xl w-full p-2"}>
            <News/>
            <Companies/>
            <Products/>
            <AboutCompany/>
        </div>
    </div>
)

export default Home;