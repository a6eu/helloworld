import News from '@/components/News';
import AboutCompany from "@/components/AboutCompany";
import Companies from '@/components/Companies';
import Products from '@/components/Products';
import MainContainer from "@/components/MainContainer";

const Home = () => (
    <MainContainer>
        <News/>
        <Companies/>
        <Products/>
        <AboutCompany/>
    </MainContainer>
)

export default Home;