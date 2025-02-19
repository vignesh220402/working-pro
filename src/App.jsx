
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SinglePage from "./pages/About ";
import BlogSection from "./pages/BlogSection";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<SinglePage />} />
        <Route path="/Blog" element={<BlogSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
