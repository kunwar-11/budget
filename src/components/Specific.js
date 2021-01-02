import React from 'react'
import Income from './Income'
import Expense from './Expense'
function Specific({inc , exp , setInc , setExp}) {
    return (
        <div className = "specific">
            <div className="income">
                <h3 className='plus'>INCOME</h3>
                {
                    inc.map( income => (
                        <Income income = {income} inc = {inc} setInc = {setInc} key = {income.id} />
                    ))
                }
            </div>
            <div className="expense">
                <h3 className = 'minus'>EXPENSE</h3>
                {
                    exp.map( expense => (
                        <Expense expense = {expense} exp = {exp} setExp = {setExp} key = {expense.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Specific
