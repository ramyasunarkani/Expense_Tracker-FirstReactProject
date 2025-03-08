import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"; 

const Chart = ({ chartExpenses }) => {
  const expenseOnlyArray = chartExpenses?.map(exp => exp.price) || [];
  const maxValue = Math.max(...expenseOnlyArray, 0); 

  const chartData = [
    { expenseMonth: "Jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "Mar", expenseValue: 0 },
    { expenseMonth: "Apr", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "Jun", expenseValue: 0 },
    { expenseMonth: "Jul", expenseValue: 0 },
    { expenseMonth: "Aug", expenseValue: 0 },
    { expenseMonth: "Sep", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ];

  chartExpenses.forEach(expense => {
    if (expense.date instanceof Date) {
      const monthIndex = expense.date.getMonth();
      chartData[monthIndex].expenseValue += expense.price;
    }
  });

  return (
    <div className="chart">
      {chartData.map(({ expenseMonth, expenseValue }) => (
        <ChartBar
          key={expenseMonth}
          label={expenseMonth}
          value={expenseValue}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
