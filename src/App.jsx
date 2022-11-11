import './App.css';
import Sidebar from './components/sidebar/Sidebar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Partenaires from './pages/Partenaires';
import Beneficiaires from './pages/Beneficiaires';
import Lieux from './pages/Lieux';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
        <Sidebar />
        <main>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/services' element={<Services />} />
            <Route path='/client' element={<Clients />} />
            <Route path='/lieux' element={<Lieux />} />
            <Route path='/partenaires' element={<Partenaires />} />
            <Route path='/beneficaires' element={<Beneficiaires />} />
          </Routes>
          <Footer />
        </main>
    </div>
      </BrowserRouter>
  );
}

export default App;
