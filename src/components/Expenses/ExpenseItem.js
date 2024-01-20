import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) =>{
    
    return (
        <Card className='ExpenseItem'>
            <ExpenseDate date={new Date(props.date)}/>
            <div className='E-I-D'>
                <h2>{props.title}</h2>
                <div className='E-I-P'>${props.amount}</div>
            </div>
            
        </Card>
    );
}

export default ExpenseItem;