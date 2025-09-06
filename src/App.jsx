import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import InfoShow from './components/InfoShow';
import Navbar from './components/Navbar';
import Lore from './components/Lore';
import Streamers from './components/Streamers';
import Staff from './components/Staff'; 

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <InfoShow />
            <Lore />
            <Streamers />
            <Staff /> 
            <Footer />
        </>
    );
}

export default App;