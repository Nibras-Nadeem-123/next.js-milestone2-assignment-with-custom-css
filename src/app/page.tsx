"use client"
import Home from "@/components/home/page";
import About from "@/components/about/page";
import Contact from "@/components/contact/page";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
 
export default function App() {
  return (
    <Router>
      <nav className="navbar">
         <Link to={"/"}>Home</Link>
         <Link to={"/about"}>About</Link>
         <Link to={"/contact"}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
