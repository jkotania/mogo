import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Projects from "./Projects";
import Offer from "./Offer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
