import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes_data: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoe/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ shoes_data: data });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kathy's Favorite Shoes</h1>
        </header>
        <ul>
          {this.state.shoes_data.map((shoe) => {
            return (
              <li key={shoe.id}>
                <p>Size: {shoe.size}</p>
                <p>Brand: {shoe.brand_name}</p>
                <p>Manufacturer: {shoe.manufacturer}</p>
                <p>Color: {shoe.colors}</p>
                <p>Type: {shoe.shoe_type}</p>
                <p>Fasten: {shoe.fasten_type}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;