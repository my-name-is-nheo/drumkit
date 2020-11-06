import React, { Component } from "react";

export default class DrumKit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleButtonPress = () => {
    console.log("button pressed");
  };
  render() {
    return (
      <div id="drumkit">
        <img className="drums" draggable="false" src={"/images/drumkit.png"} />
        <button
          id="bass"
          onClick={() => {
            console.log("clicked");
          }}
        >
          J
        </button>
        <button id="snare">F</button>
        <button id="low-tom">;</button>
        <button id="med-tom">L</button>
        <button id="high-tom">K</button>
        <button id="hi-hat">A</button>
        <button id="crash">S</button>
        <button id="ride">Space</button>
        <button id="crash-2">D</button>
        <button id="record">R</button>
      </div>
    );
  }
}
