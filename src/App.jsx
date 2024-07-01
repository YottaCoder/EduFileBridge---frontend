import React from 'react';

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
        <Services />  
        <View_marksheets />
        <About />
        <Contact />
        <Footer />
       </>
    )
}

export default App;
