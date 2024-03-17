import './App.css';
import ContactUs from './Components/Contact Us/ContactUs';
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './Components/Pages/Error/Error';
import About from './Components/Pages/About/About';
import Business from './Components/Pages/Business/Business';
import Product from './Components/Pages/Product/Product';


function App() {


  return (
    <BrowserRouter>
    <header className="header">
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/business-insider' element={<Business/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path="*" element={<Error/>} />
    </Routes>
    </header> 
    </BrowserRouter>
  )
}

export default App
