import './ExpenseDate.css'
const months=[
    "January","February","March","April","May","June","July","August","September","October","November","December"

];
function ExpenseDate(props){
    const month=months[props.date.getMonth()];
    const day=props.date.getDate();
    const year=props.date.getFullYear();
    return(
        <div className="expense-date"> 
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;