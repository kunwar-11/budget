import React , {useEffect} from 'react'

function Totaldata({total , setTotal , income , setIncome , expense , setExpense , inc , exp}) {
    //console.log(inc , exp)
    let i =0;
    let e = 0;
    inc.forEach(el => {
        i += el.amt
    });
    exp.forEach(el => {
        e += el.amt
    })
    useEffect(() => {
        setIncome(i)
        setExpense(e)
        setTotal(income - expense)
    })
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
        <div className= "total">
            <h2>Budget : <span>{indianSystem(total)}</span></h2>
            <h2 className = 'plus'>Income : <span>{indianSystem(income)}</span></h2>
            <h2 className = 'minus'>Expense : <span>{indianSystem(expense)}</span></h2>
        </div>
    )
}

export default Totaldata
