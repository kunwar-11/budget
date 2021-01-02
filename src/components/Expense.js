import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
function Expense({expense , exp , setExp}) {
    const deleteHandler = () => {
        setExp(exp.filter(el => el.id !== expense.id))
    }
    const indianSystem = (x) => {
        x=x.toString();
        var afterPoint = '';
        if(x.indexOf('.') > 0)
           afterPoint = x.substring(x.indexOf('.'),x.length);
        x = Math.floor(x);
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers !== '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint
        return(res);
    
    }

    return (
        <div className = "exp">
            <div className="desc">
                {expense.description}
            </div>
            <div className="amount">
                {indianSystem(expense.amt)}
            </div>
            <div className="delete">
                <FontAwesomeIcon onClick = {deleteHandler} icon = {faTimesCircle} />
            </div>
        </div>
    )
}

export default Expense
