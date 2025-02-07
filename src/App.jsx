import React from "react";
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
            <HeroSection />
            <Services />
            <Problem/>
            <Solution/>
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
