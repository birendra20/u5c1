import { Books } from "./Components/Books";
import { InkPens } from "./Components/InkPens";
import { NoteBooks } from "./Components/NoteBooks";
import { Pens } from "./Components/Pens";
import { Total } from "./Components/Total";
import "./styles.css";

export default function App() {
  return (
    <div className="items">
      <Books />
      <Pens />
      <NoteBooks />
      <InkPens />
      <Total />
    </div>
  );
}
