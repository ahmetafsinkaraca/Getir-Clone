import './Tailwind.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import Favorities from './components/Favorities';
import MobileApp from './components/MobileApp';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Campaigns from './components/Campaigns';
import { useWindowWidth } from '@react-hook/window-size';

function App() {

  const windowWidth = useWindowWidth();


  return(
    <>
    <Header/>
    {windowWidth <= 768 && <Campaigns/>}
    <HeroSection/>
    <Categories/>
    {windowWidth > 768 && <Campaigns/>}
    <div className='container mx-auto grid gap-y-6 pt-8'>
      <Favorities/>
      <MobileApp/>
      <Cards/>
    </div>
    <Footer/>
    </>
  )
}

export default App;
