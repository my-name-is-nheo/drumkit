import React, { Component } from "react";

export default class Legend extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Key</th>
            <th>Sound</th>
          </tr>
          <tr>
            <td>A</td>
            <td>Hi-Hat</td>
          </tr>
          <tr>
            <td>F</td>
            <td>Snare</td>
          </tr>
          <tr>
            <td>J</td>
            <td>Bass</td>
          </tr>
          <tr>
            <td>S</td>
            <td>Crash</td>
          </tr>
          <tr>
            <td>K</td>
            <td>High Tom</td>
          </tr>
          <tr>
            <td>L</td>
            <td>Medium Tom</td>
          </tr>
          <tr>
            <td>;</td>
            <td>Low tom</td>
          </tr>
          <tr>
            <td>D</td>
            <td>Crash II</td>
          </tr>
          <tr>
            <td>Space</td>
            <td>Ride</td>
          </tr>
          <tr>
            <td>R</td>
            <td>Record</td>
          </tr>
        </table>
      </div>
    );
  }
}
