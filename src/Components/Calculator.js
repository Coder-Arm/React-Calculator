import React, { useState } from "react"

const Calculator = () => {
    let [num1, setNum1] = useState('');
    let [num2, setNum2] = useState('');
    let [result, setResult] = useState('');
    let [error, setError] = useState('');
    
    function handleNum1(event){
       setNum1(event.target.value);
    }
    function handleNum2(event){
        setNum2(event.target.value);
    }
     function validation(op){
        if(num1 === '' && num2 === ''){
            setError("Num1 and Num2 should not be empty!")
            return;
        }
        else if(num1 === ''){
            setError("Num1 cannot be empty!")
           return;
        }
        else if(num2 === ''){
            setError("Num2 cannot be empty!")
            return;
        }
        else operation(op);
     }

     function operation(op){
        setError('');
      switch(op){
        case '+' : setResult(Number(num1) + Number( num2))
        break;
        case '-' : setResult(Number(num1) - Number( num2))
         break;
         case '*' : setResult(Number(num1) * Number( num2))
         break;
         case '/' : setResult(Number(num1) / Number( num2))
         break;
         default : setResult('');
         return;
      }
     }

    return (
        <div className='calculator'>
    <h1>React Calculator</h1>
    <input type='text' placeholder='Num 1' onInput={handleNum1}/>
    <input type='text' placeholder='Num 2' onInput={handleNum2}/>
    <div className="buttons">
      <button onClick= {()=> validation('+')}>+</button>
      <button onClick= {()=> validation('-')}>-</button>
      <button onClick= {()=> validation('*')}>*</button>
      <button onClick= {()=> validation('/')}>/</button>
    </div>
    {error && <div className="error">
        <div style={{color : "red"}}>Error!</div>
        <div>{error}</div>
        </div>}
    {!error && result !== '' && <div className="success">
    <div style={{color : "green"}}>Success!</div>
        <div>Result: {result}</div>
        </div>}
   </div>
    )
}
export default Calculator