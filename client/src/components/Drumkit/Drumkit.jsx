import React, { Component } from "react";

export default class DrumKit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="drumkit">
        <img class="drums" draggable="false" src={"/images/drumkit.png"} />
      </div>
    );
  }
}
