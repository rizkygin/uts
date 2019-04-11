import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    //default
    this.state = {
      bgColor:'#282c34',
      text : "Biru"
    };
  }
  handleclick(){
    this.setState({
        bgColor: 'green',
        text : 'Hijau'
    })
  }
  render() {
    return (
      <div className="App">
        <header className={this.state.text}
        style={{backgroundColor:this.state.bgColor}}>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <div>
              Tema nya adalah {this.state.text}
            </div>
            <button 
              onClick={this.handleClick} >Ganti Tema
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
