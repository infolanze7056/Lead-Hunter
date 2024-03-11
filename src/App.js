import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route  />
            </Routes>
        </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
