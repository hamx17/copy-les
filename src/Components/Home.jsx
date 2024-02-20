import React from "react";
import Start from '../Images/slide.png';
import './Home.css';
import { Link } from "react-router-dom";
import imge from '../Images/slide.png'
import Button from './Button';
const Home =()=>{
    
      
    
     
    return(
       
        <div className='py-5 bg-light'>
        <div className="container">
            <div className='row d-flex align-items-center justify-content-around'>
                <div className='heading col-sm-6 col-12 text-center mx-auto'>
                    <h1 className="head">Jouw eigen landingspagina. Verhoog je leads vandaag!</h1>
                    <Link  to="/contact" style={{ textDecoration: 'none' }}>
                    
                    <Button  backgroundColor="#FB8C00" label="Persoonlijke offerte aanvragen -->" color="#F6F6F6"/>
     
                       </Link>
                   
                   
                </div>
                <div className='py-0 py-md-3 bottomImg col-sm-6 col-12'>
                    <img src={Start} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;