import React, {useState} from 'react'
import './Expenses.css'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear]=useState('2020');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }

    const filterExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
    <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={filterExpenses}/>
            <ExpensesList items={filterExpenses}/>      
        </Card>
    </div> 
    )
}

export default Expenses
