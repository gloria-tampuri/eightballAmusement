
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HeroPage from './Components/HeroPage/HeroPage';
import OurServices from './Components/OurServices/OurServices';
import Team from './Components/Team/Team';

function App() {
  return (
    <div >
     <Header/>
     <HeroPage/>
     <AboutUs/>
     <Team/>
     <OurServices/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
