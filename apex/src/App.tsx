import "./App.css";
import ContactUs from "./components/Contact Us/ContactUs.tsx";
import Homepage from "./components/Homepage/Homepage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Career from "./components/Pages/Career/Career.tsx";
import About from "./components/Pages/About/About";
import Business from "./components/Pages/Business/Business.tsx";
import Product from "./components/Pages/Product/Product.tsx";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/business-insider" element={<Business />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<  Career />} />
        </Routes>
      </header>
    </BrowserRouter>
  );
}

export default App;
