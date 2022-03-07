import { useState } from "react";

export function InkPens() {
  const [booksCounter, setBooksCounter] = useState(0);

  const handleChange = (value) => {
    setBooksCounter(booksCounter + value);
  };

  return (
    <span className="Pens">
      <h3>InkPens:{booksCounter}</h3>
      <button className="addInkpen" onClick={() => handleChange(1)}>
        +{" "}
      </button>
      <button
        className="addInkpen"
        onClick={() => {
          if (booksCounter >= 1) {
            handleChange(-1);
          }
        }}
      >
        -
      </button>
    </span>
  );
}
