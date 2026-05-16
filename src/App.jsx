import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioPage from './pages/Portfolio';
import ContactsPage from './pages/ContactsPage';
import ServicesPage from './pages/Services';
import FloatingContact from './components/FloatingContact/FloatingContact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <FloatingContact />
            </>
          }
        />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
