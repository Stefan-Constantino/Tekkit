import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Problem from "./Problem";
import Solution from "./Solution";
import "./style.css";

function App() {
    return (
        <>
            <Header />
            <Navbar />
            {/* Define Routes here */}
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <Services />
                        <Problem />
                        <Solution />
                        <About />
                    </>
                } />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
