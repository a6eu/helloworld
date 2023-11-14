import styles from '../styles/Home.module.css'
import News from '@/components/News';
import AboutCompany from "@/components/AboutCompany";
import Companies from '@/components/Companies';
const Home = () => (
  <>
    <News/>
      <Companies/>
    <AboutCompany/>

  </>
)

export default Home;