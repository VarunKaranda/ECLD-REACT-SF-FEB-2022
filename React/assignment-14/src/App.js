import './App.css';
import {Routes, Route} from "react-router-dom"
import Contact from './components/Contact';
import Download from './components/Download';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
