import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const enterTitleHandler = () => {
    setTitle("Title");
  };
  // enterTitleHandler();
  return (
    <div className="expense-item">
      <ExpensesDate
        date={props.date}
        title={props.title}
        amount={props.amount}
      />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
      <button onClick={enterTitleHandler}>{props.title}</button>
    </div>
  );
}

export default ExpenseItem;
