import React from 'react';
import logo from './logo.svg';
import './App.css';

import Webserviceone from './Component/Webserviceone';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          flag:0
        };
  }



  MySecondButton=()=>{
    alert('Second button Called');
  }


  render() {

  return(


    <div>

    <Webserviceone />

      <button onClick={this.MySecondButton}>
      My Second Button
      </button>

      <button onClick={this.MyFirstButton}>
      My Third Button
      </button>

    </div>
    );
  }
}

export default App;
