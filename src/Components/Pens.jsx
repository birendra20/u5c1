import { useState } from "react";

export function Pens() {
  const [booksCounter, setBooksCounter] = useState(0);

  const handleChange = (value) => {
    setBooksCounter(booksCounter + value);
  };

  return (
    <span className="Pens">
      <h3>Pens:{booksCounter}</h3>
      <button className="addPen" onClick={() => handleChange(1)}>
        +{" "}
      </button>
      <button
        className="remPen"
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
