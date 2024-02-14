import React, { useState } from 'react'
import './calculator.css'

const Calculator = () => {
    const [value, setValue] = useState('');

    const calculate = () =>{
        try {
            setValue(eval(value).toString());
        } catch (error) {
            setValue('Error')
        }
    }
  return (
    <div className='container'>
      <div className='calculator'>
      <form action="">
        <div className='display'>
            <input type="text" value={value} readOnly/>
        </div>
        <div>
            <input type="button" value="AC" onClick={e => setValue('')}/>
            <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1).toString())}/>
            <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
        </div>

        <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
        </div>

        <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
        </div>

        <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
        </div>

        <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={calculate}/>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Calculator
