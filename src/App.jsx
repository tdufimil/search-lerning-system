import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import LinearExplain from "./components/LinearExplain"
import BinaryExplain from "./components/BinaryExplain"
import HashExplain from "./components/HashExplain"
import LinearCode from "./components/LinearCode"
import LinearPractice from "./components/LinearPractice"
import BinaryPractice from "./components/BinaryPractice"
import HashPractice from "./components/HashPractice"
import ScrollToTop  from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LinearExplain" element={<LinearExplain />} />
          <Route path="/BinaryExplain" element={<BinaryExplain />} />
          <Route path="/HashExplain" element={<HashExplain />} />
          <Route path="/LinearCode" element={<LinearCode />} />
          <Route path="/LinearPractice" element={<LinearPractice />} />
          <Route path="/BinaryPractice" element={<BinaryPractice />} />
          <Route path="/HashPractice" element={<HashPractice />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
