import React, { useEffect, useState } from "react";

function ColorGenerator() {
  const [color, setColor] = useState("black");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function ColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[ColorUtility(hex.length)];
    }
    console.log(ColorUtility(16));
    setColor(hexColor);
    console.log(color);
  }
  function handleRandomRgbColor() {
    const r = ColorUtility(256);
    const g = ColorUtility(256);
    const b = ColorUtility(256);

    setColor(`rgb( ${r} ,${g}, ${b} )`);
    console.log(color);
  }

  useEffect(() => {
    typeOfColor === "hex" ? handleRandomRgbColor() : handleRandomHexColor();
  }, [typeOfColor]);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <button
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        create Hex Color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        create RGB Color
      </button>
      <button
        onClick={() =>
          typeOfColor === "hex"
            ? handleRandomHexColor()
            : handleRandomRgbColor()
        }
      >
        Random Color Generator
      </button>

      <h3>Type of Color= {typeOfColor}</h3>
      <h1> Color: {color}</h1>
    </div>
  );
}

export default ColorGenerator;
