import React, { Component } from 'react';
import './App.css';
import Validate from './Validate/Validate';
import Char from './Char/Char';

class App extends Component {

  state = {
    inputText : ''
  }

  changeInputHandler = (event) => {
    this.setState({
      inputText : event.target.value
    }
    );
  }

   deleteCharHandler = ( index ) => {
     let splitText = this.state.inputText.split('');
     splitText.splice(index, 1);
     const newInputText =splitText.join('');

     this.setState(
      {
       inputText : newInputText
      }
     )
     
  }

  render() {
    let charArray = [];

    charArray = this.state.inputText.split('').map((char , index) => {
       return ( 
         <Char
           character = {char}
           key = { index }
           click = { () => this.deleteCharHandler(index) }
          />
       )
     })

    return (
      <div className="App">
        <input
         type = "text" 
         value = { this.state.inputText }
         onChange = { this.changeInputHandler }
         />

        <p> { this.state.inputText } </p>

         <Validate 
           inputLength = { this.state.inputText.length }/>
           
        {charArray}

      </div>
    );
  }
}

export default App;
