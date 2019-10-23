import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    // Props Code will be discussed in Next Lecture
    alert(this.props.color);
    this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>API Error is =: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // In Case when API is get called and results came else part will be executed
      return (
        <ul>
          {items.map(item => (
            <li key={item.title}>
              {item.title} {item.body}
            </li>
          ))}
        </ul>
      );
    }
  }

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      // alert(response)
      this.setState({isLoaded:true,
                      items:response.data})
    })
    .catch(error => {
      console.log(error);
    })

    // If you dont want to use third party axios you can use below code

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           items: result
    //         });
    //       },
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )

    }
}

export default App;
