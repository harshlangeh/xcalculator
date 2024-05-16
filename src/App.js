import { useState } from 'react';
import './App.css';


function App() {
  const [input, setInput] = useState("")
  

  const handleButtonClick = () => {

  }
  return (
    <div className="App">
      <div className='display'>
        <input type='text' value={input} readOnly/>
      </div>

      <div className='buttons'>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((btn) => (
          <button style={{height: '10vh', width: '10vh', fontSize: '3vh'}} key={btn} onClick={handleButtonClick}>{btn}</button>
        ))}
      </div>
      

      
    </div>
  );
}

export default App;
