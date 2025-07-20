
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount]=useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementClick(){
    dispatch(increment());

  }
  function handleDecrementClick(){
    dispatch(decrement());

  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount());
  }
  

  return (
    <div className='container'>
      <button  className="btn"onClick={handleIncrementClick}> + </button>
      <p>Count:{count}</p>
      <button className="btn" onClick={handleDecrementClick}> - </button>
      <br />
      <br />
       <button className="btn" onClick={handleResetClick}>Reset </button>

       <input type="Number"
       value={amount}
       placeholder='Enter Amount'
       onChange={(e)=>setAmount(e.target.value)} />
       <br />
       <br />
        <button className="btn" onClick={handleIncAmountClick}>Inc By A mount </button>

    </div>
  )
}

export default App
