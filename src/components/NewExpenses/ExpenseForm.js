import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm =(props)=>{

    const [enteredTitle,setEnterdTitle]=useState('');
    const [enteredAmount,setEnterdAmount]=useState('');
    const [enteredDate,setEnterdDate]=useState('');


    const titleChangeHandler=(event)=>{
        setEnterdTitle(event.target.value);
    };
    const amountChangeHandler=(event)=>{
        setEnterdAmount(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setEnterdDate(event.target.value);
    };
    
    const submitHandler=(event)=>{
        event.preventDefault(); 

        const expensesData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(expensesData);

        setEnterdTitle('');
        setEnterdDate('');
        setEnterdAmount('');
        
        console.log(expensesData);
    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control"> 
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;