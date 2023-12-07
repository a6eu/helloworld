import News from '@/components/News';
import AboutCompany from "@/components/AboutCompany";
import Companies from '@/components/Companies';
import Products from '@/components/Products';
import MainContainer from "@/components/MainContainer";
import CategotyChooser from "@/components/CategotyChooser";

const Home = () => (
    <MainContainer>
        <News/>
        <Companies/>
        <CategotyChooser/>
        <Products/>
        <AboutCompany/>
    </MainContainer>
)

export default Home;