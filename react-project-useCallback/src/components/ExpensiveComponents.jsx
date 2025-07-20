import React from "react"
import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react"
const ExpensiveComponents= () =>{
    const [count, setCount]=useState(0);
    const [text, setText]=useState("");
    const previousFunction=useRef(null);

    const ExpensiveCalculation =useCallback(()=>{
        console.log("Run expensive calculation...");
        let result=0;
        for(let i=0;i<1000000;i++){
            result+=i;
        }
        return result;
    }, [count]);

    useEffect(()=>{
        if(previousFunction.current){
            if(previousFunction.current===ExpensiveCalculation){
                console.log("Function not re-created");
            }
            else{
                console.log("function got re-created")
            }
        }
        else{
            previousFunction.current=ExpensiveCalculation;
        }
    },[ExpensiveCalculation]);
    return (
        <div>
            <input type="text"
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="Type something" />

            <p>Expensive Calculation Result:{ExpensiveCalculation()}</p>
            <button onClick={()=>setCount(count+1)}>
                Increment 
            </button>

        </div>
    )
}
export default ExpensiveComponents