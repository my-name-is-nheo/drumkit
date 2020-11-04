import React, { Component } from "react";

export default class DrumKit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleKeyPress = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div id="drumkit">
        <img className="drums" draggable="false" src={"/images/drumkit.png"} />
        <button id="bass" disabled="true">
          J
        </button>
        <button id="snare" disabled="true">
          F
        </button>
        <button id="low-tom" disabled="true">
          ;
        </button>
        <button id="med-tom" disabled="true">
          L
        </button>
        <button id="high-tom" disabled="true">
          K
        </button>
        <button id="high-hat" disabled="true">
          A
        </button>
        <button id="crash" disabled="true">
          S
        </button>
        <button id="ride" disabled="true">
          Space
        </button>
        <button id="crash-2" disabled="true">
          D
        </button>
      </div>
    );
  }
}
