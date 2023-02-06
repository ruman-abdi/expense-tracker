import React, { useState } from 'react'
import ExpenseFilter from '../NewExpense/ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import './newExpenses.css'
const NewComponent = (props) => {

  const[filteredYear,setFilteredYear] = useState('2020')
  
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  const filterdExpenses = props.item.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })
  return (
    <div className='expenses'>
    <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}  />
    {filterdExpenses.length === 0 ? <p> no expenses found</p> :
  
    filterdExpenses.map((expense)=>(
      <ExpenseItem 
      key= {expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} 
      
      
      />
    ))}
        
  

    
    </div>
  )
}

export default NewComponent
