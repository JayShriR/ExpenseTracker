import React, { useState, useEffect } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
 
const DUMMY_EXPENSE = [
  {
    id:"e1",
    title:"School Fee",
    amount:250,
    date:new Date(2024,1,12)
  },
  {
    id:"e2",
    title:"Library Fee",
    amount:230,
    date:new Date(2024,1,22)
  },
  {
    id:"e3",
    title:"Tution Fee",
    amount:350,
    date:new Date(2024,1,10)
  },
  {
    id:"e4",
    title:"School Fee",
    amount:250,
    date:new Date(2023,5,12)
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);


  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;