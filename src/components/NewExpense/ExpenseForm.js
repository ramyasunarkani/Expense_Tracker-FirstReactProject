import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [enteredAmount, setEnteredAmount] = useState("");

  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitFormHandler=(event)=>{
    event.preventDefault();
      const expenseData={
      title:enteredTitle,
      amount:enteredAmount,
      date:enteredDate

    }
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    console.log(expenseData);


  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" value={enteredDate} min="2023-01-01" max="2025-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
