
import './App.css';
import Hero from './components/Hero/Hero';
import Homepage from './components/Homepage/Homepage';
import NavigationBar from './components/Navbar/NavigationBar';
import TopBar from "./components/TopBar/TopBar";
import Footer from './components/footer/footer';


function App() {


  return (
    <>
    <header className="header">
    <TopBar/>
    <NavigationBar/>
    <Hero/>
    <Homepage/>
    <Footer/>
    </header>
    
    </>
  )
}

export default App
