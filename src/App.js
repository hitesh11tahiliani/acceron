import { HashRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Quotation from './Components/Quotation';
import Products from './Components/Products';
import About from './Components/About';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
