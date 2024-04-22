import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import $ from "jquery";
// import { contact, icons } from "./componenets/HeaderInfo";

class App extends Component{
    render() {
        const mainContentStyle = {
            backgroundImage: 'url(pictures/geode.png)'
        };

        return (
            <div className="app">
                <Navbar/>
                <div className="main-content">
                    <div className="background-container" style={mainContentStyle}></div>
                    <Home/>
                    <About/>
                    <Projects/>
                    <Contact/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
