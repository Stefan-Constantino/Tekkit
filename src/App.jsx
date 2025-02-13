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
import AboutUsList from "./AboutUsList";
import Ticket from "./Ticket";
import MapComponent from "./MapComponent";

function App() {
    return (
        <div className="app-container flex flex-col min-h-screen">
            <div className="maincontent flex-grow">
                <Header />
                
                {/* Define Routes here */}
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
                    <Route path="/contact" element={
                        <>
                            <div id="home">
                                <Navbar />
                            </div>
                            <div className="row">
                                <MapComponent />
                                <Contact />
                            </div>
                        </> 
                    } />
                    <Route path="/about" element={
                        <>
                            <div id="home">
                                <Navbar />
                            </div>
                            <About />
                            <AboutUsList />
                        </> 
                    } />
                    <Route path="/ticket" element={
                        <>
                            <div id="home">
                                <Navbar />
                            </div>
                            <Ticket />
                        </> 
                    } />
                </Routes>
                
            </div>
            <Footer />
        </div>
    );
}

export default App;
