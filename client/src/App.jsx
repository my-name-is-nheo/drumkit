import React from "react";
import Title from "./components/Title/Title.jsx";
import Drumkit from "./components/Drumkit/Drumkit.jsx";
import Legend from "./components/Legend/Legend.jsx";
class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Drumkit />
        <Legend />
      </div>
    );
  }
}

export default App;
