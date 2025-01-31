import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';


function Expenses({expenses}){
    return( 
    <Card className="expenses">
        {expenses.map((expense) => (
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