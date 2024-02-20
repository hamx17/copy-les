
import imgess from '../Images/pilot.png'
import imgrev from'../Images/revi.png'
import'./Reviews.css'

const Reviews = () => {


    return (
        <div id="reviews" className="container trustpilot ">
            <div className="text-center " style={{ marginTop: '20px' }}>
                <img src={imgess} width={351} height={81} className=""></img>
                <h1 data-v-86f776ce="" style={{ marginTop: '10px' }}>Onze klanten beoordelen ons met een 4.9 / 5.0</h1>
            </div>
            <div class="row  mt-5 mb-5 " >
  <div class="col-lg-4 col-md-6  col-sm-12  col-sm-12 " >
    <div class="card " style={{borderRadius:'20px'}}>  
      <div class="card-body mb-4">
      <img src={imgrev} width={160} height={32} className="mb-3 mt-4"></img>
        <p class="card-text">Als ondernemer weet ik hoe cruciaal een sterke online aanwezigheid is. De pagina die Luuk voor mij heeft ontworpen is niet alleen functioneel, maar ontvangt ook constant positieve feedback op zijn esthetiek en mooie design
Dhr. Barendse,Vastgoed ondernemer</p>
        
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6  col-sm-12">
     <div class="card " style={{borderRadius:'20px'}}> 
      <div class="card-body mb-4">
      <img src={imgrev} width={160} height={32} className="mb-3 mt-4"></img>
        <p class="card-text">Als ondernemer weet ik hoe cruciaal een sterke online aanwezigheid is. De pagina die Luuk voor mij heeft ontworpen is niet alleen functioneel, maar ontvangt ook constant positieve feedback op zijn esthetiek en mooie design
Dhr. Barendse,Vastgoed ondernemer</p>
      </div>
    </div>
  </div>
   <div class="col-lg-4 col-md-6  col-sm-12">
     <div class="card " style={{borderRadius:'20px'}}> 
      <div class="card-body mb-4">
      <img src={imgrev} width={160} height={32} className="mb-3 mt-4 "></img>
        <p class="card-text">Als ondernemer weet ik hoe cruciaal een sterke online aanwezigheid is. De pagina die Luuk voor mij heeft ontworpen is niet alleen functioneel, maar ontvangt ook constant positieve feedback op zijn esthetiek en mooie design
Dhr. Barendse,Vastgoed ondernemer</p>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
export default Reviews;