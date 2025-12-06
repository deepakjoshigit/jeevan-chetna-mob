import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

// ScrollToTop component to handle scrolling on route change
const ScrollToTop = () => {
    // This hook is not available in react-router-dom v6 inside component directly if not used as a child of Router
    // So we use standard window.scrollTo in useEffect inside the pages or wrapped here.
    // However, React Router v6.4+ has <ScrollRestoration /> but HashRouter might need a manual push.
    // Simplified: We will just let the pages handle their top scroll or assume browser default behavior.
    return null; 
};

function App() {
  const [isDonateModalOpen, setDonateModalOpen] = useState(false);

  const openDonate = () => setDonateModalOpen(true);
  const closeDonate = () => setDonateModalOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar onDonateClick={openDonate} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onDonateClick={openDonate} />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs onDonateClick={openDonate} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        
        <DonateModal isOpen={isDonateModalOpen} onClose={closeDonate} />
      </div>
    </Router>
  );
}

export default App;