import React, { useState, useEffect } from "react";
import "./App.css";

// const InputS = styled.input`
//   width: 30%;
//   height: 2.5rem;
// `;

function App() {
  const [inputValue, setInputValue] = useState("");

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // const [isValid, setIsValid] = useState(true);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  function handleRemoveClick(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  function handleAddClick(e) {
    console.log("cliked");
    e.preventDefault();

    if (!inputValue) return;

    setItems([...items, inputValue]);
    console.log(items);
    setInputValue("");
  }

  return (
    <div className="App-container">
      <div className="App">
        <form onSubmit={handleAddClick}>
          <div className="input_container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          {items.map((item, index) => (
            <div
              className="entry"
              key={index}
              onClick={() => handleRemoveClick(index)}
            >
              {item}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default App;
