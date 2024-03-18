import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
        <BrowserRouter> 
        <AppContent />
        </BrowserRouter>

    </div>
  );
}

function AppContent() {
  // Get the current location
  const location = useLocation();

  // Check if the current location matches the Dashboard route
  const isDashboardPage = location.pathname === '/dashboard';

  return (
    <div>
      {/* Conditionally render Header and Footer based on the route */}
      <ToastContainer />
      {!isDashboardPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/register' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      {!isDashboardPage && <Footer />}
    </div>
  );
}

export default App;
