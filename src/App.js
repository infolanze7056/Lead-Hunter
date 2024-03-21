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
import Forgot from './Components/Login/Forgot';
import Admin from './Components/Admin/Admin';
import ResetPassword from './Components/Login/ResetPassword';

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
  const isDashboardPage = location.pathname === '/dashboard' || location.pathname === "/admin" ;
  return (
    <div>
      {/* Conditionally render Header and Footer based on the route */}
      {!isDashboardPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/register' element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <ToastContainer />
      {!isDashboardPage && <Footer />}
    </div>
  );
}

export default App;
