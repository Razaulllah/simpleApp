import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Calculator from './components/Calculator/Calculator';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
