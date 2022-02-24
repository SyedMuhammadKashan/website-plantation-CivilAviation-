import React,{Component} from "react";
import "./ResponsibilityStyle.css";
import rpic from"./pictures/rpic.jpg";
import resp1 from"./pictures/resp1.jpg";
import Rp1 from"./pictures/Rp1.jpg";
import Rp2 from"./pictures/Rp2.jpg";

class Ourresponsibility extends Component{

          render(){
            const  photos={
                width:"300px",
                height:"180px"
              }
              const photos2={
                  width:"320px",
                  height:"180px"
              }
              return(
                  <div className="container"> 
                      <div className="row">
                        <div>  
                      <h2 className="font py-4">"Tree plantation termed everyone’s responsibility"</h2>
                      </div>
                      <br/>
                      </div>
                     
                      <div className="container">
                     
                          <div className="row">
                            <div className="col-lg-6  col-md-6">
                                <h3 className="font">As A Citizen</h3>
                                <p> It is the prime responsibility of every citizen to plant a sapling at his/her home, locality, and workplace to cope with the climate changes current sudden climatic changes
                                Trees contribute to their environment by providing oxygen, improving air quality, climate amelioration, conserving water, preserving soil, and supporting wildlife. During the process of photosynthesis, trees take in carbon dioxide and produce the oxygen we breathe
                              
                                </p>
                            

                            </div>
                            
                            <div className="col-lg-6 col-md-6 ">
                          <p className="py-4">here has been an upswing in the past year in citizen awareness regarding greener practices globally and in Pakistan, especially as political leaders have acknowledged the need for conservation of the country’s green cover. Numerous Independence Day celebrations were marked by tree plantation drives at the community and institutional level government has pledged to plant 10 billion trees to tackle the effects of climate change</p>
                            </div>
                         
                          </div>

                      </div>
                  
                     <div className="container">
                         <div className="row">
                         <div className="col-lg-6 col-md-6">
                           
                            <img src={rpic} alt="pic1"className="img-fluid mb-2 " 
                            style={photos}/>
                         
                         </div>

                         <div className="col-lg-6 col-md-6">
                           
                            <img src={resp1} alt="pic1"className="img-fluid "
                            style={photos2} />
                         
                         </div>
                         </div>
                     </div>
                  
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <h3 className="font mt-3">As an Individual</h3>
                            <p>Like smiling , planting tree is also an act of Charity. Birds, persons, animals and whoever gets benefits from planting a tree is considered a charitable gift from him
                            “Planting trees is regarded as an act of charity (sadaqa) and the planter receives blessings from all those who benefit from it”
                            </p>
                          </div>
                            
                            <div className="col-lg-6 col-md-6">
                               <p className="py-5">Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity.
                              Forests provide jobs to over 1.6 billion people, absorb harmful carbon from the atmosphere, and are key ingredients in 25% of all medicines</p>                         
                            </div>
                      </div>
                  </div>
                  


                  <div className="container">
                       <div className="row">
                           <div className="col-lg-6 col-md-6">
                          
                           <img src={Rp1} alt="pic1"className=" "/>
                           <div/>
                           
                           
                           
                        
                       </div>
                  </div>
                  
                  
                  
                  
                  
                  
                  
                  
                  </div>
                  </div>
              )
          }


}
export default Ourresponsibility;
