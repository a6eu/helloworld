import styles from '../styles/Home.module.css'
import News from '@/components/News';
import AboutCompany from "@/components/AboutCompany";
import Companies from '@/components/Companies';
import CategotyChooser from '@/components/CategotyChooser';
import Products from '@/components/Products';


const Home = () => (
  <>
    <News/>
      <Companies/>
      <CategotyChooser/>
      <Products/>
      <AboutCompany/>

  </>
)

export default Home;