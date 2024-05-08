import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="app">
      <div className="top">
        <h1>QR code Generator</h1>
        <div>
          <label htmlFor="text"></label>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            value={input}
            placeholder="Enter something"
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerateQRCode}
          >
            Generate Code
          </button>
        </div>
      </div>

      <div>
        <QRCode id="qr-code-value" value={qrCode} bgColor="#fff" size={400} />
      </div>
    </div>
  );
}

export default App;
