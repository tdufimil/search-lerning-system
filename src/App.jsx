import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import LinearExplain from "./components/LinearExplain"
import BinaryExplain from "./components/BinaryExplain"
import HashExplain from "./components/HashExplain"
import LinearExplainEdit from "./components/LinearExplainEdit"
import BinaryExplainEdit from "./components/BinaryExplainEdit"
import HashExplainEdit from "./components/HashExplainEdit"
import LinearCode from "./components/LinearCode"
import BinaryCode from "./components/BinaryCode"
import HashCode from "./components/HashCode"
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
          <Route path="/LinearExplainEdit" element={<LinearExplainEdit />} />
          <Route path="/BinaryExplainEdit" element={<BinaryExplainEdit />} />
          <Route path="/HashExplainEdit" element={<HashExplainEdit />} />
          <Route path="/LinearCode" element={<LinearCode />} />
          <Route path="/BinaryCode" element={<BinaryCode />} />
          <Route path="/HashCode" element={<HashCode />} />
          <Route path="/LinearPractice" element={<LinearPractice />} />
          <Route path="/BinaryPractice" element={<BinaryPractice />} />
          <Route path="/HashPractice" element={<HashPractice />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
