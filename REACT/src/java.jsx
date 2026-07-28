import { useState } from "react";
import bulbOn from "./assets/image.png";
import bulbOff from "./assets/image1.png";
import "./java.css";

function App() {
  const [light, setLight] = useState(false);

  return (
    <div className="container">
      <h1>Light ON / OFF</h1>

      <img
        src={light ? bulbOn : bulbOff}
        alt="Bulb"
        className="bulb"
      />

      <button onClick={() => setLight(!light)}>
        {light ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default App;