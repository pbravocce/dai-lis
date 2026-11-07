import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import Dairo from './pages/Dairo';
import Lis from './pages/Lis';
import Workshops from './pages/Workshops';
import RegistrationForm from './pages/RegistrationForm';
import GrainOverlay from './components/GrainOverlay';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
        <GrainOverlay />
        <Navbar />
        <main className="flex-grow pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dairo" element={<Dairo />} />
            <Route path="/lis" element={<Lis />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/workshops/register" element={<RegistrationForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
