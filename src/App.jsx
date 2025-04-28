import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class App extends Component {
  //const [count, setCount] = useState(0)
  //https://jsonplaceholder.typicode.com/photos

  constructor(props){
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(photos =>{
      this.setState({
        photos
      });
    });
  }

  render() {
    return (
    <div>
      <ul>
        {this.state.photos.map((photo,index)=>{
          return <li key={index}>{photo.title}</li>;
        })}
      </ul>
    </div>
    );
  }
}

export default App;
