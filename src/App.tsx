import "./App.scss";

import { ChangeEvent, useRef, useState } from "react";
import { retardize } from "./services/retardize.service";

function App() {
  const [text, setText] = useState("Enter your text...");
  const [retardizedText, setRetardizedText] = useState(
    "Start typing to see result here"
  );

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const retardizeText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
    setRetardizedText(retardize(event.target.value));
  };
  
  const copyText = (): void => {
    navigator.clipboard.writeText(retardizedText);
  };

  const resetText = (): void => {
    setText("Enter your text...");
    setRetardizedText("Start typing to see result here");

    if (textAreaRef.current) {
      textAreaRef.current.value = "";
    }
  };

  return (
    <div className="retardize" style={{ height: window.innerHeight }}>
      <h1 className="retardize__app-header">Retardize App</h1>
      <textarea
        className="retardize__input-textarea"
        ref={textAreaRef}
        onChange={retardizeText}
        placeholder={text}
      ></textarea>
      <button
        className="retardize__reset-inputs-btn"
        onClick={resetText}
      ></button>
      <textarea
        disabled
        className="retardize__output-textarea"
        placeholder={retardizedText}
      ></textarea>
      <button className="retardize__copy-btn" onClick={copyText}>
        Copy
      </button>
    </div>
  );
}

export default App;
