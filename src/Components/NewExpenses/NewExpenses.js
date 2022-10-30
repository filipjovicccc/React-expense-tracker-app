import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses() {
  const [editCard, setEditCard] = useState(false);
  const editCardHandler = () => {
    setEditCard(true);
  };
  const cancelCardHandler = () => {
    setEditCard(false);
  };

  return (
    <div className="new-expense">
      {editCard ? (
        <ExpenseForm cancelCard={cancelCardHandler} />
      ) : (
        <button onClick={editCardHandler}>Add expenses</button>
      )}
    </div>
  );
}

export default NewExpenses;
