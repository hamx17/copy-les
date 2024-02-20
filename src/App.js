import React from 'react';
import Header from './Components/Header'
import Home from'./Components/Home';
import Form from './Components/Form';
import Services from './Components/Services';

import { BrowserRouter } from 'react-router-dom'
import Reviews from './Components/Reviews';

import Slides from './Components/Slide';

function App() {
  
  return (
    
    <div>
    <Header />
 <Home/>
    <Services />
    <Slides/>
    <Form/>
    <Reviews/>
 

  </div>
 
  );
}

export default App;
