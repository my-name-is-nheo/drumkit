import React from "react";
import Title from "./components/Title/Title.jsx";
import Drumkit from "./components/Drumkit/Drumkit.jsx";
class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Drumkit />
      </div>
    );
  }
}

export default App;
