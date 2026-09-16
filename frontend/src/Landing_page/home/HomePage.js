import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education'
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from "../Footer"
import KiteConnectSection from './KiteConnectSection';
import Unbeatablepricing from './Unbeatablepricing';


function HomePage() {
    return (  
        <>   
            <Hero/> 
            <Stats/>
            <Awards/>
            <KiteConnectSection/>
            <Pricing/> 
            <Education/>
            <Unbeatablepricing/>
            <OpenAccount/>
        </>
    );

}

export default HomePage;