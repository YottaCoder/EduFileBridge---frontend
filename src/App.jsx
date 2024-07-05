import React from 'react';
import { Element } from 'react-scroll';

import About from './Components/About';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import Get_Started from './Components/Get_Started';
import Save_marksheet from './Components/Save_marksheet';
import View_marksheets from './Components/View_marksheets';
import Contact from './Components/Contact';
import Services from './Components/Services'

const App = () => {
    return(
       <>   
        <Navbar />
        <HomePage />

        <Element name='Services'>
            <Services /> 
        </Element> 

        <Element name='View_marksheets'>
            <View_marksheets />
        </Element>

        <Element name='About'>
            <About />
        </Element>

        <Element name='Contact'>
            <Contact />
        </Element>

        <Footer />
       </>
    )
}

export default App;
