import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAamount: "",
  //     enteredDate: "",
  //   });

  //   const titleChangeHandler = (e) => {
  // setTitle(console.log(e.target.value));

  // setUserInput({
  //   ...userInput,
  //   enteredTitle: event.target.value,
  // });
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value };
  // });
  // jos jedan od nacina pisanja vukcije gore, mozda korektnija
  //jer stajtovi zavise od prethodnih stejtova
  //   };
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.1"
            step="0.1"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2022-09-25"
            max="2025-10-22"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="new-expense__actions">
          Add expense
        </button>
        <button onClick={props.cancelCard}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
