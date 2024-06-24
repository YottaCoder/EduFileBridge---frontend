import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
             <Routes>
                <Route 
                    path="/"
                    element={<HomePage/>}
                />

                <Route 
                    path="/Get_Started"
                    element={<Get_Started/>}
                />

                <Route 
                    path="/Save_marksheet"
                    element={<Save_marksheet/>}
                />

                <Route 
                    path="/View_marksheets"
                    element={<View_marksheets/>}
                />

                <Route 
                    path="/About"
                    element={<About/>}
                />

                <Route 
                    path="/Contact"
                    element={<Contact/>}
                />
            </Routes> 
        <Footer />
       </>
    )
}

export default App;
