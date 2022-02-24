import React,{Component} from "react";
import Plant from "./Plant.js";
import Place from "./Place.js";

class Mypost extends Component{
   
    state={
        changer: false
    }

  myFun=()=>{
      this.setState(
          {
              changer:true
          }
      )
  }
    
   
          render(){
           const check=this.state.changer;
           if(check){
               return <Place />

           }  else {
               return <Plant ok={this.myFun}/>
           }
               
}
}
export default Mypost;
