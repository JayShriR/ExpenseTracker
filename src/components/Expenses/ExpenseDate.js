import React from 'react';
import './ExpenseDate.css';
const ExpenseDate = (props) =>{
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: '2-digit' });
    const year = props.date.getFullYear();
    return(
            <div className="E-D">
                <div className="E-D-Day">{day}</div>
                <div className="E-M">{month}</div>
                <div className="E-Y">{year}</div>
            </div>
    )
}
export default ExpenseDate;