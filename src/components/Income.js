import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
function Income({income , inc , setInc}) {

    const deleteHandler = () => {
        setInc(inc.filter(el => el.id !== income.id))
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
        <div className = "inc">
            <div className="desc">
                {income.description}
            </div>
            <div className="amount">
                {indianSystem(income.amt)}
            </div>
            <div className="delete">
                <FontAwesomeIcon onClick = {deleteHandler} icon = {faTimesCircle} />
            </div>
        </div>
    )
}

export default Income
