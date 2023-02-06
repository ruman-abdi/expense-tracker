import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expensesData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expensesData)
  props.onAddExpenseData(expensesData)
    }
  return (
    <div className='new-expense'>
    <ExpenseForm  onSaveExpenseData ={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
