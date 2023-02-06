import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
const [enteredTitle, setEnteredTitle] = useState('')
const [enteredDate,setEnteredDate] = useState('')
const[enteredAmount, setEnteredAmount] = useState('')
    const titleHandler = (event)=>{
       setEnteredTitle(event.target.value)
    }

    const dateHandler = (event)=>{
        setEnteredDate(event.target.value)
    }
    const amountHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }

    const submitHandler = (e)=>{
    e.preventDefault()

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle(' ')
    setEnteredAmount(' ')
    setEnteredDate(' ')
    }

  return (
    
    <div className='new-expense__controls'>
    <form onSubmit={submitHandler}>
    <div className='new-expense__control'>
     <label form='title'>Title</label>
     <input type = "text"  value ={enteredTitle}onChange={titleHandler}/>
    </div>
    
    <div className='new-expense__control'>
    <label form='date'>Date</label>
    <input type="date"  value={enteredDate}onChange={dateHandler}/>
   </div>

   <div className='new-expense__control'>
   <label form='amount'>Amount</label>
   <input type ="text" value={enteredAmount} onChange={amountHandler} />
  </div>
  <div className='new-expense__actions'>
  <button type='submit'>Add Expense</button>
  </div>
    </form>
      
    </div>
  )
}

export default ExpenseForm
