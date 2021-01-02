import React , {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid'; 
function Input({inc , setInc , exp , setExp}) {
    const [desc , setDesc] = useState("");
    const [amt , setAmt] = useState("");
    const [type , setType] = useState('inc')
    const [isInc , setIsInc] = useState(true)
    const descChangeHandler = (e) => {
        setDesc(e.target.value)
    }

    const amtChangeHandler = (e) => {
        setAmt(e.target.value)
    }

    const incExp = (e) => {
        setType(e.target.value)
        setIsInc(!isInc)
    }
    const submitHandler = () => {
        if(amt !== '' && desc !== '') {
        if(type === 'inc') {
            setInc([...inc , {description : desc , amt : parseFloat(amt) , id : uuidv4()}])
        }
        if(type === 'exp') {
            setExp([...exp , {description : desc , amt : parseFloat(amt) , id : uuidv4()}])
        }}
        //console.log(inc)
        setDesc("")
        setAmt("")
    }
    return (
        <form>
            <select className = {`${isInc ? 'i' : 'e'}`} onChange = {incExp} name="inc-exp">
                <option value="inc">+</option>
                <option value="exp">-</option>
            </select>
            <input className = {`${isInc ? 'i' : 'e'}`} onChange = {descChangeHandler} value = {desc} type="text" placeholder = "enter description"/>
            <input className = {`${isInc ? 'i' : 'e'}`} onChange = {amtChangeHandler} value = {amt} type="number" placeholder = "enter amount"/>
            <FontAwesomeIcon className = {`${isInc ? 'in' : 'ee'}`} onClick = {submitHandler} icon = {faCheckCircle} size = "2x"/>
        </form>
    )
}

export default Input
