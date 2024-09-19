import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import CustomJwellery from './pages/custom jwellery/CustomJwellery';
import Contact from './pages/contact/Contact';
import JwelleryManufacturing from './pages/jwellery manufacturing/JwelleryManufacturing';
import EngagementRings from './pages/engegement rings/EngagementRings';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom-jwellery" element={<CustomJwellery />} />
          <Route path="/engagement-rings" element={<EngagementRings />} />
          <Route path="/jwellery-manufacturing" element={<JwelleryManufacturing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
