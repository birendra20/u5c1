import { useState } from "react";

export function NoteBooks() {
  const [booksCounter, setBooksCounter] = useState(0);

  const handleChange = (value) => {
    setBooksCounter(booksCounter + value);
  };

  return (
    <span className="books">
      <h3>NoteBooks:{booksCounter}</h3>
      <button className="addNotebook " onClick={() => handleChange(1)}>
        +
      </button>
      <button
        className="remNotebook "
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
