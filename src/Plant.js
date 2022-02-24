import React, { Component } from 'react'
import fire from "./config/fire";

import "./PlantStyle.css";

export default class Plant extends Component {
   state={
        name:"",
        address:"",
        contact:"",
        plants:""
    }
    
    submit=(e)=>{
     e.preventDefault();
     fire.database().ref("plantsinfo").push({
         name:this.state.name,
         address:this.state.address,
         contact:this.state.contact,
         plants:this.state.plants
     })
     alert("Thanks for your co-orperation")
    }
    
    render() {
        return (
            <div className="container">
                
                <div className="Myform col-lg-10 col-md-10">
                <h2 className="plantsh">We help you to Find place & Plants 
                    To make our Society Green And clean
                    </h2>
                    <div className="row">
                    <div className="buttonss col-lg-6 col-md-6">
                <button type="button" className="btn btn-warning space position-relative" onClick={this.props.ok}>Can Provide Space</button>
                </div>
                 </div>
                    <h3 className="plantsh"> Plants To Donate</h3>
               
                      <form onSubmit={(e)=>this.submit(e)} className="formInfo">
                      <label for="fname"className="labelfont">Full Name</label><br/>
  <input type="text"  placeholder="enter name" required onChange={e=>{this.setState({ name:e.target.value}) }} /><br/>
  
  <label for="lname"className="labelfont">Address:</label><br/>
  
  <input type="text" placeholder="enter address" required onChange={e=>{this.setState({ address:e.target.value}) }}/><br/>
 
  <label for="lname"className="labelfont">ContactNo:</label><br/>
  <input type="text" placeholder="enter contact" required onChange={e=>{this.setState({ contact:e.target.value}) }} /><br/>
 
  <label for="lname"className="labelfont">Giving No.of Plants:</label><br/>
  <input type="text" placeholder="plants quantity" required onChange={e=>{this.setState({ plants:e.target.value}) }} /><br/>
  <input type="submit" />
                          </form>                    

                     </div>
                     
                    
            </div>
        )
    }
}
