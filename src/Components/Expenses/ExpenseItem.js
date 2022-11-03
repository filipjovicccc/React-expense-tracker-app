import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
import { useState } from "react";

function ExpenseItem(props) {
  // enterTitleHandler();
  return (
    <div className="expense-item">
      <ExpensesDate
        date={props.date}
        title={props.title}
        amount={props.amount}
      />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
      <button>{props.title}</button>
    </div>
  );
}

export default ExpenseItem;
