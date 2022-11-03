import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  const [editCard, setEditCard] = useState(false);
  const editCardHandler = () => {
    setEditCard(true);
  };
  const cancelCardHandler = () => {
    setEditCard(false);
  };
  const saveExpensesHandler = (params) => {
    const saveData = {
      ...params,
      id: Math.random().toString(),
    };
    props.onAdd(saveData);
  };

  return (
    <div className="new-expense">
      {editCard ? (
        <ExpenseForm
          onSave={saveExpensesHandler}
          cancelCard={cancelCardHandler}
        />
      ) : (
        <button onClick={editCardHandler}>Add expenses</button>
      )}
    </div>
  );
}

export default NewExpenses;
