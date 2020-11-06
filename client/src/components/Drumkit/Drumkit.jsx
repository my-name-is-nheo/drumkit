import React, { Component } from "react";

export default class DrumKit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleButtonPress = () => {
    console.log("button pressed");
  };
  handleKeyPress = (event) => {
    switch (event.key) {
      case "J":
      case "j":
        console.log("bassed triggered");
        break;
      case "F":
      case "f":
        console.log("snare triggered");
        break;
      case ";":
        console.log("low-tom triggered");
        break;
      case "L":
      case "l":
        console.log("med-tom triggered");
        break;
      case "K":
      case "k":
        console.log("high-tom triggered");
        break;
      case "A":
      case "a":
        console.log("hi-hat triggered");
        break;
      case "S":
      case "s":
        console.log("crash triggered");
        break;
      case " ":
        console.log("ride triggered");
        break;
      case "D":
      case "d":
        console.log("crash-2 triggered");
        break;
      case "R":
      case "r":
        console.log("record triggered");
        break;
      default:
        console.log(event.key);
    }
  };
  render() {
    return (
      <div id="drumkit">
        <img className="drums" draggable="false" src={"/images/drumkit.png"} />
        <button
          id="bass"
          onKeyPress={this.handleKeyPress}
          onClick={this.handleButtonPress}
        >
          J
        </button>
        <button
          id="snare"
          onClick={this.handleButtonPress}
          onKeyPress={this.handleKeyPress}
        >
          F
        </button>
        <button
          id="low-tom"
          onClick={this.handleButtonPress}
          onKeyPress={this.handleKeyPress}
        >
          ;
        </button>
        <button
          id="med-tom"
          onClick={this.handleButtonPress}
          onKeyPress={this.handleKeyPress}
        >
          L
        </button>
        <button
          id="high-tom"
          onClick={this.handleButtonPress}
          onKeyPress={this.handleKeyPress}
        >
          K
        </button>
        <button
          id="hi-hat"
          onClick={this.handleButtonPress}
          onKeyPress={this.handleKeyPress}
        >
          A
        </button>
        <button
          id="crash"
          onClick={this.handleButtonPress}
          onKeyPress={this.handleKeyPress}
        >
          S
        </button>
        <button
          id="ride"
          onClick={this.handleButtonPress}
          onKeyPress={this.handleKeyPress}
        >
          Space
        </button>
        <button
          id="crash-2"
          onClick={this.handleButtonPress}
          onKeyPress={this.handleKeyPress}
        >
          D
        </button>
        <button
          id="record"
          onClick={this.handleButtonPress}
          onKeyPress={this.handleKeyPress}
        >
          R
        </button>
      </div>
    );
  }
}
