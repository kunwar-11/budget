import React , {useState} from 'react'
import Totaldata from './components/Totaldata'
import Input from './components/Input'
import Specific from './components/Specific'
import './styles/App.scss'
function App() {

  const [total , setTotal] = useState(0)
  const [income , setIncome] = useState(0)
  const [expense , setExpense] = useState(0)
  const [inc , setInc] = useState([])
  const [exp , setExp] = useState([])
  
  return (
    <div className="App">
      <Totaldata total = {total} setTotal = {setTotal} income = {income} setIncome = {setIncome} expense = {expense} setExpense = {setExpense} inc = {inc} exp = {exp}/>
      <Input inc = {inc} setInc = {setInc} exp = {exp} setExp = {setExp}/>
      <Specific inc = {inc} exp = {exp} setInc = {setInc} setExp = {setExp}/>
    </div>
  );
}

export default App;
