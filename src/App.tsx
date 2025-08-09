import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import CalculatorPage from './pages/calculator/page'
import CVPage from './pages/cv/page'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/cv" element={<CVPage />} />
            </Routes>
        </Router>
    )
}

export default App
