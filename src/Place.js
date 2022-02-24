import React, { Component } from 'react'
import fire from "./config/fire";
import "./PlaceStyle.css";
export default class Place extends Component {
    
    state={
        name:"",
        address:"",
        contact:"",
        space:""
    }

    submit=(e)=>{
        e.preventDefault();
        fire.database().ref("spaceinfo").push({
            name:this.state.name,
            address:this.state.address,
            contact:this.state.contact,
            space:this.state.space
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
                   
                    <h3 className="space">Space I Can Provide</h3>
                    <form onSubmit={(e)=>this.submit(e)} className="formInfo">
                      <label for="fname"className="labelfont">Full Name</label><br/>
  <input type="text"  placeholder="enter name" required onChange={e=>{this.setState({ name:e.target.value}) }} /><br/>
  
  <label for="lname"className="labelfont">Address:</label><br/>
  
  <input type="text" placeholder="enter address" required onChange={e=>{this.setState({ address:e.target.value}) }}/><br/>
 
  <label for="lname"className="labelfont">ContactNo:</label><br/>
  <input type="text" placeholder="enter contact" required onChange={e=>{this.setState({ contact:e.target.value}) }} /><br/>
 
  <label for="lname"className="labelfont">Giving No.of Plants:</label><br/>
  <input type="text" placeholder="plants quantity" required onChange={e=>{this.setState({ space:e.target.value}) }} /><br/>
  <input type="submit" />
                          </form>                    

                     </div>
                     
            
            </div>
        )
    }
}
