import React from 'react';

import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import Get_Started from './Components/Get_Started';
import Save_marksheet from './Components/Save_marksheet';
import View_marksheets from './Components/View_marksheets';
import About from './Components/About';
import Contact from './Components/Contact';

const App = () => {
    return(
       <>   
        <Navbar />
        <HomePage />      
        <View_marksheets />
        <Footer />
       </>
    )
}

export default App;
