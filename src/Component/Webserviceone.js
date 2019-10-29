
import React, {Component} from 'react'

class Webserviceone extends Component{
  constructor(props){
    super(props);
  }

  MyFirstButton=()=>{
    alert('In The Name Of Allah');
  }
  
  render(){
    return (
      <button onClick={this.MyFirstButton}>
      My First Button
      </button>
    );
  }
}

export default Webserviceone;
