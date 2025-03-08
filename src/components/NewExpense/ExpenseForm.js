import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [enteredAmount, setEnteredAmount] = useState("");

  const [enteredDate, setEnteredDate] = useState("");
  const [isEditing, setIsEditing] = useState(false); // State for conditional rendering

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
      date:new Date(enteredDate)

    }
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onSaveExpenseData(expenseData);
     setIsEditing(false); 


  }
  const handleCancel = () => {
    setIsEditing(false); // Hide form when "Cancel" is clicked
  };
  

  return (
   <div>
   {!isEditing && ( // Show "Add Expense" button if not editing
        <button onClick={() => setIsEditing(true)}>Add Expense</button>
      )}
    {isEditing&&( <form onSubmit={submitFormHandler}>
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
      <button type="button" onClick={handleCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>)}
   </div>
  );
};

export default ExpenseForm;
