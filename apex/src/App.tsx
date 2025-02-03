import "./App.css";
import ContactUs from "./components/Contact Us/ContactUs.tsx";
import Homepage from "./components/Homepage/Homepage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Career from "./components/Pages/Career/Career.tsx";
import About from "./components/Pages/About/About";
import MaterialTestingLab from "./components/Pages/MaterialTestingLab/MaterialTestingLab.tsx";
import Services from "./components/Pages/Service/Services.tsx";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/business-insider" element={<MaterialTestingLab />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </header>
    </BrowserRouter>
  );
}

export default App;
