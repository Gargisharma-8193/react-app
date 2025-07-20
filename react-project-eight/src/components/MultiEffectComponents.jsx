import React ,{useState,useEffect} from 'react';
function MultiEffectComponents() {
    const[count,setCount]=useState(0);
    const [seconds,setSeconds]=useState(0);

    useEffect(() =>{
    console.log('count changed:',count);

   },[count]);
   //side-effct logic will run only whwn count is changed

  useEffect(() =>{
      const intervalId=setInterval(()=>{
          console.log("setInterval executed")
          setSeconds(prevSeconds => prevSeconds+1);
      }, 1000);
  
       return() =>{
        console.log("Time to stop");
        clearInterval(intervalId);
    };
      
     },[]);

   return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment count</button>
        <h2>Seconds:{seconds}</h2>
    </div>
   )
}
export default MultiEffectComponents