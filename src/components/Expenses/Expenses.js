import React,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';



function Expenses({expenses}){
  const [filteredYear,setFilteredYear]=useState('2023')
  const changeFilterHandler=(year)=>{
    setFilteredYear(year);
  }
  const filtredExpenses=expenses
        .filter((expense) => expense.date.getFullYear().toString() === filteredYear)
    return( 
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
        {filtredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                price={expense.price}
              />
        ))}
    </Card>
    );
}

export default Expenses;