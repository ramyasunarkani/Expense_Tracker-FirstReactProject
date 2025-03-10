import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  
  const [expenses,setExpense]=useState([
    {id:1,date:new Date(2024, 6, 25),title:"Insurance",price:"50",location:"Bangalore"},
    {id:2,date:new Date(2023, 2, 5),title:"Book",price:"20",location:"Delhi"},
    {id:3,date:new Date(2023, 9, 10),title:"Pen",price:"5",location:"Hyderabad"},
    {id:4,date:new Date(2025, 7, 15),title:"Laptop",price:"500",location:"Mumbai"}
    
  ]);
  const addExpenseHandler=(data)=>{
    setExpense((prevexpense)=>{
      return [data,...prevexpense];
    })

  }
  return (
    <div>
      <h1 style={{textAlign:'center', fontFamily:'cursive'}}>SaveMore</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
    
  );
}

export default App;
