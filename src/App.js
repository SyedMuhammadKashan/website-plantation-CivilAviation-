import React, { Component } from 'react';
import fire from './config/fire';
import Login from './Login';
//import Home from './Home'
import Website from './Website';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div className="App"> 
        
        {this.state.user ? (<Website/>) : (<Login/>)}
       
      
      
      
      </div>
    );
  }
}

export default App;