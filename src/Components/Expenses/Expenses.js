import React from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseList items={props.data} />
    </Card>
  );
}

export default Expenses;
