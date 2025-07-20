
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import LoggerComponents from './components/LoggerComponents';
import TimerComponents from './components/TimmerComponents';
import DataFetcher from './components/DataFetcher';
import ResizeComponents from './components/ResizeComponents';
import MultiEffectComponents from './components/MultiEffectComponents';

function App() {
  const [count, setCount]=useState(0);
  const [total, setTotal]=useState(1);

  return(
    <div>
      {/* <LoggerComponents /> */}

      {/* <TimerComponents /> */}

      {/* <DataFetcher /> */}

      {/* <ResizeComponents /> */}
      {/* <MultiEffectComponents /> */}
    </div>
  )

  //first->sideeffect dunction
  //second-clean-up function
  //third->comma sepated dep list

  // useEffect(()=>{
  //   first
  //   return()=>{
  //     second
  //   }
  // },[third])

  //variation:1
  //runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })
  
  // function handleClick(){
  //   setCount(count+1);
  // }

  // return (
  //   <div>
  //     <button onClick={handleClick}>
  //       Click me
  //     </button>
  //     <br />
  //     count is:{count}

  //   </div>
  // )

  //variation 2:
  //that runs on only first render
  // useEffect(() =>{
  //   alert("I will rum on only 1st render");
  // }, [])
  
  // function handleClick(){
  //   setCount(count+1);
  // }

  // return (
  //   <div>
  //     <button onClick={handleClick}>
  //       Click me
  //     </button>
  //     <br />
  //     count is:{count}

  //   </div>
  // )

  //variation:3
  //every time when count update
  //  useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count])
  
  // function handleClick(){
  //   setCount(count+1);
    
  // }
 
  // }

  // return (
  //   <div>
  //     <button onClick={handleClick}>
  //       Update count
  //     </button>
  //     <br />
  //     count is:{count}

  //   </div>
  // )

  //variation:4
  //every time when count/total updated
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated")
  // }, [count,total])
  
  // function handleClick(){
  //   setCount(count+1);
    
  // }
  // function handleClickTotal(){
  //   setTotal(total+1);
  // }

  // return (
  //   <div>
  //     <button onClick={handleClick}>
  //       Update count
  //     </button>
  //     <br />
  //     count is:{count}

  //     <br />
  //     <button onClick={handleClick}>
  //       Update total
  //     </button>
  //     <br />
  //     total is:{total}

  //   </div>
  // )

  //variation-5:
  //iss baar let's add a cleanup function
  // useEffect(() => {
  //   alert("Count is updated")
  //   return ()=>{
  //     alert("Count is unmounted from UI");

  //   }
  // }, [count])
  
  // function handleClick(){
  //   setCount(count+1);
    
  // }
  // function handleClickTotal(){
  //   setTotal(total+1);
  // }

  // return (
  //   <div>
  //     <button onClick={handleClick}>
  //       Update count
  //     </button>
  //     <br />
  //     count is:{count}

  //     <br />
  //     <button onClick={handleClick}>
  //       Update total
  //     </button>
  //     <br />
  //     total is:{total}

  //   </div>
  // )



}

export default App
