import React,{Component} from "react";
import { FaFacebookSquare,FaTwitter,FaInstagramSquare } from 'react-icons/fa';
import "./FooterStyle.css";


class Footer extends Component{

render(){
    return(
         <footer className="bg-dark text-white pt-3">
            
            <div className="container-fluid">
                <div className="row">
                
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <h4 className="about">About Us</h4>
                    <p id="para1">One tree by each family means one billion new trees on Earth. Plant more trees, make environment pollution free. Every hand does its own work so plant trees and save earth. Green our planet – the best place on earth</p>
                </div>
                
               
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <h4 className="contact">ContactUs</h4>
                    <p>
                        <address>
                     National Agricultural Research Center
                     Park Road, Islamabad - Pakistan: 44000  	
                          </address>
                     <strong>Phone:</strong>+92-51 9202968 <br/>
                     <strong>Email</strong><a href="mailto: info@aari.punjab.gov.pk">info@aari.punjab.gov.pk</a>
                    </p>

                </div>
               
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <h4 className="ml-5 useful">Useful links</h4>
                     <ul className="list-unorder ">
                        <li><a href="#"> <FaFacebookSquare/> </a></li>
                        <li><a href="#"> <FaTwitter/></a></li>
                        <li><a href="#"><FaInstagramSquare/></a></li>

                     </ul>
                     <br/>
                 <form action="" className="ml-5">
                     <div className="input-group ml-3 mb-3">
                         <input type="email" name="" id="" className="form-control" />
                         <div className="input-group-append">
                             <button className="btn btn-secondary ">Subscribe</button>
                         </div>
                     </div>
                 </form>
                
                </div>
                
                
                </div>
                
            </div>
            <div className="container-fluid text-center bg-secondary py-2">
              2019 All right Reserved
            </div>
         </footer>
    )
}

}



export default Footer;