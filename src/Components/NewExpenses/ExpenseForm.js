import React from "react";
import "./ExpenseForm.css";
import { useRef } from "react";

const ExpenseForm = (props) => {
  // const [enteredTitle, setTitle] = useState("");
  // const [enteredAmount, setAmount] = useState("");
  // const [enteredDate, setDate] = useState("");
  const enteredTitle = useRef();
  const enteredAmount = useRef();
  const enteredDate = useRef();

  // const titleChangeHandler = (e) => {
  //   setTitle(e.target.value);
  // };
  // const amountChangeHandler = (e) => {
  //   setAmount(e.target.value);
  // };
  // const dateChangeHandler = (e) => {
  //   setDate(e.target.value);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    const referentTitle = enteredTitle;
    const referentAmount = enteredAmount;
    const referentDate = enteredDate;
    const expenseData = {
      title: referentTitle.current.value,
      amount: referentAmount.current.value,
      date: new Date(referentDate.current.value),
    };
    props.onSave(expenseData);
    referentTitle.current.value = "";
    referentAmount.current.value = "";
    referentDate.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" ref={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input ref={enteredAmount} type="number" min="0.1" step="0.1" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            ref={enteredDate}
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
