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
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Free from './Components/Free';

function App() {
  
  return (
    <div>
        <AuthProvider>
            <BrowserRouter> 
              <AppContent />
            </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

function AppContent() {

  const location = useLocation();


  const isDashboardPage = location.pathname === '/dashboard' || location.pathname === "/admin" ;
  return (
    <div>
      {!isDashboardPage && <Header />}
      {!isDashboardPage && <Free />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/register' element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/api/passwordReset/:userId/:token' element={<ResetPassword />} />
        <Route path="*" element={<Home />} />
        <Route element={<React.Fragment> 
          <PrivateRoute path="/dashboard" element={<Dashboard />} />
          <PrivateRoute path="/admin" element={<Admin />} />
        </React.Fragment>} />
        {/* <PrivateRoute path='/dashboard' element={<Dashboard />} />
        <PrivateRoute path='/admin' element={<Admin />} /> */}
      </Routes>
      <ToastContainer />
      {!isDashboardPage && <Footer />}
    </div>
  );
}

export default App;
