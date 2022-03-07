import { useState } from "react";
import { Books } from "./Books";

export function Total() {
  const [total, setTotal] = useState(0);

  const handleChange = (value) => {
    setTotal(total + value + booksCounter);
  };

  return (
    <span className="Total">
      <h3>Total items:{total}</h3>
    </span>
  );
}
