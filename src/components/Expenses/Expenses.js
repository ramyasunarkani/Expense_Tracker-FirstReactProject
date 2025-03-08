import React,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';


function Expenses({expenses}){
  const [filteredYear,setFilteredYear]=useState('2023')
  const changeFilterHandler=(year)=>{
    setFilteredYear(year);
  }
  const filtredExpenses=expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  let expenseContent=<p>No expenses found</p>;

   if (filtredExpenses.length > 0) {
    expenseContent = (
      <>
        {filtredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        ))}
        {filtredExpenses.length === 1 && <p >Only one expense found. Please add more</p>}
      </>
    );
  }
    return( 
    <Card className="expenses">
    <ExpensesChart chartData={filtredExpenses} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
      {expenseContent}
    </Card>
    );
}

export default Expenses;