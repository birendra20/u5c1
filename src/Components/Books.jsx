import { useState } from "react";

export function Books() {
  const [booksCounter, setBooksCounter] = useState(0);

  const handleChange = (value) => {
    setBooksCounter(booksCounter + value);
  };

  return (
    <span className="books">
      <h3>Books:{booksCounter}</h3>
      <button className="addBook" onClick={() => handleChange(1)}>
        +{" "}
      </button>
      <button
        className="remBook"
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
