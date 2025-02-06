import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "./style.css"; // Import styles

function App() {
    return (
        <>
            <Header />
            <Navbar />
            <HeroSection />
            <Services />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
