import React from "react";
import Title from "./components/Title/Title.jsx";
import Drumkit from "./components/Drumkit/Drumkit.jsx";
import LegendPlusRecord from "./components/LegendPlusRecord/LegendPlusRecord.jsx";
class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Drumkit />
        <LegendPlusRecord />
      </div>
    );
  }
}

export default App;
