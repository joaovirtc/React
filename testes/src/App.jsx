import { useState } from "react";
import "./App.css";
import { Props } from "./components/Props";
import { Events } from "./components/Events";

function App() {
  return (
    <div className="App">
      <Props />
      <Events />
    </div>
  );
}

export default App;
