import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/service' element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/login' element={<Login />}  />
            </Routes>
        </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
