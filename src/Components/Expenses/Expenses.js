import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [goal, setValue] = useState("2020");
  const changeValueHandler = (enteredExData) => {
    // const saveData = enteredExData;
    // console.log(setValue(enteredExData));
    setValue(enteredExData);
  };
  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === goal;
  });
  return (
    <Card className="expenses">
      <ExpenseList items={filteredExpenses} />
      <ExpensesFilter changeValue={changeValueHandler} />
    </Card>
  );
}

export default Expenses;
