import { useState } from 'react';
import './App.css';


function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  


  const handleButtonClick = (value) => {
    console.log(value)
    if (value === '=') {
      if (input.trim() === "") {
        setResult("Error");
      } else {
        const operators = ['+', '-', '*', '/'];
        if (operators.includes(input.trim().slice(-1))) {
          setResult("Error");
        } else {
          try {
            setResult(eval(input));
          } catch (error) {
            setResult("Error");
          }
        }
      }
    } else if (value === 'C') {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  console.log("result = ",result)

  return (
    <div className="App">
      <div className='display'>
        <input type='text' value={input} readOnly/>
        <div>{result}</div>
      </div>

      <div className='buttons'>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((btn) => (
          <button style={{height: '10vh', width: '10vh', fontSize: '3vh', borderRadius: '10px'}} key={btn} onClick={()=>handleButtonClick(btn)}>{btn}</button>
        ))}
      </div>
      

      
    </div>
  );
}

export default App;
