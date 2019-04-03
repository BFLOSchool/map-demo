import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ol>
            {this.state.days.map((day, i) =>
              <li>{day}</li>
            )}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
