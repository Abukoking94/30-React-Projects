import { useState } from "react";
import "./App.css";
import Accordian from "./components/accordianList/accordian";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Accordian />
    </>
  );
}

export default App;
