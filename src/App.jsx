import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PortfolioPage from './pages/Portfolio'
import FloatingContact from './components/FloatingContact/FloatingContact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /><FloatingContact /></>} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
