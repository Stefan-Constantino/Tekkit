import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Services from "./services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Problem from "./Problem";
import Solution from "./Solution";
import "./style.css";
import AboutUsList from "./AboutUsList";
import ServicesSection from "./servicesSection";
import ServicesSection1 from "./servicesSection1";
import ServicesSection2 from "./servicesSection2";
import ServicesSection3 from "./ServicesSection3";
import ServicesSection4 from "./servicesSection4";
import ServicesSection5 from "./servicesSection5";
import FAQ from "./Faq";
import ContactCard from "./ContactCard";

function App() {
    return (
        <div className="app-container flex flex-col min-h-screen">
            <div className="maincontent flex-grow">                
                <Routes>
                    <Route path="/" element={
                        <>  
                            <div id="home1">
                                <Navbar />
                                <HeroSection />
                            </div>
                            <Services />
                            <Problem />
                            <Solution />
                        </>
                    } />
                    <Route path="/services" element={
                        <>
                            <div id="home1">
                                <Navbar />
                            </div>
                            <ServicesSection />
                            <ServicesSection1 />
                            <ServicesSection2 />
                            <ServicesSection3 />
                            <ServicesSection4 />
                            <ServicesSection5 />
                        </> 
                    } />
                    <Route path="/contact" element={
                        <>
                            <div id="home1">
                                <Navbar />
                            </div>
                            <Contact />
                            <FAQ />
                            <ContactCard />
                        </> 
                    } />
                    <Route path="/about" element={
                        <>
                            <div id="home1">
                                <Navbar />
                            </div>
                            <About />
                            <AboutUsList />
                        </> 
                    } />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
