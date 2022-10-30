import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
}

export default ExpenseList;
