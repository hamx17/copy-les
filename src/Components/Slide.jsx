import React from "react";
import imj from '../Images/slider.png'
import './Slide.css'
const Slide =()=>{

    return(
        <div  className="container Slide">
            <div className="d-flex row align-center ">
                <div className="col-md-6  ">
                <img src={imj} className="mig img-fluid w-100 h-auto" alt="Description of the image" />
                </div>
                <div className="col-md-6  para">
                <h3  class="my-3 text-md" style={{color:'#00B969' , fontStyle:'bold'}}>Hoe het werkt</h3>
                <p className="text-md"> met een conversiegerichte pagina. Allereerst bespreken we je doelstellingen en het beoogde publiek. Vervolgens ontwerpen we een op maat gemaakte landingspagina die deze elementen samenbrengt met een aantrekkelijk design en een krachtige call-to-action. Na jouw goedkeuring gaat de landingspagina live, klaar om bezoekers om te zetten in leads.    </p>


                </div>

            </div>

        </div>
    )
}
export default Slide;