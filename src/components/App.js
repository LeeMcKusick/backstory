import React from 'react';
import CharForm from './CharForm';

import '../styles/App.css';
//import originOptions from './data/originOptions.json';

/*


  
  getOrigin(option, roll) {
    console.log()
    let val = originOptions[option][roll];
    console.log("val:" + val);
    if (val) {
      return val;
    } else {
      return originOptions[option].default;
    }
  }

  getOptions(option) {
    return charOptions[option].map((i) => 
      <option value={i.name} key={i.name}>{i.label}</option>
    );
  }

  cap(i){
    return i.charAt(0).toUpperCase() + i.slice(1);
  }

  roll(d) { 
    return Math.floor(Math.random() * d + 1);
  }

  render() {
    return (
      <div className="form">
        <form>
          <select name="race" onChange={this.handleInputChange}>
            <option></option>
            { this.getOptions("race") }
          </select>
          <select name="class" onChange={this.handleInputChange}>
          <option></option>
            {this.getOptions("class")}
          </select>
          <select name="background" onChange={this.handleInputChange}>
          <option></option>
            {this.getOptions("background")}
          </select>
      </form>
      <p>You are a {this.state.race.label} {this.state.class.label}, with a {this.state.background.label} background.</p>
      <p>D20: {this.roll(20)}</p>
      <p>Parents: {this.state.parents}</p>
      </div>
    )
  }
}
*/
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Backstory Generator</h1>
      </header>
      <CharForm />
    </div>

  );
}

export default App;
