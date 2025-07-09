import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrCodeGenerator() {
  const [qrCode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  function handleClick() {
    setQrcode(input);
    setInput("");
  }
  return (
    <div>
      <div>
        <h1> QR CODE GENERATOR </h1>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={() => handleClick()}
        >
          {" "}
          Generate
        </button>

        <QRCode size={400} value={qrCode} />
      </div>
    </div>
  );
}

export default QrCodeGenerator;
