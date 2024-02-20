import React from "react";
import maImage from '../Images/icon-1.png'
import './Services.css'

import { Link } from "react-router-dom";
import Button from './Button';


const Services =()=>{
    const customRowStyleS = {
        backgroundColor: '#00B969',
        
        
      };
    
     
    return(
       
        <div style={customRowStyleS}   className=" py-4 services">
        <div className="container  ">
        <div className="row d-flex my-5" style={
{ flexWrap: 'wrap',}
        }>
          <div className="col-sm-6 col-12">
          <div className="row align-center">
                <div className="col col-2">
                <img className="icon" src={maImage} alt="Description of the image" />
                </div>
                <div className="px-0 col col-10">
                    <p className="mb-0 para">
                        <span className="spa">
                        Hogere conversieratio's:
                        </span>
                        "specifiek gericht op een bepaalde actie of doelgroep. 
                    </p>
                </div>
            </div>
            <div className="row align-center">
                <div className="col col-2">
                <img  className="icon"  src={maImage} alt="Description of the image" />
                </div>
                <div className="px-0 col col-10">
                    <p className="mb-0 para">
                        <span className="spa">
                        Hogere conversieratio's:
                        </span>
                        "specifiek gericht op een bepaalde actie of doelgroep. 
                    </p>
                </div>
            </div>
            <div className="row align-center">
                <div className="col col-2">
                <img className="icon"  src={maImage} alt="Description of the image" />
                </div>
                <div className="px-0 col col-10">
                    <p className="mb-0 para">
                        <span className="spa">
                        Hogere conversieratio's:
                        </span>
                        "specifiek gericht op een bepaalde actie of doelgroep. 
                    </p>
                </div>
            </div>
            <div className="row align-center">
                <div className="col col-2">
                <img className="icon"  src={maImage} alt="Description of the image" />
                </div>
                <div className="px-0 col col-10">
                    <p className="mb-0 para">
                        <span className="spa">
                        Hogere conversieratio's:
                        </span>
                        "specifiek gericht op een bepaalde actie of doelgroep. 
                    </p>
                </div>
            </div>
          <h1></h1>
          </div>
          <div className="col-sm-6 col-12">
            
          <div className="row align-center">
                <div className="col col-2">
                <img  className="icon"  src={maImage} alt="Description of the image" />
                </div>
                <div className="px-0 col col-10">
                    <p className="mb-0 para">
                        <span className="spa">
                        Hogere conversieratio's:
                        </span>
                        "specifiek gericht op een bepaalde actie of doelgroep. 
                    </p>
                </div>
            </div>
            <div className="row align-center">
                <div className="col col-2">
                <img  className="icon"  src={maImage} alt="Description of the image" />
                </div>
                <div className="px-0 col col-10">
                    <p className="mb-0 para">
                        <span className="spa">
                        Hogere conversieratio's:
                        </span>
                        "specifiek gericht op een bepaalde actie of doelgroep. 
                    </p>
                </div>
            </div>
            <div className="row align-center">
                <div className="col col-2">
                <img className="icon"  src={maImage} alt="Description of the image" />
                </div>
                <div className="px-0 col col-10">
                    <p className="mb-0 para">
                        <span className="spa">
                        Hogere conversieratio's:
                        </span>
                        "specifiek gericht op een bepaalde actie of doelgroep. 
                    </p>
                </div>
            </div>
            <div className="row align-center bttn2  col-sm-12">
            <Link  to="/contact" style={{ textDecoration: 'none' }}>
                    
                    <Button  backgroundColor="#FFFFFF" label="Persoonlijke offerte aanvragen -->" color="#212121"/>
     
                       </Link>
            </div>
           
     
        </div>
      </div>
      </div>
      </div>
    )
}

export default Services;