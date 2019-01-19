import React, { Component } from 'react';
import IntroNote from '../Intro';
//you can name it anything as long as it tallies with the naming of the inner component
import './App.css';

// Components :
//   Functional are just JavaScript functions returning a react element,e.g Intrp
//   Class components has extra features, ie extends react component and takes state
//   Capitalise names of (functional) components, syntax convention
// lower case will be considered simple html tags
//
// Functional Component

class App extends Component {
  state = {
    series: []
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            TV Series
          </a>
        </header>
        {/* //message property originated in the intro file, passed as a property
        here */}
        <IntroNote message="Here you can find your favourite series." />
        The length of our TV series is: {this.state.series.length}
      </div>
    );
  }
}

export default App;
