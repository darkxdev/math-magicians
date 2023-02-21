import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';
import './App.css';
import Navbar from './components/Navbar';
import CalculatorPage from './components/Calculator-Page';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
