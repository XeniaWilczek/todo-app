import { useState } from "react";
import "./InputAndButton.css";

function InputAndButton({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(changeEvent) {
    setInputValue(changeEvent.target.value);
  }

  function clickAddButton() {
    if (inputValue.trim() !== "") {
      onAdd(inputValue);
      setInputValue("");
    }
  }

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-field"
        onChange={handleInputChange}
        value={inputValue}
      />{" "}
      <button
        className="add-button"
        disabled={inputValue.trim().length < 1}
        onClick={clickAddButton}
      >
        Add
      </button>
    </div>
  );
}
export { InputAndButton };
