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
import ServicesSection3 from "./servicesSection3";
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
                            </div>
                            <div className="md:pt-20 lg:pt-26">
                                <HeroSection />
                                <Services />
                                <Problem />
                                <Solution />
                            </div>
                        </>
                    } />
                    <Route path="/services" element={
                        <>
                            <div id="home1">
                                <Navbar />
                            </div>
                            <div className="md:pt-20 lg:pt-26">
                                <ServicesSection />
                                <ServicesSection1 />
                                <ServicesSection2 />
                                <ServicesSection3 />
                                <ServicesSection4 />
                                <ServicesSection5 />
                            </div>
                        </> 
                    } />
                    <Route path="/contact" element={
                        <>
                            <div id="home1">
                                <Navbar />
                            </div>
                            <div className="md:pt-20 lg:pt-26">
                                <Contact />
                                <FAQ />
                                <ContactCard />
                            </div>
                        </> 
                    } />
                    <Route path="/about" element={
                        <>
                            <div id="home1">
                                <Navbar />
                            </div>
                            <div className="md:pt-20 lg:pt-26">
                                <About />
                                <AboutUsList />
                            </div>
                        </> 
                    } />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;

