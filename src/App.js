import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses=[
    {id:1,date:new Date(2023, 7, 15),title:"Insurance",price:"50",location:"Bangalore"},
    {id:2,date:new Date(2023, 7, 15),title:"Book",price:"20",location:"Delhi"},
    {id:3,date:new Date(2023, 7, 15),title:"Pen",price:"5",location:"Hyderabad"},
    {id:4,date:new Date(2023, 7, 15),title:"Laptop",price:"500",location:"Mumbai"}
    
  ]
  return (
    <div>
      <h1>Let's get Started</h1>
      <NewExpense/>
      <Expenses expenses={expenses}/>
    </div>
    
  );
}

export default App;
